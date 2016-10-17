import React, { Component } from 'react';
import './Header.css';

class App extends Component {
  render() {
    return (
        <header className="header">
          <div className="logo">
            <span>
              PyGround
              <small>alpha</small>
            </span>
          </div>
          <nav className="navigator">
            <ul >
              <li>Run</li>
              <li>Share</li>
              <li>New</li>
            </ul>
            <div className="user-profile">
              <img src="https://avatars1.githubusercontent.com/u/10289071?v=3&s=466" alt="" />
            </div>
          </nav>
        </header>
    );
  }
}

export default App;
