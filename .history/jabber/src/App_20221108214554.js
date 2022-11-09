import React from "react";
import Sidebar from './Sidebar';
import './App.css';

function App() {
  return (
    // BEM convention
    <div className="app">
      <h1>Welcome to Jabber, a Twitter clone in Reactjs</h1>

      {/* Sidebar */}
      <Sidebar />

      {/* Feed */}

      {/* Widgets */}
    </div>
  );
}

export default App;
