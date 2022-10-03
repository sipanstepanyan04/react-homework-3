import { Component } from "react";

import "./Select.css";

export class Select extends Component {
  constructor(props) {
    super(props);

    this.state = {
      showOptions: false,
      searchString: "",
      selectValue: props.value,
      options: props.options || [],
    };
  }

  handleFocus = () => {
    this.setState({ ...this.state, showOptions: true });
  };

  handleBlur = () => {
    this.setState({ ...this.state, showOptions: false });
  };

  handleInputChange = (e) => {
    const value = e.target.value;
    const options = this.props.options.filter((option) => {
      return option.name.toLowerCase().includes(value.toLowerCase());
    });
    this.setState({
      ...this.state,
      options: options,
      searchString: value,
    });
  };

  handleClick = (option) => {
    this.setState({
      ...this.state,
      searchString: option.name,
      showOptions: false,
    });
    this.props.onClick?.(option);
  };

  render() {
    const { showOptions, options, searchString } = this.state;
    const { placeholder } = this.props;

    return (
      <div className="select" onFocus={this.handleFocus}>
        <input
          className="input"
          placeholder={placeholder}
          value={searchString}
          onChange={this.handleInputChange}
        />

        {showOptions && (
          <ul className="options">
            {options.map((option) => {
              return (
                <li
                  key={option.value}
                  onClick={() => this.handleClick(option)}
                  className="option"
                >
                  {option.name}
                </li>
              );
            })}
            {options.length === 0 && <li>No result</li>}
          </ul>
        )}
      </div>
    );
  }
}
