import React, {Component} from "react";
import { Route, BrowserRouter } from "react-router-dom";
import Home from "./components/Home/Home";
import Dashboard from "./components/Dashboard/Dashboard";
import Footer from "./components/Footer/Footer";

export default class App extends Component {
  render() {
    return (
      <main className="App">
        <BrowserRouter>
          <Route exact path="/" component={Home} />
          <Route path="/dashboard" component={Dashboard} />
          <Footer />
        </BrowserRouter>
      </main>
    );
  }
}