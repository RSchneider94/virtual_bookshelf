import React from 'react';
import { Provider } from 'react-redux';
import { Container } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import UserProvider from './context/userContext';
import store from './redux/store';

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
        <Container className={classes.root}>Hello</Container>
      </UserProvider>
    </Provider>
  );
}

export default App;
