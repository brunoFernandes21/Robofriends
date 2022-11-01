import React, { Component } from "react";
import CardList from "../components/CardList";
import SearchBox from "../components/SearchBox";
import "./App.css";
import ErrorBoundary from "../components/ErrorBoundary";
// import Scroll from '../components/Scroll'
// import { render } from '@testing-library/react';

class App extends Component {
  constructor() {
    super();
    this.state = {
      robots: [],
      searchField: "",
    };
  }

  async componentDidMount() {
    // IMPORTANT: USING .THEN
    // fetch('https://jsonplaceholder.typicode.com/users')
    //     .then(response => response.json())
    //     .then(users => this.setState({robots: users}))

    // USING ASYNC AWAIT
    const fetchUsers = await fetch(
      "https://jsonplaceholder.typicode.com/users"
    );
    const users = await fetchUsers.json();
    this.setState({ robots: users });
  }

  onInputChange = (event) => {
    this.setState({ searchField: event.target.value });
  };

  render() {
    const { robots, searchField } = this.state;
    const filteredRobots = robots.filter((robot) => {
      return robot.name.toLowerCase().includes(searchField.toLowerCase());
    });
    return !robots.length ? (
      <h1>Loading</h1>
    ) : (
      <div className="tc">
        <h1 className="f2">RoboFriends</h1>
        <SearchBox inputChange={this.onInputChange} />
        {/* <Scroll> */}
        <ErrorBoundary>
          <CardList robots={filteredRobots} />
        </ErrorBoundary>

        {/* </Scroll> */}
      </div>
    );
  }
}

export default App;
