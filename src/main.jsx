import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import ReactGA from "react-ga";

// Initialize Google Analytics with your tracking ID
ReactGA.initialize('UA-XXXXXXXXX-X');

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
