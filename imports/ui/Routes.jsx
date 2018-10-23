import React from 'react';
import { Route, BrowserRouter } from 'react-router-dom';
import { render } from 'react-dom';
import App from './App.jsx';

Meteor.startup(() => {
  // Required for a correct routing
  render(
    <div>
      <BrowserRouter>
        <Route path="/" component={App} />
      </BrowserRouter>
    </div>,
    document.getElementById('render-target')
  );
});
