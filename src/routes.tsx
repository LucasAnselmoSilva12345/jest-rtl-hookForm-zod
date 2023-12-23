import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { App } from './App';

export function RoutesApp() {
  return (
    <BrowserRouter>
      <main>
        <Routes>
          <Route path="/" element={<App />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
}
