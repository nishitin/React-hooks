import React, { Component } from "react";

class ClassEffect extends Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
    };
  }
  componentDidMount() {
    document.title = `クリック数: ${this.state.count} 回`;
  }
  componentDidUpdate() {
    document.title = `クリック数: ${this.state.count} 回`;
  }

  render() {
    return (
      <div>
        <h1>{this.state.count}</h1>
        <button onClick={this.inclementCount}>カウント +</button>
      </div>
    );
  }
}

export default ClassEffect;
