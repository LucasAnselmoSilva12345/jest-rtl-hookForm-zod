import userEvent from '@testing-library/user-event';
import { Form } from '../components/Form';
import { screen, render, act, waitFor } from '@testing-library/react';

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

  it('should show error message when fields was empty', async () => {
    render(<Form />);
    const buttonSubmit = screen.getByRole('button', { name: /Send/i });

    act(() => {
      userEvent.click(buttonSubmit);
    });

    await waitFor(() => {
      expect(
        screen.getByText('The field name should have at least one character')
      ).toBeVisible();
      expect(
        screen.getByText(
          'The field last name should have at least one character'
        )
      ).toBeVisible();
      expect(
        screen.getByText('Please enter a positive number or leave empty')
      ).toBeVisible();
      expect(screen.getByText('Please enter a valid email')).toBeVisible();
      expect(screen.getByText('Please select an option')).toBeVisible();
      expect(screen.getByText('Please enter a valid URL')).toBeVisible();
      expect(screen.getByText('Please provide your profession')).toBeVisible();
      expect(
        screen.getByText('The field city should have at least one character')
      ).toBeVisible();
      expect(
        screen.getByText('The field state should have at least one character')
      ).toBeVisible();
      expect(
        screen.getByText('The country state should have at least one character')
      ).toBeVisible();
      expect(
        screen.getByText('Password should be at least six characters')
      ).toBeVisible();
      expect(screen.getByText('Please accept the terms')).toBeVisible();
    });
  });

  it('should type into fields and submit form', async () => {
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

    act(() => {
      userEvent.type(inputName, 'Bruce');
      userEvent.type(inputLastName, 'Wayne');
      userEvent.clear(inputAge);
      userEvent.type(inputAge, '10');
      userEvent.type(inputEmail, 'brucewayne@gmail.com');
      userEvent.type(inputSelectGender, 'Male');
      userEvent.type(
        inputPhotURL,
        'https://unsplash.com/photos/closeup-photo-of-shuriken-on-wood-n-2_KHgeAy0'
      );
      userEvent.type(inputIsStuddent, 'yes');
      userEvent.type(inputProfession, 'Businessperson');
      userEvent.type(inputCity, 'Los Angeles');
      userEvent.type(inputState, 'Colorado');
      userEvent.type(inputCountry, 'United State of America');
      userEvent.type(inputPassword, 'bruceWayne2023');
      userEvent.type(inputConfirmPassword, 'bruceWayne2023');
      userEvent.click(agreeTerms);
      userEvent.click(buttonSubmit);
    });

    await waitFor(() => {
      expect(
        screen.queryByText('The field name should have at least one character')
      ).not.toBeInTheDocument();
      expect(
        screen.queryByText(
          'The field last name should have at least one character'
        )
      ).not.toBeInTheDocument();
      expect(
        screen.queryByText('Please enter a valid email')
      ).not.toBeInTheDocument();
      expect(
        screen.queryByText('Please enter a positive number or leave empty')
      ).not.toBeInTheDocument();
      expect(
        screen.queryByText('Please select an option')
      ).not.toBeInTheDocument();
      expect(
        screen.queryByText('Please enter a valid URL')
      ).not.toBeInTheDocument();
      expect(
        screen.queryByText('Please provide your profession')
      ).not.toBeInTheDocument();
      expect(
        screen.queryByText('The field city should have at least one character')
      ).not.toBeInTheDocument();
      expect(
        screen.queryByText('The field state should have at least one character')
      ).not.toBeInTheDocument();
      expect(
        screen.queryByText(
          'The country state should have at least one character'
        )
      ).not.toBeInTheDocument();
      expect(
        screen.queryByText('Password should be at least six characters')
      ).not.toBeInTheDocument();
      expect(
        screen.queryByText('The passwords should be equals')
      ).not.toBeInTheDocument();
      expect(
        screen.queryByText('Please accept the terms')
      ).not.toBeInTheDocument();
    });
  });

  it('should show age field error message when the value is not positive', async () => {
    render(<Form />);

    const inputAge = screen.getByRole('spinbutton', { name: 'Age' });
    const buttonSubmit = screen.getByRole('button', { name: /Send/i });

    act(() => {
      userEvent.clear(inputAge);
      userEvent.type(inputAge, '-10');
      userEvent.click(buttonSubmit);
    });

    await waitFor(() => {
      expect(
        screen.getByText('Please enter a positive number or leave empty')
      ).toBeVisible();
    });
  });

  it('should show email field error message when the value is not valid email', async () => {
    render(<Form />);

    const inputEmail = screen.getByRole('textbox', { name: 'E-mail' });
    const buttonSubmit = screen.getByRole('button', { name: /Send/i });

    act(() => {
      userEvent.type(inputEmail, 'brucewayne');
      userEvent.click(buttonSubmit);
    });

    await waitFor(() => {
      expect(screen.getByText('Please enter a valid email')).toBeVisible();
    });
  });

  it('should show photo field error message when the value is not the URL', async () => {
    render(<Form />);

    const inputPhotURL = screen.getByRole('textbox', { name: 'Photo-URL' });
    const buttonSubmit = screen.getByRole('button', { name: /Send/i });

    act(() => {
      userEvent.type(inputPhotURL, 'exampleofurl');
      userEvent.click(buttonSubmit);
    });

    await waitFor(() => {
      expect(screen.getByText('Please enter a valid URL')).toBeVisible();
    });
  });
});
