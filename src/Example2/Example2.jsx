import React, { PureComponent } from 'react';
import Logger from './Logger';
import './Example2.css';

class Example2 extends PureComponent {
    constructor(props) {
        super(props);

        this.state = {
            value: 1
        };
    }

    render() {
        return (
            <div className="example2">
                <h3>Example 2</h3>
                <button
                    className="btn"
                    onClick={() => this.setState({ value: Math.random() })}
                >
                    Generate new props
                </button>
                <Logger value={this.state.value}/>
            </div>
        );
    }
}

export default Example2;
