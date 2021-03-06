import React from 'react';
import logo from './logo.svg';
import LoginStatus from './LoginStatus';
import ExampleMobx from './exampleMobx/index';
import ExampleDeBounce from './exampleDeBounce/index';
import ShopCart from './ShopCart';
import WithLogin from './WithLogin';
import examplebase from './examplebase/index';
import './App.css';

// const WithLoginStatus = WithLogin(LoginStatus);
// const WithShopCart = WithLogin(ShopCart); 
function App() {
  return (
    <React.Fragment>
      <LoginStatus />
      <ShopCart a="1" b="2"/>
      {/* <WithLoginStatus />
      <WithShopCart a="1" b="2"/> */}
      <ExampleMobx></ExampleMobx>
      <ExampleDeBounce></ExampleDeBounce>
    </React.Fragment>
  );
}

export default App;
