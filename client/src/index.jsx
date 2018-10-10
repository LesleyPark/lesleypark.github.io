import React from 'react';
import ReactDOM from 'react-dom';
import Navbar from './components/Navbar.jsx';
import Projects from './components/Projects.jsx';
import Resume from './components/Resume.jsx';
import Contact from './components/Contact.jsx';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      showProjects: false,
      showResume: true,
      showContact: false
    };
    this.handleClickProjects = this.handleClickProjects.bind(this);
    this.handleClickResume = this.handleClickResume.bind(this);
    this.handleClickContact = this.handleClickContact.bind(this);
  }

  handleClickProjects() {
    this.setState({
      showProjects: true,
      showResume: false,
      showContact: false
    })
  }

  handleClickResume() {
    this.setState({
      showProjects: false,
      showResume: true,
      showContact: false
    })
  }

  handleClickContact() {
    this.setState({
      showProjects: false,
      showResume: false,
      showContact: true
    })
  }

  render() {
    return (
      <div>
        <div className="title"><h1>L E S L E Y&nbsp;&nbsp;&nbsp;P A R K</h1>
          <div className="italics">
            <h5>Software Engineer</h5>
          </div>
          <hr />
          <Navbar 
            handleClickProjects={this.handleClickProjects} 
            handleClickResume={this.handleClickResume} 
            handleClickContact={this.handleClickContact} 
          />
          <hr />
          {this.state.showProjects ? <Projects /> : null}
          {this.state.showResume ? <Resume /> : null}
          {this.state.showContact ? <Contact /> : null}
        </div>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));