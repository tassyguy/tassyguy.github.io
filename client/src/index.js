import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { RMWCProvider } from '@rmwc/provider'

ReactDOM.render(
  <React.StrictMode>
    <RMWCProvider
    // Globally disable ripples
    ripple={false}
    // Global options for icons
    // Takes the same options as the icon component
    icon={{
      basename: 'material-icons'
    }}
    // Global options for typography
    // allows mapping of a defaultTag or specific classes
    // See the Typography docs for more info
    typography={{
      defaultTag: 'div',
      headline1: 'h1'
    }}
    // Global options for tooltips
    // Takes most of the options for tooltips
    // See the Tooltip docs for more info
    tooltip={{
      align: 'right'
    }}
    >
    <App />
    </RMWCProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
