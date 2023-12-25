import { formSchema } from '@/schemas/form';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Label } from './ui/label';
import * as z from 'zod';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

type FormProps = z.infer<typeof formSchema>;

export function Form() {
  const {
    handleSubmit,
    register,
    formState: { errors },
    reset,
  } = useForm<FormProps>({
    mode: 'all',
    criteriaMode: 'all',
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
      lastName: '',
      age: 0,
      email: '',
      selectGender: '',
      photoURL: '',
      isStudent: 'no',
      profession: '',
      city: '',
      state: '',
      country: '',
      password: '',
      confirmPassword: '',
      agreeTerms: false,
    },
  });

  console.log(errors);

  const handleForm = (data: FormProps) => {
    console.log({ data });
    reset();
    try {
      const result = formSchema.parse(data);
      console.log({ result });
    } catch (error) {
      if (error instanceof z.ZodError) {
        console.error(error.flatten());
      }
    }
  };

  return (
    <form onSubmit={handleSubmit(handleForm)}>
      <div className="flex flex-col items-center justify-between gap-4 lg:flex-row">
        <div className="grid w-full items-center gap-1.5">
          <Label htmlFor="name">Name</Label>
          <Input
            type="text"
            id="name"
            placeholder="Name"
            aria-label="Name"
            {...register('name')}
          />
        </div>
        <div className="grid w-full items-center gap-1.5">
          <Label htmlFor="lastName">Last Name</Label>
          <Input
            type="text"
            id="lastName"
            placeholder="Last Name"
            aria-label="Last-Name"
            {...register('lastName')}
          />
        </div>
        <div className="grid w-full items-center gap-1.5">
          <Label htmlFor="age">Age</Label>
          <Input
            type="number"
            id="age"
            placeholder="age"
            aria-label="Age"
            {...register('age')}
          />
        </div>
      </div>

      <div className="flex flex-col items-center justify-between gap-4 mt-4 lg:flex-row">
        <div className="grid w-full items-center gap-1.5">
          <Label htmlFor="email">Email</Label>
          <Input
            type="email"
            id="email"
            placeholder="Email"
            aria-label="E-mail"
            {...register('email')}
          />
        </div>

        <div className="grid w-full items-center gap-1.5">
          <select aria-label="Select-Gender" {...register('selectGender')}>
            <option value="">Selecione your Gender</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="none">I prefer not respond</option>
          </select>
        </div>

        <div className="grid w-full items-center gap-1.5">
          <Label htmlFor="url">Link URL of your photo</Label>
          <Input
            type="text"
            id="url"
            placeholder="put URL's photo"
            aria-label="Photo-URL"
            {...register('photoURL')}
          />
        </div>
      </div>

      <div className="flex flex-col items-center justify-between gap-4 mt-4 lg:flex-row">
        <div className="grid w-full items-center gap-1.5">
          <Label htmlFor="isStudent">Is Student?</Label>
          <Input
            type="text"
            id="isStudent"
            placeholder="Is student?"
            aria-label="Is-Student"
            {...register('isStudent')}
          />
        </div>
        <div className="grid w-full items-center gap-1.5">
          <Label htmlFor="profession">What do you do for a living?</Label>
          <Input
            type="text"
            id="profession"
            placeholder="Digit your profession"
            aria-label="Profession"
            {...register('profession')}
          />
        </div>
      </div>

      <div className="flex flex-col items-center justify-between gap-4 mt-4 lg:flex-row">
        <div className="grid w-full items-center gap-1.5">
          <Label htmlFor="city">Which city where you living?</Label>
          <Input
            type="text"
            id="city"
            placeholder="ex: New York"
            aria-label="City"
            {...register('city')}
          />
        </div>

        <div className="grid w-full items-center gap-1.5">
          <Label htmlFor="state">Which state of your city</Label>
          <Input
            type="text"
            id="state"
            placeholder="ex: Colorado"
            aria-label="State"
            {...register('state')}
          />
        </div>

        <div className="grid w-full items-center gap-1.5">
          <Label htmlFor="country">Which country you living?</Label>
          <Input
            type="text"
            id="country"
            placeholder="ex: Brazil"
            aria-label="Country"
            {...register('country')}
          />
        </div>
      </div>

      <div className="flex flex-col items-center justify-between gap-4 mt-4 lg:flex-row">
        <div className="grid w-full items-center gap-1.5">
          <Label htmlFor="password">Create your password</Label>
          <Input
            type="password"
            placeholder="**************"
            id="password"
            aria-label="Password"
            {...register('password')}
          />
        </div>

        <div className="grid w-full items-center gap-1.5">
          <Label htmlFor="password">Confirm your password</Label>
          <Input
            type="password"
            placeholder="Confirm your password"
            aria-label="Confirm-Password"
            {...register('confirmPassword')}
          />
        </div>
      </div>

      <div className="my-4 flex items-center gap-1 lg:justify-end">
        <input
          type="checkbox"
          id="agreeTerms"
          aria-label="Agree-Terms"
          {...register('agreeTerms')}
        />
        <Label htmlFor="agreeTerms">
          You agree to our Terms of Service and Privacy Policy
        </Label>
      </div>

      <Button type="submit" className="w-full" aria-label="Send">
        Send
      </Button>
    </form>
  );
}
