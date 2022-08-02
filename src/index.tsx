import React from 'react';
import ReactDOM from 'react-dom/client';
import MyNotesApp from './MyNotesApp';
import reportWebVitals from './reportWebVitals';

import 'normalize.css/normalize.css';
import 'line-awesome/dist/line-awesome/css/line-awesome.min.css';
import NotesContextProvider, { NoteContextType, NotesContext } from './NotesContext';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  
  <React.StrictMode>
    <NotesContextProvider>
      <MyNotesApp />
    </NotesContextProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
 