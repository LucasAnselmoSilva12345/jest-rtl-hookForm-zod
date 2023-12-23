import { App } from '../App';
import { screen, render } from '@testing-library/react';

describe('App Component', () => {
  it('should render "Hello World" message', () => {
    render(<App />);
    const titleAppLink = screen.getByText(/Hello world!/i);
    expect(titleAppLink).toBeInTheDocument();
  });
});
