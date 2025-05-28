// src/main.jsx
import React, { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx'; // Ensure the file name and path are correct
import './index.css'; // Import your global styles

const root = createRoot(document.getElementById('root'));
root.render(
    <StrictMode>
        <App />
    </StrictMode>
);
