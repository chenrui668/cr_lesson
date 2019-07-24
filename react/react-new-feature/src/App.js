import React from 'react';
import logo from './logo.svg';
import './App.css';
// import ConcurrentModeDemo from './ConcurrentMode/index';
// import StateHook from './hook/stateHook';
import PrepareForEffectHook from './hook/prepareForEffectHook.jsx';
function App() {
  return (
    <div>
      {/* <ConcurrentModeDemo/> */}
      {/* <StateHook /> */}
      <PrepareForEffectHook />
    </div>
  );
}

export default App;
