import React from 'react';
//import ReactDOM from 'react-dom/client';
import './App.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createRoot } from 'react-dom/client';
const container = document.getElementById('root');
const root = createRoot(container); // createRoot(container!) 
root.render(<App/>);


import ReactDOM from 'react-dom'
import App from './App'
import './index.css'

ReactDOM.render (<App/>, document.querySelector('#root'))
