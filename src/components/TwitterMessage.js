import React from "react";

class TwitterMessage extends React.Component {
  constructor() {
    super();

    this.state = {
      message: "",
      counter: 280,
    };
  }

  handleChange = (event) => {
    const newCount = 280 - event.target.value.length
    this.setState({
      message: event.target.value,
      counter: newCount,
    });
  }

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input type="text" name="message" id="message" onChange={this.handleChange} value={this.state.message}/>
        <p>{this.state.counter} chars remaining</p>
      </div>
    );
  }
}

export default TwitterMessage;
