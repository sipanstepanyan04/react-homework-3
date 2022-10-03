import "./App.css";
import { Component } from "react";
import { getNames } from "country-list";
import { Select } from "./components/Select";

const options = getNames().map((item) => {
  return {
    name: item,
    value: item,
  };
});

class App extends Component {
  handleClick = (option) => {
    console.log(option);
  };

  render() {
    return (
      <div className="App">
        <Select
          onClick={this.handleClick}
          placeholder="Select country"
          options={options}
        />
      </div>
    );
  }
}

export default App;
