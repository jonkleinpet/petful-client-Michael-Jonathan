import React, {Component} from "react";
import { Route } from "react-router-dom";
import config from "./config";
import Home from "./components/Home/Home";
import Dashboard from "./components/Dashboard/Dashboard";
import Footer from "./components/Footer/Footer";
import { setInterval } from "timers";

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

  dequeueUser = (timer) => {
    fetch(`${config.API_ENDPOINT}/users`, {
      method: 'DELETE',
      header: {
        'Content-type': 'Application/json'
      }
    })
      .then(res => {
        if (!res.ok) {
          clearInterval(timer)
        }
        return res.json();
      })
      .then(user => {
        const newUsers = this.state.users.filter(u => user.name !== u.name);
        this.setState({ users: newUsers });
      })
  }

  dequeueCat = (timer) => {
    fetch(`${config.API_ENDPOINT}/cat`, {
      method: 'DELETE',
      header: {
        'Content-type': 'Application/json'
      }
    })
      .then(res => {
        if (!res.ok) {
          clearInterval(timer)
        }
        return res.json();
      })
      .then(cat => {
        const newCats = this.state.cats.filter(c => cat.name !== c.name);
        this.setState({ cats: newCats });
      })
  }

  dequeueDog = (timer) => {
    fetch(`${config.API_ENDPOINT}/dog`, {
      method: 'DELETE',
      header: {
        'Content-type': 'Application/json'
      }
    })
      .then(res => {
        if (!res.ok) {
          clearInterval(timer)
        }
        return res.json();
      })
      .then(dog => {
        const newDogs = this.state.users.filter(d => dog.name !== d.name);
        this.setState({ dogs: newDogs });
      })
  }

  handleStart = (e) => {
    const type = e.target.getAttribute('type');
    const timer = setInterval(() => {
      this.dequeueUser(timer)
      if (type === 'dog') {
        this.dequeueDog(timer)
      } else {
        this.dequeueCat(timer)
      }
    }, 5000)
  }

  async componentDidMount() {
    const cats = await this.getCats();
    const dogs = await this.getDogs();
    const users = await this.getusers();
    const displayCat = cats[0];
    const displayDog = dogs[0];
    this.setState({ users, cats, displayCat, dogs, displayDog });
  }

  componentWillUnmount() {
    clearInterval();
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
              handleStart={this.handleStart}
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