import React from 'react';
import styles from '../stylesheets/Navbar.css';

class Navbar extends React.Component {
  constructor() {
    super();
    this.state = {};
  }

  render () {
    return (
      <div className="container">
        <div className="row">
          <div class="col-sm">
            <h5>Projects</h5>
          </div>
          <div class="col-sm">
            <h5>Résumé</h5>
          </div>
          <div class="col-sm">
              <h5>Connect</h5>
              <a href="https://github.com/LesleyPark" target="_blank">
                <img className={styles.resize} src="https://s3-us-west-1.amazonaws.com/lppersonalwebsite/gh.png" />&nbsp;
              </a>
              <a href="https://www.linkedin.com/in/lesleypark/" target="_blank">
                <img className={styles.resize} src="https://s3-us-west-1.amazonaws.com/lppersonalwebsite/li.png" />
              </a>
          </div>
          <div class="col-sm">
            <h5>Contact</h5>
          </div>
        </div>
      </div>
    );
  }
}

export default Navbar;