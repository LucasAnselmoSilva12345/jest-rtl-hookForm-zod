import { screen, render } from '@testing-library/react';
import { MemoryRouter, Routes, Route } from 'react-router-dom';
import { Home } from '../pages/Home';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
    </Routes>
  );
};

describe('Router tests', () => {
  it('should render homepage', () => {
    render(
      <MemoryRouter initialEntries={['/']}>
        <App />
      </MemoryRouter>
    );

    const initialTittleMessage = screen.getByText(/Hello World!/i);
    expect(initialTittleMessage).toBeInTheDocument();
  });
});
