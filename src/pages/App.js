import React from 'react';
//import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';

//import Home from './pages/Home';
const list = [ { title: 'React', url: 'https://facebook.github.io/react/', author: 'Jordan Walke', num_comments: 3, points: 4, objectID: 0, }, { title: 'Redux', url: 'https://github.com/reactjs/redux', author: 'Dan Abramov, Andrew Clark', num_comments: 2, points: 5, objectID: 1, }, ];
function App() {
  return (
  <div className="App"> 
    <p>Hola mundo </p>
    <a href="/aa">ds<span class="flaticon-001-facebook"></span></a>
    <a href="/aa"><span class="flaticon-002-twitter"></span></a>
    <a href="/aa"><span class="flaticon-011-instagram"></span></a>
    <a href="/aa"><span class="flaticon-010-linkedin"></span></a>
    <a href="/aa"><span class="flaticon-008-youtube"></span></a>
  </div>
  );
}

export default App;
