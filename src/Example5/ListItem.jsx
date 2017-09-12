import React, { Component } from 'react';

class ListItem extends Component {
/*  shouldComponentUpdate(nextProps) {
    return this.props === nextProps;
  }*/

  render() {
    console.log('render list item');
    const { item } = this.props;

    return (
      <li>
        { item }
      </li>
    );
  }
}

export default ListItem;
