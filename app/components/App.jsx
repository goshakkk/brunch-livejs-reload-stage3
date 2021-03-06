import React from 'react';
import Counter from './Counter';
import StatefulCounter from './StatefulCounter';

export default class App extends React.Component {
  render() {
    return (
      <div id="content">
        <h1>&nbsp;</h1>
        <Counter />
        <StatefulCounter />
        <h2>Welcome!</h2>
        <ul>
          <li><a href="http://brunch.readthedocs.org/">Documentation</a></li>
          <li><a href="https://github.com/brunch/brunch/issues">Github Issues</a></li>
          <li><a href="https://github.com/brunch/twitter">Twitter Example App</a></li>
          <li><a href="https://github.com/brunch/todos">Todos Example App</a></li>
        </ul>
      </div>
    );
  }
}
