import { SignUpFormType } from '../types/schemas/signup-form-schema';

export default async function onSignUpFormSubmit(values: SignUpFormType) {
  console.log(values);
}
