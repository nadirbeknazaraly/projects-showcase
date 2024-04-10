import { PersistGate } from 'redux-persist/integration/react';
import { BrowserRouter } from 'react-router-dom';
import { renderRoutes } from 'react-router-config';
import { Provider } from 'react-redux';
import React, { Suspense } from 'react';
import {
  ThemeProvider,
  CssBaseline,
  LinearProgress,
} from '@material-ui/core';
import { ApolloProvider } from '@apollo/react-hooks';

import './App.css';
import theme from './theme';
import routes from './routes';
import {
  store,
  persistor,
} from './redux';
import client from './client';

function App () {
  return (
    <BrowserRouter>
      <Provider
        loading={null}
        store={store}
      >
        <PersistGate persistor={persistor}>
          <ApolloProvider client={client}>
            <ThemeProvider theme={theme}>
              <CssBaseline />
              <Suspense fallback={<LinearProgress />}>
                { renderRoutes(routes) }
              </Suspense>
            </ThemeProvider>
          </ApolloProvider>
        </PersistGate>
      </Provider>
    </BrowserRouter>
  );
}

export default App;
