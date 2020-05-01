import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import './styles/Home.css';
const text=`Professional Web Site 
and 
Personal Blog`;
export default class Home extends Component {
    render() {
      return (
        <main className="Home">
          <section>
      <h1 className="Home-text">{text}</h1>
            <Link to="/" className="Home-button">Go for it!</Link>
          </section>
        </main>
      );
    }
  }