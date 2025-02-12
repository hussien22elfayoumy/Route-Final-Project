import { z } from 'zod';

// TODO: Signup form schema
export const signUpFormSchema = z
  .object({
    name: z
      .string()
      .min(5, 'Name must be at least 5 chars')
      .max(50, 'Name must be at most 50 chars'),
    email: z.string().min(1, 'Email is required').email().trim().toLowerCase(),
    phone: z
      .string()
      .min(1, 'Phone is required')
      .refine(
        (value) =>
          value.startsWith('010') ||
          value.startsWith('012') ||
          value.startsWith('015') ||
          value.startsWith('011'),
        {
          message: 'Phone number must start with 010, 012, 011, or 015',
        }
      )
      .refine((value) => value.length === 11, {
        message: 'Phone number must be exactly 11 digits long',
      })
      .refine((value) => /^\d+$/.test(value), {
        message: 'Phone number must contain only digits',
      }),
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

export type SignUpFormType = z.infer<typeof signUpFormSchema>;

// TODO: Login form schema
export const loginFormSchema = z.object({
  email: z.string().min(1, 'Email is required').email().trim().toLowerCase(),

  password: z.string().min(1, 'Password is required'),
});

export type LoginFormType = z.infer<typeof loginFormSchema>;

// TODO: Forgot password form schema
export const forgotPasswordFormSchema = z.object({
  email: z.string().min(1, 'Email is required').email().trim().toLowerCase(),
});

export type ForgotPasswordFormType = z.infer<typeof forgotPasswordFormSchema>;

// TODO: Verify reset code form schema
export const verifyResetCodeSchema = z.object({
  resetCode: z.string().min(1, 'Reset code is required'),
});

export type VerifyResetCodeType = z.infer<typeof verifyResetCodeSchema>;

// TODO: Reset Password Form schema
export const resetPasswordFormsSchema = z
  .object({
    email: z.string().min(1, 'Email is required').email().trim().toLowerCase(),
    newPassword: z
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
  .refine((values) => values.newPassword === values.rePassword, {
    message: 'Password must be match',
    path: ['rePassword'],
  });

export type resetPasswordFormsType = z.infer<typeof resetPasswordFormsSchema>;
