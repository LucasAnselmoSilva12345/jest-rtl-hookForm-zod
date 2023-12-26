import { Form } from '../components/Form';
import { render } from '@testing-library/react';

describe('Home Component', () => {
  it('should render form', () => {
    render(<Form />);
  });
});
