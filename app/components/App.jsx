import React, {Component} from 'react';

const LogoutButton = ({ label }) => (
  <a href=""
    onClick={ (e) => {
      $("#close-session-link").trigger("click");
    }}>{label}</a>
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

