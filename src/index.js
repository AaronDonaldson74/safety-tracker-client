import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
  constructor(){
    super();
  
  }

  render() {
    return(
      <div className="app">
        <div className="home-page-container">
          <div className="logo-container">
            <div className="logo-text-wrapper">
              Hello from logo text wrapper
            </div>
            <div className="logo-image-wrapper">
              <p>logo icon goes here</p>
              <p>logo image goes here</p>
            </div>
          </div>
          <div className="userinfo-container">
            <div className="date-wrapper">
              date component renders here
            </div>
            <div className="login-msg-wrapper">
              login msg component renders here
            </div>
            <div className="login-btn-wrapper">
              <button className="btn">Login</button>
              <button className="btn">Report an Incident</button>
            </div>
          </div>
          <div className="emerg-msg-container">
            <div className="emerg-icon">Icon goes here</div>
            <div className="emerg-msg-wrapper">
                <p>If this is an emergency, please dial <button className="btn">911</button></p>
            </div>
            <div className="emerg-icon">Icon goes here</div>
          </div>
        </div>
  
      </div>
    )
  }
}



ReactDOM.render( <App />, document.getElementById('root'));