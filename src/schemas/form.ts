import * as z from 'zod';

export const formSchema = z
  .object({
    name: z
      .string()
      .min(1, { message: 'The field name should have at least one character' }),
    lastName: z.string().min(1, {
      message: 'The field last name should have at least one character',
    }),
    email: z
      .string()
      .email('Please enter a valid email')
      .min(1, { message: 'This field email should be filled' }),
    age: z
      .number({
        errorMap: () => {
          return {
            message: 'Please enter a positive number or leave empty',
          };
        },
      })
      .positive('Please enter a positive number or leave empty'),
    // age: z
    //   .number()
    //   .int()
    //   .min(0, { message: 'Please enter a positive number or leave empty' }),
    // age: z
    //   .number()
    //   .min(0, { message: 'Please enter a positive number or leave empty' })
    //   .nullable(),
    selectGender: z.string().min(1, 'Please select an option'),
    photoURL: z.string().url('Please enter a valid URL'),
    profession: z.string().min(1, 'Please provide your profession'),
    isStudent: z.enum(['yes', 'no'], {
      errorMap: () => {
        return {
          message: `Please use 'yes' or 'no'`,
        };
      },
    }),
    city: z
      .string()
      .min(1, { message: 'The field city should have at least one character' }),
    state: z.string().min(1, {
      message: 'The field state should have at least one character',
    }),
    country: z.string().min(1, {
      message: 'The country state should have at least one character',
    }),
    password: z.string().min(6, 'Password should be at least six characters'),
    confirmPassword: z.string(),
    agreeTerms: z
      .boolean()
      .default(false)
      .refine((val) => val === true, {
        message: 'Please accept the terms',
      }),
  })
  .refine((fields) => fields.password === fields.confirmPassword, {
    path: ['confirmPassword'],
    message: 'The passwords should be equals',
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
