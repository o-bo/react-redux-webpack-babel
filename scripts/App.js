import React, {Component} from 'react';
import RaisedButton from 'material-ui/lib/raised-button';

export default class App extends Component {
  render() {
    return (
      <div>
        <h1>Hello, World!</h1>

        <RaisedButton label="Primary" primary={true} />
      </div>
    );
  }
}

