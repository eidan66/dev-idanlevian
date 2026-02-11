'use client';

import { useState } from 'react';

import { contactFormSchema } from '@/lib/contact-schema';
import type { ContactFormData, FormStatus } from '@/types/contact';

const ALLOWED_FILE_TYPES = [
  'image/jpeg',
  'image/png',
  'image/gif',
  'image/webp',
  'application/pdf',
];
const MAX_FILE_SIZE = 5 * 1024 * 1024; // 5MB
const STATUS_RESET_DELAY = 5000;

export function useContactForm() {
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    message: '',
    budget: '',
    file: null,
  });
  const [formStatus, setFormStatus] = useState<FormStatus>('idle');

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) {
      return;
    }

    if (!ALLOWED_FILE_TYPES.includes(file.type)) {
      alert('Invalid file type. Please upload an image or PDF.');
      return;
    }
    if (file.size > MAX_FILE_SIZE) {
      alert('File size must be less than 5MB.');
      return;
    }

    const reader = new FileReader();
    reader.onloadend = () => {
      setFormData((prev) => ({
        ...prev,
        file: { name: file.name, data: reader.result as string },
      }));
    };
    reader.readAsDataURL(file);
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>,
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleFormSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormStatus('sending');

    const validation = contactFormSchema.safeParse(formData);
    if (!validation.success) {
      setFormStatus('error');
      setTimeout(() => setFormStatus('idle'), STATUS_RESET_DELAY);
      return;
    }

    const webhookUrl = process.env.NEXT_PUBLIC_N8N_CONTACT_WEBHOOK_URL;
    if (!webhookUrl) {
      setFormStatus('error');
      setTimeout(() => setFormStatus('idle'), STATUS_RESET_DELAY);
      return;
    }

    try {
      const response = await fetch(webhookUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...validation.data,
          timestamp: new Date().toISOString(),
        }),
      });

      if (response.ok) {
        setFormStatus('success');
        setFormData({
          name: '',
          email: '',
          message: '',
          budget: '',
          file: null,
        });
        const fileInput = document.querySelector<HTMLInputElement>('input[type="file"]');
        if (fileInput) {
          fileInput.value = '';
        }
      } else {
        setFormStatus('error');
      }
    } catch {
      setFormStatus('error');
    }
    setTimeout(() => setFormStatus('idle'), STATUS_RESET_DELAY);
  };

  return {
    formData,
    formStatus,
    handleFileChange,
    handleInputChange,
    handleFormSubmit,
  };
}
