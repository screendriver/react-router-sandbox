import * as React from 'react';
import { render } from 'react-dom';
import { Router, Route, Link, hashHistory } from 'react-router';

function App() {
  return (
    <div>App</div>
  );
}

function About() {
  return (
    <div>About</div>
  );
}

function NoMatch() {
  return <div>40004</div>;
}

render((
  <Router>
    <Route path="/" component={App}>
      <Route path="about" component={About}>
      </Route>
      <Route path="*" component={NoMatch}/>
    </Route>
  </Router>
), document.getElementsByTagName('body')[0]);