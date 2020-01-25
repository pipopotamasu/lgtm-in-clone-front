import React from 'react';
import GlobalHeader from './components/organisms/GlobalHeader';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

const App: React.FC = () => {
  return (
    <div className="App">
      <Router>
        <GlobalHeader />
        <div>
          <Switch>
            <Route exact path="/">
              Home
            </Route>
            <Route path="/random">About</Route>
            <Route path="/submit">Submit</Route>
            <Route path="/browse">Browse</Route>
          </Switch>
        </div>
      </Router>
    </div>
  );
};

export default App;
