import React from 'react';
import styles from '../stylesheets/Contact.css';

class Contact extends React.Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <div className={styles.contact}>
        <form className="animated fadeIn">
          <label>Your name</label>
          <input type="name" className="form-control form-control-sm"/>
          <br />
          <label>Your email</label>
          <input type="email" className="form-control form-control-sm"/>
          <br />
          <label>Message</label>
          <textarea className="form-control form-control-sm" rows="6"/>
          <div className="text-center mt-4">
            <button className="btn btn-secondary" type="submit">SUBMIT</button>
          </div>
        </form>
      </div>
    )
  }
}

export default Contact;