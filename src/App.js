import logo from "./logo.svg";
import "./App.css";
import React, { Children } from "react";
import { Outlet } from "react-router";

function App({ children }) {
  return (
    <div className="App">
      <Outlet />
    </div>
  );
}

export default App;
