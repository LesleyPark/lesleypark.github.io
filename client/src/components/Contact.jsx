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
        <form>
          <label>Your name</label>
          <input type="name" className="form-control"/>
          <br />
          <label>Your email</label>
          <input type="email" className="form-control"/>
          <br />
          <label>Message</label>
          <textarea className="form-control" rows="5"/>
          <br/>
          <div className="text-center mt-4">
            <button className="btn btn-outline-secondary" type="submit">Submit</button>
          </div>
        </form>
      </div>
    )
  }
}

export default Contact;