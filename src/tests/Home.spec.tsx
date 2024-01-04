import { Form } from '../components/Form';
import { render } from '@testing-library/react';

const handleSubmitForm = jest.fn();

describe('Home Component', () => {
  it('should render form', () => {
    render(<Form handleSubmitForm={handleSubmitForm} />);
  });
});
