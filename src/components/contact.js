/* eslint-disable class-methods-use-this */
import React, { Component } from 'react';

class Contact extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  toggleClicked() {
    document.getElementById('no-contact-clicked').classList.toggle('hidden');
    document.getElementById('email-form').classList.toggle('hidden');
  }

  render() {
    return (
      <div id="contact-page" className="default-bg">
        <div id="no-contact-clicked">
          <h1>Contact Me</h1>
          <div id="contact-icons">
            <button type="button" className="button-var-2" aria-label="email" onClick={this.toggleClicked}><i className="fas fa-envelope" /></button>
            <a className="contact-icon" href="https://github.com/qspraut" aria-label="github"><i className="fab fa-github" /></a>
            <a className="contact-icon" href="https://www.linkedin.com/in/quinn-spraut-26023a180/" aria-label="linkedin"><i className="fab fa-linkedin-in" /></a>
          </div>
        </div>
        <div id="email-form" className="hidden">
          <h2>quinn.a.spraut.22@dartmouth.edu</h2>
          <form action="mailto:quinn.a.spraut.22@dartmouth.edu" method="post" encType="text/plain" id="email-form">
            <div className="form-text">Your Name:</div>
            <div><input type="text" name="name" className="form-textbox" /></div>
            <div className="form-text">Your E-mail:</div>
            <div><input type="text" name="mail" className="form-textbox" /></div>
            <div className="form-text">Message:</div>
            <div><input type="text" name="comment" size="50" className="form-textbox" /></div>
            <div id="form-buttons">
              <div><input type="submit" value="Send" className="button-var-1" /></div>
              <div><button type="button" className="button-var-1" onClick={this.toggleClicked}>Cancel</button></div>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default Contact;
