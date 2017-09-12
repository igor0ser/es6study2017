import React, { Component } from 'react';
import { findDOMNode } from 'react-dom';

import './Example3.css';

class Example3 extends Component {
  constructor() {
    super();

    this.state = {
      expanded: false
    };

    this.onOutsideClick = this.onOutsideClick.bind(this);
    this.openPopover = this.openPopover.bind(this);
  }

  componentDidMount() {
    document.addEventListener('click', this.onOutsideClick);
  }

  componentWillUnmount() {
    document.removeEventListener('click', this.onOutsideClick);
  }

  onOutsideClick(event) {
    const domNode = findDOMNode(this);
    if (!domNode || !domNode.contains(event.target)) {
      this.setState({
        expanded: false
      });
    }
  }

  openPopover() {
    this.setState({
      expanded: true
    });
  }

  render() {
    const { expanded } = this.state;

    return (
      <section>
        <h3>Example 3</h3>
        <button onClick={this.openPopover}>Show popover</button>
        {expanded && (
          <div className="popover">
            Some popover content
          </div>
        )}
      </section>
    );
  }
}

export default Example3;
