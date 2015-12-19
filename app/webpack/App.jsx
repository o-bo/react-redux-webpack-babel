import React, {Component} from 'react';
import Button from 'react-toolbox/lib/button';

export default class App extends Component {

  handleLogout(event) {
    $("#close-session-link").trigger("click");
  }


  render() {
    return (
      <div>
        <h1>Hello, World!</h1>

        <Button label="Logout" raised accent onClick={this.handleLogout.bind(this)}/>
      </div>
    );
  }
}

