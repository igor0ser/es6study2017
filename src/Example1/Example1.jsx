import React, { Component } from 'react';

class Exapmle1 extends Component {
  constructor(props) {
    super(props);
    const { value1, value2, value3, value4 } = props;

    this.state = {
      counter: 0,
      valuesSumm: value1 + value2 + value3 + value4
    };

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    console.log('counter before - ', this.state.counter);
    // functional setState
    /*
    this.setState((state) => ({
      counter: state.counter + 1
    }));
    */

    // non-functional
    this.setState({
      counter: this.state.counter + 1
    });

    console.log('counter after - ', this.state.counter);
  }

  render() {
    const { value1, value2, value3, value4 } = this.props;
    const { counter, valuesSumm } = this.state;

    return (
      <section onClick={this.handleClick}>
        <h3>Example 1</h3>
        <ul>
          <li>Counter: {counter}</li>
          <li>Values summ: {valuesSumm}</li>
          <li>Value 1: {value1}</li>
          <li>Value 2: {value2}</li>
          <li>Value 3: {value3}</li>
          <li>Value 4: {value4}</li>
        </ul>
      </section>
    );
  }
}

Exapmle1.defaultProps = {
  value1: 1,
  value2: 2,
  value3: 3,
  value4: 4
};

export default Exapmle1;
