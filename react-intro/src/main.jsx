import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import Intro from './Intro.jsx';

createRoot(document.getElementById('root')).render(
  // <StrictMode>
  <Intro />
  // </StrictMode>
);
