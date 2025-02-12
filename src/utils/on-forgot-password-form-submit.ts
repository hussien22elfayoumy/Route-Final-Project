import { ForgotPasswordFormType } from '../types/schemas/forgot-password-form-schema';

export default async function onForgotPasswordFormSubmit(values: ForgotPasswordFormType) {
  console.log(values);
}
