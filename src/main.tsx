import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { init } from '@emailjs/browser';

// Initialize EmailJS with error handling
try {
  const emailJsKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;
  if (!emailJsKey) {
    console.warn('EmailJS public key is not defined. Contact form will not work.');
  } else {
    init(emailJsKey);
  }
} catch (error) {
  console.error('Failed to initialize EmailJS:', error);
}

createRoot(document.getElementById("root")!).render(<App />);