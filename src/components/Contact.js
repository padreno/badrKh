import React from 'react'
import {ContactContainer} from "./Contact.style.js"

function Contact() {
    return (
      <ContactContainer id="contact">
        <div className="contact__Container">
          <h3>04. What's the next step?</h3>
          <h1>Get In Touch</h1>
          <p>
            Although I’m not currently looking for any new opportunities, my
            inbox is always open. Whether you have a question or just want to
            say hi, I’ll try my best to get back to you!
          </p>
          <a className="email-link" href={`mailto:${email}`}>
            Say Hello
          </a>
          {/* <button>Say Hello</button> */}
        </div>
        <p>Build by Badr Khouzima Inspired by Brittany Chiang design</p>
      </ContactContainer>
    );
}

export default Contact
