import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import './App.css';
import Home from './components/Home'
import Description from './components/Descriptions'
import SubmitNewWorkout from './components/SubmitNewWorkout'

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Router>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/description" component={Description} />
            <Route exact path="/SubmitNewWorkout" component={SubmitNewWorkout} />
          </Switch>
        </Router>
      </div>
    );
  }
}
export default App;