import { z } from 'zod';

export const forgotPasswordFormSchema = z.object({
  email: z.string().min(1, 'Email is required').email().trim().toLowerCase(),
});

export type ForgotPasswordFormType = z.infer<typeof forgotPasswordFormSchema>;
