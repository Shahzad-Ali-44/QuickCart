import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.tsx';
import { BrowserRouter as Router } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import { Provider } from "react-redux";
import { store } from "./store.ts";
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Router>
      <ToastContainer position="top-right" autoClose={2000} />
      <Provider store={store}>
        <App />
      </Provider>
    </Router>
  </StrictMode>,
);
