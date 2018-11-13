import React from 'react';
import ScrollAnimation from 'react-animate-on-scroll';

class Projects extends React.Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <div>
        <ScrollAnimation animateIn='fadeIn' animateOnce='true'>
          Airbnb Listing Replication
          <img src="https://s3-us-west-1.amazonaws.com/lppersonalwebsite/airbnb.jpg"></img>
        </ScrollAnimation>
      </div>
    )
  }
}

export default Projects;