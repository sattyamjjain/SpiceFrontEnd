import React from 'react';
import Router from './app/router/Router';
import { alertActions } from './app/_actions';
import { connect } from 'react-redux';

function App() {
  return (
    <div>
      <Router />
    </div>
  );
}

function mapState(state) {
  const { alert } = state;
  return { alert };
}

const actionCreators = {
  clearAlerts: alertActions.clear
};

const connectedApp = connect(mapState, actionCreators)(App);
export { connectedApp as App };
