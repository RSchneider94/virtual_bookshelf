import React from 'react';
import { Switch, Route } from 'react-router-dom';

// MUI
import { Container } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

// State
import { Provider } from 'react-redux';
import UserProvider from './context/userContext';
import store from './redux/store';

// UI Components
import Header from './components/UI/Header';

// Screens
import Home from './screens/Home';
import BookDetails from './screens/BookDetails';

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
        <Header></Header>
        <Container className={classes.root}>
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route exact path="/books/:bookId">
              <BookDetails></BookDetails>
            </Route>
          </Switch>
        </Container>
      </UserProvider>
    </Provider>
  );
}

export default App;
