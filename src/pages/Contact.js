import React from 'react';
import Navbar from '../General/Navbar';

const Contact = () => {
    return (
        <div className="main-container" id="contact-main-container">
            <Navbar />
            <div className="greetings-container" id="contact-greeting">
                <h1>
                    check out my <a target="_blank" href="https://1drv.ms/b/s!AnooLTq-V2ADqB_7IqKPOMsAhorj">resume</a>, <a href="https://linkedin.com/in/meraki-dot" target="_blank">linkedin</a>, <a href="https://github.com/meraki-dot" target="_blank">github</a> and <a href="https://instagram.com/meraki.dot" target="_blank">instagram</a>.
                </h1>
            </div>
            <div className="contact-page-container">
                <h1>drop me a line.<br></br> here's my <a href="mailto:meraki.dot@gmail.com">email</a>.</h1>
            </div>
        </div>
    )
}

export default Contact;
