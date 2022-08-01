import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import MyNotesApp from './MyNotesApp';
import reportWebVitals from './reportWebVitals';

import 'normalize.css/normalize.css';
import 'line-awesome/dist/line-awesome/css/line-awesome.min.css';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <MyNotesApp />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
 