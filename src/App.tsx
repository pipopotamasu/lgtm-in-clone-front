import React from 'react';
import styled from 'styled-components';
import { width } from './constants/cssVariables';
import GlobalHeader from './components/organisms/GlobalHeader';
import Home from './pages/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './reducers/store';

const Container = styled.div`
  width: ${width.base};
  margin: 0 auto;
  padding: 1rem;
`;

const App: React.FC = () => {
  return (
    <div className="App">
      <Provider store={store} >
        <Router>
          <GlobalHeader />
          <Container>
            <Switch>
              <Route exact path="/">
                <Home />
              </Route>
              <Route path="/random">random</Route>
              <Route path="/submit">Submit</Route>
              <Route path="/browse">Browse</Route>
            </Switch>
          </Container>
        </Router>
      </Provider>
    </div>
  );
};

export default App;
