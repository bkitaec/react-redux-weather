import React from 'react';
import { Route, Link } from 'react-router-dom'
import Home from '../home'
import About from '../about'

const App = () => (
  <div>
    <nav className="navbar navbar-default">
      <div className="container-fluid">
        <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
          <ul className="nav navbar-nav">
            <li className="active"><Link to="/">Home</Link></li>
          </ul>
          <ul className="nav navbar-nav navbar-right">
            <li><Link to="/about-us">About</Link></li>
          </ul>
        </div>
      </div>
    </nav>
    <div className="container">
      <div className="row">
        <div className="col-md-12">
          <Route exact path="/" component={Home} />
          <Route exact path="/about-us" component={About} />
        </div>
      </div>
    </div>
  </div>
)

export default App
