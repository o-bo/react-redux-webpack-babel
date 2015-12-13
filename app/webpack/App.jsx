import React, {Component} from 'react';
import Button from 'react-toolbox/lib/button';

export default class App extends Component {
  render() {
    return (
      <div>
        <h1>Hello, World!</h1>

        <Button label="Hello" raised accent />
      </div>
    );
  }
}

