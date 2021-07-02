import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';


let dialogsData = [
    { id: 1, name: 'Aleksandr' },
    { id: 2, name: 'Larisa' },
    { id: 3, name: 'Anna' },
    { id: 4, name: 'Ilya' },
    { id: 5, name: 'Marina' },
    { id: 6, name: 'Olya' },
    { id: 7, name: 'Maksim' },
];

let messagesData = [
    { id: 1, message: 'Hi!' },
    { id: 2, message: 'How are you?' },
    { id: 3, message: 'Cool' },
    { id: 4, message: 'Love <3' },
];

let postsData = [
    { id: 1, message: 'Hi, how are you?', countLikes: '14' },
    { id: 2, message: 'It`s my first post', countLikes: '25' },
];


ReactDOM.render(
  <React.StrictMode>
      <BrowserRouter>
    <App dialogsData={dialogsData} messagesData={messagesData} postsData={postsData}/>
      </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
