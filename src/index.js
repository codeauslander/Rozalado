import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import Store from './store/configureStore';
import './index.css';

ReactDOM.render(
  <Store>
    <App />
  </Store>,
  document.getElementById('root')
);
