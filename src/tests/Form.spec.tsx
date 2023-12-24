import { Form } from '../components/Form';
import { screen, render } from '@testing-library/react';

describe('Form Component', () => {
  it('should render form', () => {
    render(<Form />);
  });

  it('should render form on user screen', () => {
    render(<Form />);

    const inputName = screen.getByRole('textbox', { name: 'Name' });
    const inputLastName = screen.getByRole('textbox', { name: 'Last-Name' });
    const inputEmail = screen.getByRole('textbox', { name: 'E-mail' });
    const inputAge = screen.getByRole('spinbutton', { name: 'Age' });
    const inputSelectGender = screen.getByRole('combobox', {
      name: 'Select-Gender',
    });
    const inputPhotURL = screen.getByRole('textbox', { name: 'Photo-URL' });
    const inputProfession = screen.getByRole('textbox', { name: 'Profession' });
    const inputIsStuddent = screen.getByRole('textbox', { name: 'Is-Student' });
    const inputCity = screen.getByRole('textbox', { name: 'City' });
    const inputState = screen.getByRole('textbox', { name: 'State' });
    const inputCountry = screen.getByRole('textbox', { name: 'Country' });
    const inputPassword = screen.getByLabelText('Password');
    const inputConfirmPassword = screen.getByLabelText('Confirm-Password');
    const agreeTerms = screen.getByRole('checkbox', { name: 'Agree-Terms' });
    const buttonSubmit = screen.getByRole('button', { name: /Send/i });

    expect(inputName).toBeVisible();
    expect(inputLastName).toBeVisible();
    expect(inputEmail).toBeVisible();
    expect(inputAge).toBeVisible();
    expect(inputSelectGender).toBeVisible();
    expect(inputPhotURL).toBeVisible();
    expect(inputProfession).toBeVisible();
    expect(inputIsStuddent).toBeVisible();
    expect(inputCity).toBeVisible();
    expect(inputCountry).toBeVisible();
    expect(inputState).toBeVisible();
    expect(inputPassword).toBeVisible();
    expect(inputConfirmPassword).toBeVisible();
    expect(agreeTerms).toBeVisible();
    expect(buttonSubmit).toBeVisible();
  });
});
