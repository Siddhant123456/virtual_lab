import React from "react";
import { Container } from "@material-ui/core";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { Auth } from "./components/Auth/Auth";
import { Navbar } from "./components/Navbar/Navbar";
import {About } from './components/About/About';
import {Dashboard} from './components/Dashboard/Dashboard';
import Home from "./components/Home/Home";
import Footer from './components/Footer/Footer';
import {Contact} from './components/Contact/Contact';
const App = () => {
  return (
    <BrowserRouter>
      
        <Navbar></Navbar>
        <Switch>
          <Route path="/" exact component={Home}></Route>
          <Route path="/auth" exact component={Auth}></Route>
          <Route path="/about" exact component={About}></Route>
          <Route path = "/dashboard" exact component = {Dashboard}></Route>
          <Route path = "/contact" exact component = {Contact}></Route>
          
        </Switch>
        
          <Footer></Footer>

    </BrowserRouter>
  );
};
export default App;
