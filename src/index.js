import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import '../src/styles/global.css';
import reducer, { initialState } from './Context/reducer';
import { SpotifyProvider } from './Context/SpotifyProvider';

ReactDOM.render(
  <React.StrictMode>
    <SpotifyProvider initialState={initialState} reducer={reducer}>
      <App />
    </SpotifyProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

