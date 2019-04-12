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
    users: [],
    error: false
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

  dequeueUser = () => {
    fetch(`${config.API_ENDPOINT}/users`, {
      method: 'DELETE',
      header: {
        'Content-type': 'Application/json'
      }
    })
      .then(res => {
        if (!res.ok) {
          this.setState({ error: true });
        }
        return res.json();
      })
      .then(user => {
        const newUsers = this.state.users.filter(u => user.name !== u.name);
        this.setState({ users: newUsers });
      })
  }

  dequeueCat = () => {
    fetch(`${config.API_ENDPOINT}/cat`, {
      method: 'DELETE',
      header: {
        'Content-type': 'Application/json'
      }
    })
      .then(res => {
        if (!res.ok) {
          this.setState({ error: true })
          if (this.state.error) {
          }
        }
        return res.json();
      })
      .then(cat => {
        const newCats = this.state.cats.filter(c => cat.name !== c.name);
        this.setState({ cats: newCats, displayCat: newCats[0] });
      })
  }

  dequeueDog = () => {
    fetch(`${config.API_ENDPOINT}/dog`, {
      method: 'DELETE',
      header: {
        'Content-type': 'Application/json'
      }
    })
      .then(res => {
        if (!res.ok) {
          this.setState({ error: true })
        }
        return res.json();
      })
      .then(dog => {
        const newDogs = this.state.dogs.filter(d => dog.name !== d.name);
        this.setState({ dogs: newDogs, displayDog: newDogs[0] });
      })
  }

  checkTimer = (type) => {
    this.dequeueUser()
    const { dogs, cats } = this.state;
    if (type === 'dog') {
      this.dequeueDog()
    } else if (type === 'cat') {
      this.dequeueCat()
    } 
    else
    if (dogs.length > cats.length) {
      this.dequeueDog();
      }
    else {
      this.dequeueCat();
      }
    if (this.state.users !== []) {
      if (this.state.error || this.state.users[1].name === 'Thinkful') {
        clearInterval(this.timer);
      }
    }
  }

 
  handleStart = (e) => {
    const type = e.target.getAttribute('type');
    this.checkTimer(type)
  }

  async componentDidMount() {
    const cats = await this.getCats();
    const dogs = await this.getDogs();
    const users = await this.getusers();
    const displayCat = cats[0];
    const displayDog = dogs[0];
    this.setState({ users, cats, displayCat, dogs, displayDog });
    this.timer = setInterval(this.checkTimer, 2000);
  }
    

  render() {
    const {
      cats,
      dogs,
      displayCat,
      displayDog,
      users,
      error
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
              error={error}
              cats={ cats }
              dogs={ dogs } />
          } } />
        <Footer />
      </main>
    );
  }
}