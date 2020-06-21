import React from 'react';
import ReactDOMServer from 'react-dom/server';
import { Provider } from 'react-redux';
import configureStore from '../../redux/configureStore';
import App from '../../client/App';

export default (initialState) => {
  const store = configureStore(initialState);
  const content = ReactDOMServer.renderToString(
    React.createElement(Provider, { store }, [React.createElement(App, { key: 0 })])
  );
  const preloadedState = store.getState();
  return { preloadedState, content };
};
