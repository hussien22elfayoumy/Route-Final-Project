import { z } from 'zod';

export const forgotPasswordFormSchema = z.object({
  email: z.string().email().min(1, 'Email is required').trim().toLowerCase(),
});

export type forgotPasswordFormType = z.infer<typeof forgotPasswordFormSchema>;
