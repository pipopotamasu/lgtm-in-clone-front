import React, { lazy, Suspense } from 'react';
import styled from 'styled-components';
import { width } from 'src/constants/cssVariables';
import GlobalHeader from 'src/components/organisms/GlobalHeader';
import Auth from 'src/components/organisms/Auth';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from 'src/reducers/store';
import { ToastContainer } from 'react-toastify';
import { context, RootContext } from 'src/contexts/root';

const Home = lazy(() => import('src/pages/Home'));
const Detail = lazy(() => import('src/pages/Detail'));
const Random = lazy(() => import('src/pages/Random'));
const Browse = lazy(() => import('src/pages/Browse'));
const Submit = lazy(() => import('src/pages/Submit'));
const Bookmarks = lazy(() => import('src/pages/Bookmarks'));
const Signup = lazy(() => import('src/pages/Signup'));
const Login = lazy(() => import('src/pages/Login'));

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
            <Auth>
              <Suspense fallback={<></>}>
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
              </Suspense>
            </Auth>
          </Router>
        </RootContext.Provider>
      </Provider>
    </div>
  );
};

export default App;
