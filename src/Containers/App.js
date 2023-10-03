import React, { Component } from "react";
import Cardlist from "../Components/Cardlist";
import ErrorBoundary from "../Components/ErrorBoundary";
import SearchBox from "../Components/SearchBox";
import Scroll from "../Components/scroll";
import "./app.css";
class App extends Component {
  constructor() {
    super();
    this.state = {
      robots: [],
      searchfield: ""
    };
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(response => response.json())
      .then(users => {this.setState({ robots: users })});
  }

  onSearchChange = (event) => {
    this.setState({ searchfield: event.target.value })
  };

  render() {
    let { robots, searchfield } = this.state;
    let filteredRobots = robots.filter((robot) => {
      return robot.name.toLowerCase().includes(searchfield.toLowerCase());
    });

    return !robots.length ?
      <h1> Now Loading....</h1> :
      (
      <div className="tc">
        <h1 className="f1"> Robo Friends</h1>
        <SearchBox searchChange={this.onSearchChange} />
        <Scroll>
        <ErrorBoundary>
          <Cardlist robots={filteredRobots} />
          </ErrorBoundary>
        </Scroll>
      </div>
    );
  }
}

export default App;
