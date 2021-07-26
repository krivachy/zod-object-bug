import { z } from 'zod';

function sanitizeEmail(email: string): string {
  return email.trim().toLowerCase();
}

export const zEmail = z.string().email().transform(sanitizeEmail);