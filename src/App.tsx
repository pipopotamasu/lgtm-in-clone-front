import React from 'react';
import styled from 'styled-components';
import { width } from './constants/cssVariables';
import GlobalHeader from './components/organisms/GlobalHeader';
import GlobalMessages from './components/organisms/GlobalMessages';
import Home from './pages/Home';
import Detail from './pages/Detail';
import Random from './pages/Random';
import Browse from './pages/Browse';
import Submit from './pages/Submit';
import Bookmarks from './pages/Bookmarks';
import Signup from './pages/Signup';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './reducers/store';
import { ToastContainer } from 'react-toastify';

const Container = styled.div`
  width: ${width.base};
  margin: 0 auto;
  padding: 1rem;
`;

const App: React.FC = () => {
  return (
    <div className="App">
      <Provider store={store}>
        <Router>
          <GlobalMessages />
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
            </Switch>
          </Container>
        </Router>
      </Provider>
    </div>
  );
};

export default App;
