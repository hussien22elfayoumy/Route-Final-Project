import { z } from 'zod';

export const resetPasswordFormsSchema = z
  .object({
    password: z
      .string()
      .min(1, 'Password is required')
      .min(8, 'Password must be at least 8 characters')
      .regex(/[A-Z]/, 'Password must contain at least one uppercase letter')
      .regex(/[a-z]/, 'Password must contain at least one lowercase letter')
      .regex(/[0-9]/, 'Password must contain at least one number')
      .regex(/[^a-zA-Z0-9]/, 'Password must contain at least one special character')
      .trim(),
    rePassword: z.string(),
  })
  .refine((values) => values.password === values.rePassword, {
    message: 'Password must be match',
    path: ['rePassword'],
  });

export type resetPasswordFormsType = z.infer<typeof resetPasswordFormsSchema>;
