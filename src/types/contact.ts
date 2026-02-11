export interface FileMetadata {
  name: string;
  data: string; // base64
}

export interface ContactFormData {
  name: string;
  email: string;
  message: string;
  budget: string;
  file: FileMetadata | null;
}

export type FormStatus = 'idle' | 'sending' | 'success' | 'error';
