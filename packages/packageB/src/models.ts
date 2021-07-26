import { z } from 'zod';
import { zEmail } from 'packages/packageA';

function sanitizeEmail(email: string): string {
  return email.trim().toLowerCase();
}

export const localEmail = z.string().email().transform(sanitizeEmail);
export const locallyDefinedModel = z.object({
  email: localEmail
})

export const importedModel = z.object({
  email: zEmail
})