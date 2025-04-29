import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import './index.css';
import './style.css';

console.log('main.tsx is loaded');

const rootElement = document.getElementById('root');

if (!rootElement) {
  console.error('Could not find root element');
} else {
  console.log('Root element found, rendering app');
  ReactDOM.createRoot(rootElement).render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
}
