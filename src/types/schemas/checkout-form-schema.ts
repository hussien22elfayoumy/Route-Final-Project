import { z } from 'zod';

export const CheckOutFormSchema = z.object({
  details: z
    .string()
    .min(1, 'Adress details is Required')
    .min(5, 'Adress details must be at least 10 chars'),
  city: z.string().min(1, 'City is Required').max(50, 'city must be at most 50 chars'),
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
});

export type CheckOutFormType = z.infer<typeof CheckOutFormSchema>;
