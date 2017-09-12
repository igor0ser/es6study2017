import React, { Component } from 'react';
import lodash from 'lodash';
import ListItem from './ListItem';

import './Example5.css';

class Example5 extends Component {
    constructor(props) {
        super(props);

        this.state = {
            data: lodash.range(1, 101),
            ascending: true
        };
    }

    sortArray = () => {
      const { data, ascending } = this.state;

      const newAscending = !ascending;
      const coef = newAscending ? 1 : -1;
      const sortedData = [...data].sort((a, b) => coef * (a - b));

      this.setState({
        ascending: newAscending,
        data: sortedData
      })
    }

    render() {
        const { data } = this.state;

        return (
            <section className="example5">
              <h3>Example 5</h3>
              <ul onClick={this.sortArray}>
                {data.map(item => <ListItem item={item} key={item} />)}
              </ul>
            </section>
        );
    }
}

export default Example5;
