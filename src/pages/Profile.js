import React from 'react';

import './styles/Profile.css';
import ProfilePic from '../images/ProfilePic.jpg';
import Nodelogo from '../images/node.svg';
import Reactlogo from '../images/react.png';
import Angularlogo from '../images/angular-icon.svg';
import mongologo from '../images/mongo.png';
import javaslogo from '../images/javascript.svg';
import laravellogo from '../images/laravel.png';
import htmllogo from '../images/html.svg';
import phplogo from '../images/php.svg';
import mysqllogo from '../images/mysql.svg';
import csslogo from '../images/css.svg';

class Profile extends React.Component{
    render(){
        return(
            <React.Fragment>
                <section className="profile-main-container">
                    <div className="grid-container profile-container">
                        <div>
                            <img id="profile-picture" src={ProfilePic} alt="Profile picture"/>
                        </div>
                        <div>
                            <h2>Hola, I am David Caguazango!</h2>
                            <p>I'm a colombian bioengineer fascinated by the web development world, continuosly learning and applying front-end and back-end technologies.</p>
                            <p>To whom it may concern, I'm best known for my reliability and work-ethic, I've worked my way to be focused, motivated and disciplined, never stop learning and raise my standards every single day.</p>
                            <p>Let me introduce you to my top projects so you can check out my work, that way you can benefit from my knowledge by automating your main tasks, optimizing your resources, generating leads, managing your information safely and efficiently. </p>
                            <p>Currently I'm focused on React.js, Node.js, Laravel and Angular.</p>
                        </div>
                    </div>
                    <div className="dev-logos-container">
                        <img src={Nodelogo} alt="Node logo"/>
                        <img src={Reactlogo} alt="React logo"/>
                        <img src={Angularlogo} alt="Angular logo"/>
                        <img src={mongologo} alt="Mongodb logo"/>
                        <img src={javaslogo} alt="Javascript logo"/>
                        <img id="laravel-icon" src={laravellogo} alt="Laravel logo"/>
                        <img src={htmllogo} alt="html logo"/>
                        <img src={phplogo} alt="php logo"/>
                        <img src={mysqllogo} alt="mysql logo"/>
                        <img src={csslogo} alt="css logo"/>
                    </div>
                </section>
                <section className="profile-main-proyects">
                    <div className="grid-container">
                        <h3>Projects</h3>
                        <div className="proyects-main-container">
                            <article className="proyect-container">
                                <h4>Título</h4>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem recusandae cum quae accusantium iusto sit ipsum, perspiciatis eos in animi voluptatum quos aut? Magni quo excepturi placeat, aliquid fugiat modi.</p>
                            </article>
                            <article className="proyect-container">
                                <h4>Título</h4>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem recusandae cum quae accusantium iusto sit ipsum, perspiciatis eos in animi voluptatum quos aut? Magni quo excepturi placeat, aliquid fugiat modi.</p>
                            </article>
                            <article className="proyect-container">
                                <h4>Título</h4>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem recusandae cum quae accusantium iusto sit ipsum, perspiciatis eos in animi voluptatum quos aut? Magni quo excepturi placeat, aliquid fugiat modi.</p>
                            </article>
                        </div>
                    </div>
                </section>
            </React.Fragment>
        );
    }
}

export default Profile;