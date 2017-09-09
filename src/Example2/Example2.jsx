import React, { Component } from 'react';
import axios from 'axios';

class Exapmle2 extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: null,
      query: 'react-components'
    };
  }


  componentDidMount() {
    console.log('aaaaaaa');
    this.fetchData();
  }

  fetchData = () => {
    axios.get(`https://www.reddit.com/r/${this.state.query}.json`)
      .then(({ data }) => this.setState(data));
  }

  render() {

    return (
      <form onSubmit={this.fetch}>
        <input type="text"/>
        <button type="submit">Submit</button>
        <pre>{JSON.stringify(this.state.data)}</pre>
      </form>
    );
  }
}

Exapmle2.defaultProps = {
  value1: 1,
  value2: 2,
  value3: 3,
  value4: 4
};

export default Exapmle2;
