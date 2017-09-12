import React, { PureComponent } from 'react';
import Example1 from './Example1/Example1';
import Example2 from './Example2/Example2';
import Example3 from './Example3/Example3';
import Example4 from './Example4/Example4';
import Example5 from './Example5/Example5';

import './styles.css';


const examples = [Example1, Example2, Example3, Example4, Example5];

class App extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      exampleIndex: 0
    };
  }

  setExample(exampleIndex) {
    this.setState({ exampleIndex });
  }

  render() {
    const { exampleIndex } = this.state;
    const Example = examples[exampleIndex];

    return (
      <div>
        <nav>
          {examples.map((item, index) => (
            <button
              key={index}
              onClick={() => this.setExample(index)}
              className="btn"
            >
              Example {index + 1}
            </button>
          ))}
        </nav>
        <Example
            value1={null}
            value2={0}
        >
            <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod, libero!
            </p>
        </Example>
      </div>
    );
  }
}

export default App;
