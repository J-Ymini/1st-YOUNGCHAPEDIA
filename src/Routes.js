import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

export default class Routes extends React.Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={MovieDetail}></Route>
          {/* <Route exact path="/contents" component={}></Route> */}
          {/* <Route exact path="/myPage" component={}></Route> */}
        </Switch>
      </Router>
    );
  }
}
