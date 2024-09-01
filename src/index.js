import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <div class="p-3 m-0 border-0 bd-example" style={{backgroundColor: "#0f172A"}}>
    <App />
    </div>
  </React.StrictMode>
);

