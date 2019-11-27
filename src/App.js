import React from 'react';
import './App.css';
import ListEditor from "./pages/ListEditor";
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import SavedList from "./pages/SavedList";

function App() {

  return (
      <Router>
          <div className="App">
              <Switch>
                  <Route path='/' exact component={ListEditor}/>
                  <Route path='/saved' exact component={SavedList}/>
              </Switch>
          </div>
      </Router>
  );
}

export default App;
