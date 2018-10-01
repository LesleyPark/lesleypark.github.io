import React from 'react';
import ReactDOM from 'react-dom';
import Navbar from './components/Navbar.jsx';
import Resume from './components/Resume.jsx';

class App extends React.Component {
  constructor() {
    super();
    this.state = {};
  }

  render () {
    return (
      <div>
        <div className="title"><h1>L E S L E Y&nbsp;&nbsp;&nbsp;P A R K</h1>
          <div className="italics">
            <h5>Software Engineer</h5>
          </div>
          <hr />
          <Navbar />
          <Resume />
        </div>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));