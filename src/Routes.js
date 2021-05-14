import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Main from './pages/Main/Main';
import Footer from './pages/CommonComponents/Footer';
// import login
// import mypage
import Navbar from './pages/CommonComponents/Navbar';
import MyPage from './pages/MyPage/MyPage';

class Routes extends React.Component {
  render() {
    return (
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/" component={Main}></Route>
          {/* <Route exact path="/contents" component={}></Route> */}
          <Route exact path="/mypage" component={MyPage}></Route>
        </Switch>
        <Footer />
      </Router>
    );
  }
}

export default Routes;
