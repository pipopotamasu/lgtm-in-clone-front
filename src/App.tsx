import React from 'react';
import styled from 'styled-components';
import { width } from 'src/constants/cssVariables';
import GlobalHeader from 'src/components/organisms/GlobalHeader';
import Home from 'src/pages/Home';
import Detail from 'src/pages/Detail';
import Random from 'src/pages/Random';
import Browse from 'src/pages/Browse';
import Submit from 'src/pages/Submit';
import Bookmarks from 'src/pages/Bookmarks';
import Signup from 'src/pages/Signup';
import Login from 'src/pages/Login';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from 'src/reducers/store';
import { ToastContainer } from 'react-toastify';
import { context, RootContext } from 'src/contexts/root';

const Container = styled.div`
  width: ${width.base};
  margin: 0 auto;
  padding: 1rem;
`;

const App: React.FC = () => {
  return (
    <div className="App">
      <Provider store={store}>
        <RootContext.Provider value={context}>
          <Router>
            <ToastContainer />
            <GlobalHeader />
            <Container>
              <Switch>
                <Route exact path="/">
                  <Home />
                </Route>
                <Route path="/random">
                  <Random />
                </Route>
                <Route path="/submit">
                  <Submit />
                </Route>
                <Route path="/browse">
                  <Browse />
                </Route>
                <Route path="/posts/:id">
                  <Detail />
                </Route>
                <Route path="/bookmarks">
                  <Bookmarks />
                </Route>
                <Route path="/signup">
                  <Signup />
                </Route>
                <Route path="/login">
                  <Login />
                </Route>
              </Switch>
            </Container>
          </Router>
        </RootContext.Provider>
      </Provider>
    </div>
  );
};

export default App;
