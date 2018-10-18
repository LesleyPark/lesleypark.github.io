import React from 'react';
import ScrollAnimation from 'react-animate-on-scroll';
import styles from '../stylesheets/Resume.css';

class Resume extends React.Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <div className={styles.resume}>
        <ScrollAnimation animateIn='fadeIn' animateOnce='true'>
        <span className={styles.headers}><h6>TECHNICAL SKILLS</h6></span>
        Front End | Javascript (ES5/ES6), React, AngularJS, HTML5, CSS3
        <br />Back End | Node.js, Express, PostgreSQL, MySQL, Sequelize, MongoDB, Mongoose, Ruby, Rails, C
        <br />Developer Tools | Git, npm, Yarn, webpack, Babel, Agile
        <br /><br />
        </ScrollAnimation>
        <ScrollAnimation animateIn='fadeIn' animateOnce='true'>
        <span className={styles.headers}><h6>EDUCATION</h6></span>
        Hack Reactor | Advanced Software Engineering Immersive (June 2018 - September 2018)
        <br />University of Southern California | B.S. Chemical Engineering (August 2005 - May 2009)
        <br /><br />
        </ScrollAnimation>
        <ScrollAnimation animateIn='fadeIn' animateOnce='true'>
        <span className={styles.headers}><h6>PROFESSIONAL EXPERIENCE</h6></span>
        Hacker in Residence | Hack Reactor (August 2018 - Present)
        <ul><li> Administer weekly code reviews with engineers to improve readability and reinforce coding best practices</li>
        <li>Provide technical support to strengthen understanding of Javascript fundamentals and debugging techniques</li>
        <li>Conduct technical interviews to screen prospective engineers for baseline Javascript competency requirements</li></ul>
        Associate Field Applications Engineer | Semtech Corporation (March 2010 - May 2018)
        <ul><li>Spearheaded automation of the New Product Idea program which resulted in the creation of over 55 new parts that have brought in over $20M in revenue cumulatively</li>
        <li>Owned curriculum creation and coordinated all logistics for biannual training of field applications engineers and distributors worldwide (~200 people)</li>
        <li>Initiated and maintained company presence on social media channels (Twitter, Facebook); currently at over 3.5k followers on Twitter</li></ul>
        Marketing Consultant | Framed [YCW14, Acquired by Square] (September 2014 - March 2016)
        <ul><li>Developed copy and content relating to core marketing strategies for B2B SaaS, analytics, data science, and customer success which accounted for ~30% total website traffic</li>
        <li>Utilized analytics tools (Google Analytics, Kissmetrics) to quantify customer behaviors and built marketing automation sequences resulting in an average 50% MoM revenue growth from July 2015 to March 2016</li></ul>
        </ScrollAnimation>
        <ScrollAnimation animateIn='fadeIn' animateOnce='true'>
        <span className={styles.headers}><h6>SOFTWARE ENGINEERING APPLICATIONS</h6></span>
        Yelp Listing Optimization and System Design | Javascript (ES5/ES6), Node.js, Express, PostgreSQL, MongoDB, Artillery, New Relic, NGINX, Docker, AWS EC2
        <br /><span className={styles.itals}>Agile team project optimizing the performance of an existing app</span>
        <ul><li>Utilized indexes to improve SQL (SP-GiST and B-Tree) and NoSQL (Single Field and Compound) database query speed; modifications resulted in performance increase of ~3 orders of magnitude (on average 4000x faster)</li>
        <li>Further enhanced app efficiency by implementing load balancers and stress testing; number of successful requests per second increased from 80 to 1000</li></ul>
        Airbnb Listing Replication | Javascript (ES5/ES6), React, HTML5, CSS3, PostgreSQL, AWS EC2
        <br /><span className={styles.itals}>Collaborative application that mirrors the design and functionality of Airbnb’s front end</span>
        <ul><li>Implemented dynamically resizing photo header and gallery modal using React and CSS modules</li>
        <li>Combined and deployed listing information and amenities modules from team members using proxy servers and AWS EC2</li></ul>
        8th Rank Pawns | Ruby, Rails, HTML 5, CSS3, Heroku
        <br /><span className={styles.itals}>Player vs Player Chess Application built with a team of 5 developers</span>
        <br />Created wireframes and designed application front end
        <ul><li>Built legal piece movement validation and game status logic (e.g. check or stalemate)</li>
        <li>Used RuboCop gem to enforce the team’s conformity to the Ruby style guide and CodeShip as a platform for continuous integration and deployment</li></ul>
        </ScrollAnimation>
      </div>
    )
  }
}

export default Resume;