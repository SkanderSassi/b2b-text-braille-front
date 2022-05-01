import React from "react";
import { createBrowserHistory } from "history";
import {  BrowserRouter ,  Routes,  Route} from "react-router-dom";
import classes from "App.module.css"
import Button from "components/Button";
import Navbar from "components/Navbar";
import {Home, Contact, About} from "views"
// const browserHistory = createBrowserHistory();

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <div className={classes.container}>
      <Home/>
        
      </div>
    </BrowserRouter>
  );
}

export default App;
