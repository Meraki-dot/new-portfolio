import React from "react";
import Navbar from "../General/Navbar";

const Contact = () => {
  return (
    <div className="main-container" id="contact-main-container">
      <Navbar />
      <div className="greetings-container" id="contact-greeting">
          <h1 id="contact-first">
            check out my{" "}
            <a
              href="/CV.pdf"
              download="/CV.pdf"
            >
              cv/resume
            </a>
            ,{" "}
            <a href="https://linkedin.com/in/meraki-dot" target="_blank">
              linkedin
            </a>
            ,{" "}
            <a href="https://github.com/meraki-dot" target="_blank">
              github
            </a>
            ,{" "}
            <a target="_blank" href="https://www.behance.net/meraki-dot">
              behance
            </a>{" "}
            and{" "}
            <a href="https://instagram.com/meraki.dot" target="_blank">
              instagram
            </a>
            .
          </h1>
      </div>
      <div className="contact-page-container">
          <h1>
            drop me a line.<br></br> here's my{" "}
            <a href="mailto:meraki.dot@gmail.com">email</a>.
          </h1>
      </div>
    </div>
  );
};

export default Contact;
