import React from 'react';
import injectTapEventPlugin from 'react-tap-event-plugin';
import App from './App';

//Needed for onTouchTap
//Can go away when react 1.0 release
//Check this repo:
//https://github.com/zilverline/react-tap-event-plugin
injectTapEventPlugin();

React.render(
  <App />,
  document.body
);
