import React from 'react';
import styles from '../stylesheets/Navbar.css';

class Navbar extends React.Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-sm">
            <h5 onClick={this.props.handleClickProjects}>Projects</h5>
          </div>
          <div className="col-sm">
            <h5 onClick={this.props.handleClickResume}>Résumé</h5>
          </div>
          <div className="col-sm">
            <h5 onClick={this.props.handleClickContact}>Contact</h5>
          </div>
          <div className="col-sm">
              <a href="https://github.com/LesleyPark" target="_blank">
                <img className={styles.resize} src="https://s3-us-west-1.amazonaws.com/lppersonalwebsite/gh.png" />&nbsp;
              </a>
              <a href="https://www.linkedin.com/in/lesleypark/" target="_blank">
                <img className={styles.resize} src="https://s3-us-west-1.amazonaws.com/lppersonalwebsite/li.png" />
              </a>
          </div>
        </div>
      </div>
    );
  }
}

export default Navbar;