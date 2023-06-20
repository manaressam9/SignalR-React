import React, { StrictMode }from 'react'
import  { createRoot }  from 'react-dom/client';
import './src/Style.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import App from './src/App.js'

const container = document.getElementById('root');
const root = createRoot(container);
root.render(<StrictMode><App/></StrictMode>);