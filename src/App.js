import React from 'react';

// MUI
import { Container } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

// State
import { Provider } from 'react-redux';
import UserProvider from './context/userContext';
import store from './redux/store';

// Screens
import Home from './screens/Home';

const useStyles = makeStyles({
  root: {
    paddingTop: 40
  }
});

function App() {
  const classes = useStyles();
  return (
    <Provider store={store}>
      <UserProvider>
        <Container className={classes.root}>
          <Home></Home>
        </Container>
      </UserProvider>
    </Provider>
  );
}

export default App;
