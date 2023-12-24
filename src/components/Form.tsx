import { Button } from './ui/button';
import { Input } from './ui/input';
import { Label } from './ui/label';

export function Form() {
  return (
    <form action="">
      <div className="flex flex-col items-center justify-between gap-4 lg:flex-row">
        <div className="grid w-full items-center gap-1.5">
          <Label htmlFor="name">Name</Label>
          <Input type="text" id="name" placeholder="Name" aria-label="Name" />
        </div>
        <div className="grid w-full items-center gap-1.5">
          <Label htmlFor="lastName">Last Name</Label>
          <Input
            type="text"
            id="lastName"
            placeholder="Last Name"
            aria-label="Last-Name"
          />
        </div>
        <div className="grid w-full items-center gap-1.5">
          <Label htmlFor="age">Age</Label>
          <Input type="number" id="age" placeholder="age" aria-label="Age" />
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
          />
        </div>

        <div className="grid w-full items-center gap-1.5">
          <select aria-label="Select-Gender">
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
          />
        </div>
        <div className="grid w-full items-center gap-1.5">
          <Label htmlFor="profession">What do you do for a living?</Label>
          <Input
            type="text"
            id="profession"
            placeholder="Digit your profession"
            aria-label="Profession"
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
          />
        </div>

        <div className="grid w-full items-center gap-1.5">
          <Label htmlFor="state">Which state of your city</Label>
          <Input
            type="text"
            id="state"
            placeholder="ex: Colorado"
            aria-label="State"
          />
        </div>

        <div className="grid w-full items-center gap-1.5">
          <Label htmlFor="country">Which country you living?</Label>
          <Input
            type="text"
            id="country"
            placeholder="ex: Brazil"
            aria-label="Country"
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
          />
        </div>

        <div className="grid w-full items-center gap-1.5">
          <Label htmlFor="password">Confirm your password</Label>
          <Input
            type="password"
            placeholder="Confirm your password"
            aria-label="Confirm-Password"
          />
        </div>
      </div>

      <div className="my-4 flex items-center gap-1 lg:justify-end">
        <input type="checkbox" id="agreeTerms" aria-label="Agree-Terms" />
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
