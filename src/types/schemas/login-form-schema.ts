import { z } from 'zod';

export const loginFormSchema = z.object({
  email: z.string().email().min(1, 'Email is required').trim().toLowerCase(),

  password: z.string().min(1, 'Password is required'),
});

export type LoginFormType = z.infer<typeof loginFormSchema>;
