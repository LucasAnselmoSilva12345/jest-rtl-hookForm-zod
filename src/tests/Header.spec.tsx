import { MemoryRouter } from 'react-router-dom';
import { screen, render } from '@testing-library/react';
import { Header } from '../components/Header';

describe('Header Component', () => {
  beforeEach(() => {
    render(
      <MemoryRouter>
        <Header />
      </MemoryRouter>
    );
  });

  it('should render link with correct href attributes to navigate to the homepage', () => {
    const titleHeader = screen.getByText(/Jest | RTL | HookForm | Zod/i);
    expect(titleHeader).toBeInTheDocument();
  });
});
