import { Home } from '../pages/Home';
import { screen, render } from '@testing-library/react';

describe('Home Component', () => {
  it('should render "Hello World" message', () => {
    render(<Home />);
    const titleAppLink = screen.getByText(/Hello world!/i);
    expect(titleAppLink).toBeInTheDocument();
  });
});
