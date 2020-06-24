import React from 'react';
import ReactDOM from 'react-dom';

import { library } from "@fortawesome/fontawesome-svg-core";
import { faBolt } from "@fortawesome/free-solid-svg-icons";

import Home from './components/pages/home';
import "../src/styles/main.scss";

library.add(faBolt);

class App extends React.Component {
 
  render() {
    return(
      <div className="container">
        <Home />
      </div>
    )
  }
}

ReactDOM.render( <App />, document.getElementById('root'));