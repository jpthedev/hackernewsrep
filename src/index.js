import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

if (typeof ReactDOM.hydrate === "function") {
    ReactDOM.hydrate(<App />, document.getElementById('root'));
  } else {
    ReactDOM.render(<App />, document.getElementById('root'));
  }

serviceWorker.register();
