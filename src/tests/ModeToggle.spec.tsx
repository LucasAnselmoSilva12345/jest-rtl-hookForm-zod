import { ModeToggle } from '../components/mode-toggle';
import { render, fireEvent, screen } from '@testing-library/react';

describe('Mode Toggle switch theme component', () => {
  it('should toggles the class on HTML element', () => {
    render(<ModeToggle />);

    const htmlElement = document.documentElement;
    expect(htmlElement.classList.contains('dark')).toBe(false);

    const srOnlyElement = screen.getByText('Toggle theme');
    fireEvent.click(srOnlyElement);
    expect(htmlElement.classList.contains('light')).toBe(false);

    fireEvent.click(srOnlyElement);
    expect(htmlElement.classList.contains('dark')).toBe(false);
  });
});
