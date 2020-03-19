import React from 'react';
import Navbar from '../General/Navbar';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

const Home = () => {
    return (
        <div className="main-container">
            <Navbar />
            <div className="greetings-container">
                <h1>
                    joshua <span>솔</span> han, frontend developer<span>.</span>
                </h1>
            </div>
            <div className="description">
                <h2>
                    <strong>meraki</strong>(v.): to do something with <span>soul</span>, <span>creativity</span>, or <span>love</span>.
                </h2>
            </div>
            <div className="column-of-work">
                <div className="singular-work-container">
                    <Link to='/dollface'>
                        <h2>dollface permanent makeup</h2>
                        <p>ux/ui design · front end development · website</p>
                    </Link>
                    <div className="link-icons">
                        <a href="https://github.com/Meraki-dot/dollfacepmu" target="_blank"><FontAwesomeIcon icon={faGithub} /></a>
                        <a href="https://meraki-dot.github.io/dollfacepmu/" target="_blank"><FontAwesomeIcon icon={faExternalLinkAlt} /></a>
                    </div>
                </div>
                <div className="singular-work-container">
                    <Link to='/angela_contreras'>
                        <h2>angela contreras</h2>
                        <p>ux/ui design · front end development · website</p>
                    </Link>
                    <div className="link-icons">
                        <a href="https://github.com/Meraki-dot/angela_website" target="_blank"><FontAwesomeIcon icon={faGithub} /></a>
                    </div>
                </div>
                <div className="singular-work-container">
                    <Link to='/pabl'>
                        <h2>pure artistry by lynne</h2>
                        <p>ux/ui design · website</p>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Home;
