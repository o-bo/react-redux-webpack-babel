import React, {Component, PropTypes} from 'react';

export default class Header extends Component {

  // brings the propTypes inside the class definition
  // Note that propTypes belongs to the class, and thus it is static
  // non-static properties (instance properties) is shown in the next section
  static propTypes = {
    title: PropTypes.string.isRequired
  }

  state = {
    title: this.props.title
  }

  constructor(props) {    /* Note props is passed into the constructor in order to be used */
    super(props);
  }

  handleClick = (event) => {
    alert("CLICKED !");
  }

  render() {
    return (
      <header>
        <h1 onClick={this.handleClick}>{this.state.title}</h1>
      </header>
    );
  }
}
