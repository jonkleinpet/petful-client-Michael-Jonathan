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

  getusers = () => {
    return fetch(`${config.API_ENDPOINT}/users`)
      .then(res => {
      if (!res.ok) {
      }
      return res.json();
    });
  }

  handleStart = () => {
    return fetch(`${config.API_ENDPOINT}/users`, {
      method: 'POST',
      header: {
        'Content-type': 'Application/json'
      }
    })
    .then(res => {
      if (!res.ok) {
      }
      return res.json();
    })
      .then(user => {
        this.setState({ users: [...this.state.users, user] });
    })
  }

  async componentDidMount() {
    const cats = await this.getCats();
    const dogs = await this.getDogs();
    const users = await this.getusers();
    const displayCat = cats[0];
    const displayDog = dogs[0];
    this.setState({ users, cats, displayCat, dogs, displayDog });
  }

  render() {
    const {
      cats,
      dogs,
      displayCat,
      displayDog,
      users
    } = this.state;

    return (
      <main className="App">
        <Route exact path={ "/" } render={() => <Home handleStart={this.handleStart} /> } />
        <Route
          path={ "/dashboard" }
          render={ () => {
            return <Dashboard
              users={ users }
              displayDog={ displayDog }
              displayCat={ displayCat }
              cats={ cats }
              dogs={ dogs } />
          } } />
        <Footer />
      </main>
    );
  }
}