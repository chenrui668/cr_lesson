import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, Redirect } from 'react-router-dom';
import Tabbar from './common/tabbar/Tabbar';
import './App.css';
import Main from './components/Main';
import Menu from './components/Menu';
import Taste from './components/Taste';
import ShopCart from './components/ShopCart';
import User from './components/User';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {  }
  }
  render() { 
    return (  
      <Router>
        <div>
          <Route exact path="/" component={Main}></Route>
          <Route path="/menu" component={Menu}></Route>
          <Route path="/taste" component={Taste}></Route>
          <Route path="/shopCart" component={ShopCart}></Route>
          <Route path="/user" component={User}></Route>
          <Tabbar/>
        </div>
      </Router>
    );
  }
}
 
export default App;