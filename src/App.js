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
    fetch(`${config.API_ENDPOINT}/cat`)
      .then(res => {
        if (!res.ok) {
        }
        return res.json();
      })
      .then(cats => {
        const displayCat = cats[0];
        this.setState({ cats, displayCat })
      })
  }

  getDogs = () => {
    fetch(`${config.API_ENDPOINT}/dog`)
      .then(res => {
        if (!res.ok) {
        }
        return res.json();
      })
      .then(dogs => {
        const displayDog = dogs[0];
        this.setState({ dogs, displayDog });
      });
  }

  componentDidMount() {
    this.getCats()
    this.getDogs()
  }

  render() {
    const { cats, dogs, displayCat } = this.state;
    return (
      <main className="App">
        <Route exact path={ "/" } component={Home} />
        <Route
          path={ "/dashboard" }
          render={ () => <Dashboard displayCat={ displayCat } cats={ cats } dogs={ dogs } /> } />
        <Footer />
      </main>
    );
  }
}