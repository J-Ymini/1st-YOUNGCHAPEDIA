import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Main from './pages/Main/Main';
import LoginSignInForm from './pages/CommonComponents/LoginSignInForm';
// import login
// import mypage
import Navbar from './pages/CommonComponents/Navbar';

class Routes extends React.Component {
  render() {
    return (
      <Router>
        {/* <Navbar /> */}
        <Switch>
          <Route exact path="/" component={LoginSignInForm}></Route>
          {/* <Route exact path="/contents" component={}></Route> */}
          {/* <Route exact path="/myPage" component={}></Route> */}
        </Switch>
        {/* <Footer /> */}
      </Router>
    );
  }
}

export default Routes;
