import { LoginFormType } from '../types/schemas/login-form-schema';

export default async function onLoginFormSubmit(values: LoginFormType) {
  console.log(values);
}
