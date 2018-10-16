import React from 'react';
import { Route, Switch, Link } from 'react-router-dom';
import Landing from './Landing/Landing';
import Home from './Home/Home';
import Edit from './Edit/Edit';

class App extends React.Component {
  state = {};

  render() {
    return (
      <>
        <nav>
          <ul>
            <li><Link to='/'>Landing</Link></li>
            <li><Link to='/home'>Home</Link></li>
            <li><Link to='/edit'>Edit</Link></li>
          </ul>
        </nav>
        <Switch>
          <Route exact path="/" component={Landing} />
          <Route path="/home" component={Home} />
          <Route path="/edit/:id" component={Edit} />
        </Switch>
      </>
    );
  }
}

export default App;
