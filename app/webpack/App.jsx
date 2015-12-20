import React, {Component} from 'react';
import Button from 'react-toolbox/lib/button';

const LogoutButton = ({ label }) => (
  <Button
    label={label}
    raised
    accent
    onClick={ (e) => {
      $("#close-session-link").trigger("click");
    }}/>
);

export default class App extends Component {

  render() {
    return (
      <div>
        <h1>Hello, World!</h1>

        <LogoutButton label="Quit"/>
      </div>
    );
  }
};

