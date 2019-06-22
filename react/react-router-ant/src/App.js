import React from 'react';
import logo from './logo.svg';
import { BrowserRouter as Router,Route,Link } from 'react-router-dom';
import Layout from './page/Layout';
// import './App.css';
import 'antd/dist/antd.css'

function Table() {
  return (
    <div>table</div>
  )
}
function Label() {
  return (
    <div>label</div>
  )
}
function App() {
  return (
    <Router>
      <Route path="/" component={ Layout }>
      </Route>
    </Router>
  );
}

export default App;
