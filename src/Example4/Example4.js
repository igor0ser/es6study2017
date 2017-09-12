import React, { Component } from 'react';
import axios from 'axios';
import Weather from './Weather';
import buildUrl from './buildUrl';


class Example4 extends Component {
  constructor(props) {
    super(props);

    this.state = {
      query: 'Kiev',
      data: null
    };
  }

  componentDidMount() {
    this.fetchData();
  }

  fetchData = () => {
    axios.get(buildUrl(this.state.query))
      .then(({ data }) => this.setState({ data }));
  }

  searchCity = (e) => {
    if(e.key !== 'Enter') return;

    this.setState({
      query: e.target.value,
      data: null
    }, this.fetchData)
  }

  render() {
    const { data, query } = this.state;
    console.log(data);

    return (
      <section>
        <h3>Example 4</h3>
        <input
          type="text"
          defaultValue={query}
          onKeyPress={this.searchCity}
        />
        {data ? <Weather {...data} /> : 'Loading...'}
      </section>
    );
  }
}

export default Example4;
