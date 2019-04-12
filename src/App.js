import React, {Component} from "react";
import { Route } from "react-router-dom";
import config from "./config";
import Home from "./components/Home/Home";
import Dashboard from "./components/Dashboard/Dashboard";
import Footer from "./components/Footer/Footer";

export default class App extends Component {
  state = {
    cats: [],
    displayCat: {},
    dogs: [],
    displayDog: {},
    users: []
  }

  getCats = () => {
    return fetch(`${config.API_ENDPOINT}/cat`)
      .then(res => {
        if (!res.ok) {
        }
        return res.json();
      });
  }

  getDogs = () => {
    return fetch(`${config.API_ENDPOINT}/dog`)
      .then(res => {
        if (!res.ok) {
        }
        return res.json();
      });
  }

  async componentDidMount() {
    const cats = await this.getCats();
    const dogs = await this.getDogs();
    const displayCat = await cats[0];
    const displayDog = await dogs[0];
    this.setState({ cats, displayCat, dogs, displayDog });
  }

  render() {
    const {cats, dogs, displayCat} = this.state;
    return (
      <main className="App">
        <Route exact path={ "/" } component={Home} />
        <Route
          path={"/dashboard"}
          render={ () => <Dashboard displayCat={ displayCat } cats={ cats } dogs={ dogs } /> } />
        <Footer />
      </main>
    );
  }
}