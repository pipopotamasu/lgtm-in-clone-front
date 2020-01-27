import React from 'react';
import styled from 'styled-components';
import { width } from './constants/cssVariables';
import GlobalHeader from './components/organisms/GlobalHeader';
import Home from './pages/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

const Container = styled.div`
  width: ${width.base};
  margin: 0 auto;
  padding: 1rem;
`

const App: React.FC = () => {
  return (
    <div className="App">
      <Router>
        <GlobalHeader />
        <Container>
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/random">About</Route>
            <Route path="/submit">Submit</Route>
            <Route path="/browse">Browse</Route>
          </Switch>
        </Container>
      </Router>
    </div>
  );
};

export default App;
