import React from 'react';
import { Link } from 'react-router-dom';
import Mail_img from '../images/013-newsletter.png';
import Contact_img from '../images/006-like.png';
import './styles/Footer.css';

class Footer extends React.Component {
    render() {
      return (
        <section className="contact-main-container">
            <div>
                <img src={Mail_img} alt="Mail image"/>
                <div className="contact-left">
                    <Link to="/">Mail me</Link>
                    <p>contacto@davidcaguazango.com</p>
                    <p>+57 3177000722</p>
                </div>
            </div>
            <div>
                <img src={Contact_img} alt="Contact image"/>
                <div className="contact-right">
                    <a href="/">Contact</a>
                    <p>davidcaguazango.com</p>
                    <p>Skype: david.caguazango</p>
                </div>
            </div>
            <Link></Link>
            <section className="Footer">
                <p>Web developer personal brand.</p>
            </section>
        </section>

  
      );
    }
}
  
export default Footer;