import React from "react";
import { ContactContainer } from "./Contact.style.js";

import { FiLinkedin } from "react-icons/fi";
import { FiGithub } from "react-icons/fi";
import { FiInstagram } from "react-icons/fi";

const email = "badrhand@gmail.com";

function Contact() {
  return (
    <ContactContainer id="contact">
      <div className="contact__Container">
        <h3>04. What's your next move?</h3>
        <h1>Get In Touch</h1>
        <p>
          Although I’m not currently looking for any new opportunities, my inbox
          is always open. Whether you have a question or just want to say hi,
          I’ll try my best to get back to you!
        </p>
        <a className="email-link" href={`mailto:${email}`}>
          Say Hello
        </a>
      </div>
      <div className="footer">
        <div className="icons__container">
          <ul>
            <li>
              <a
                href="https://github.com/padreno/"
                target="_blank"
                rel="noopener noreferrer"
                className="github__icon"
              >
                <FiGithub />
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/in/badr-khouzima-47222969/"
                target="_blank"
                rel="noopener noreferrer"
                className="linkedin__icon"
              >
                <FiLinkedin />
              </a>
            </li>
            <li>
              <a
                href="https://www.instagram.com/badrkhouzima/"
                target="_blank"
                rel="noopener noreferrer"
                className="instagram__icon"
              >
                <FiInstagram />
              </a>
            </li>
          </ul>
        </div>
        <p className="design__Credit">
          Built by Badr Khouzima, Inspired by Brittany Chiang WebPage design
        </p>
      </div>
    </ContactContainer>
  );
}

export default Contact;
