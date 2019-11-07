import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import './App.css';
import ExcersiseList from './components/ExcersizeList.jsx'

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Router>
          <Switch>
            <Route exact path="/" component={ExcersiseList}/>
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;