import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import './index.css';

import { BrowserRouter } from 'react-router';

const currentYear = new Date().getFullYear();
console.log(`Copyright © ${currentYear} Fabian Railey Victuelles`);
console.log('Made with love <3 and hatred </3');

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>,
);
