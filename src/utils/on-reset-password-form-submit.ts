import { resetPasswordFormsType } from '../types/schemas/reset-password-form-schema';

export default async function onResetPasswordFormSubmit(values: resetPasswordFormsType) {
  console.log(values);
}
