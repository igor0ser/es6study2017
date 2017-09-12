import React, { Component } from 'react';
import randomWords from 'random-words';

const generateText = () => randomWords(10).join(' ');

class Logger extends Component {
    constructor() {
        super();

        this.state = {
            text: generateText()
        };
        console.log('constructor');
    }

    componentWillMount()        { console.log('componentWillMount'); }
    componentDidMount()         { console.log('componentDidMount');   console.log('--------'); }
    componentWillReceiveProps() { console.log('componentWillReceiveProps'); }
    shouldComponentUpdate()     { console.log('shouldComponentUpdate'); return true; }
    componentWillUpdate()       { console.log('componentWillUpdate'); }
    componentDidUpdate()        { console.log('componentDidUpdate');   console.log('--------'); }
    componentWillUnmount()      { console.log('componentWillUnmount'); console.log('--------'); }

    render() {
        console.log('render');

        const { text } = this.state;
        const { value } = this.props;

        return (
            <div className="logger">
                <h4>Logger</h4>
                <p>
                    State text: {text}
                </p>
                <p>
                    Props value: {value}
                </p>
                <div>
                    <button
                        className="btn"
                        onClick={() => this.setState({ text: generateText() })}
                    >
                        Generate new text
                    </button>
                    <button
                        className="btn"
                        onClick={() => this.forceUpdate()}
                    >
                        Force update
                    </button>
                </div>
            </div>
        );
    }
}

export default Logger;
