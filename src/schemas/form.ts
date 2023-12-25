import * as z from 'zod';

const minLengthErrorMessage = 'This field should have at least one character';
const validNumberErrorMessage = 'Please enter a valid number';
const emailErrorMessage = 'Please enter a valid email';
const gmailAccountErrorMessage = 'Please use a Gmail account';
const selectOptionErrorMessage = 'Please select an option';
const urlErrorMessage = 'Please enter a valid URL';
const professionErrorMessage = 'Please provide your profession';
const passwordLengthErrorMessage = 'Password should be at least six characters';
const passwordShouldBeEquals = 'The passwords should be equals';
const termsErrorMessage = 'Please accept the terms';

export const formSchema = z
  .object({
    name: z.string().min(1, { message: minLengthErrorMessage }),
    lastName: z.string().min(1, { message: minLengthErrorMessage }),
    email: z
      .string()
      .min(1, { message: 'This field should be filled' })
      .email(emailErrorMessage)
      .endsWith('@gmail.com', gmailAccountErrorMessage),
    age: z
      .number({
        errorMap: () => {
          return {
            message: validNumberErrorMessage,
          };
        },
      })
      .positive(validNumberErrorMessage),
    selectGender: z.string().min(1, selectOptionErrorMessage),
    photoURL: z.string().url(urlErrorMessage),
    profession: z.string().min(1, professionErrorMessage),
    isStudent: z.enum(['yes', 'no'], {
      errorMap: () => {
        return {
          message: `Please use 'yes' or 'no'`,
        };
      },
    }),
    city: z.string().min(1, { message: minLengthErrorMessage }),
    state: z.string().min(1, { message: minLengthErrorMessage }),
    country: z.string().min(1, { message: minLengthErrorMessage }),
    password: z.string().min(6, passwordLengthErrorMessage),
    confirmPassword: z.string(),
    agreeTerms: z
      .boolean()
      .default(false)
      .refine((val) => val === true, {
        message: termsErrorMessage,
      }),
  })
  .refine((fields) => fields.password === fields.confirmPassword, {
    path: ['confirmPassword'],
    message: passwordShouldBeEquals,
  })
  .transform((fields) => ({
    name: fields.name.toLocaleLowerCase(),
    lastName: fields.lastName.toLocaleLowerCase(),
    email: fields.email,
    age: fields.age,
    selectGender: fields.selectGender,
    photoURL: fields.photoURL.toLocaleLowerCase(),
    profession: fields.profession,
    isStudent: fields.isStudent.toLowerCase(),
    city: fields.city,
    state: fields.state,
    country: fields.country,
    password: fields.password,
    confirmPassword: fields.confirmPassword,
    agreeTerms: fields.agreeTerms,
  }));
