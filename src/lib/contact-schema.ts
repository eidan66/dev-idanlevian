import { z } from 'zod';

const BUDGET_OPTIONS = ['', '1k-5k', '5k-10k', '10k-30k', '30k+'] as const;

// File size limit: 5MB
const MAX_FILE_SIZE = 5 * 1024 * 1024;

// Allowed file types (images and PDFs) - for reference
// const ALLOWED_FILE_TYPES = [
//   'image/jpeg',
//   'image/png',
//   'image/gif',
//   'image/webp',
//   'application/pdf',
// ];

export const contactFormSchema = z.object({
  name: z.string().min(1, 'Name is required').max(100).trim(),
  email: z.string().email('Invalid email address'),
  message: z.string().min(10, 'Message must be at least 10 characters').max(2000).trim(),
  budget: z.enum(BUDGET_OPTIONS),
  file: z
    .object({
      name: z.string(),
      data: z.string(), // base64
    })
    .nullable()
    .optional()
    .refine(
      (file) => {
        if (!file) {
          return true;
        }
        // Decode base64 to check size (rough estimate: base64 is ~1.37x original size)
        const base64Length = file.data.length;
        const estimatedSize = (base64Length * 3) / 4;
        return estimatedSize <= MAX_FILE_SIZE;
      },
      {
        message: 'File size must be less than 5MB',
      },
    ),
});

export type ContactFormData = z.infer<typeof contactFormSchema>;
