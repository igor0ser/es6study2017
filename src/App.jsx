import React, { PureComponent } from 'react';
import Exapmle1 from './Example1/Example1';
import Exapmle2 from './Example2/Example2';
import Exapmle3 from './Example3/Example3';
import Exapmle4 from './Example4/Example4';

import './styles.css';

const examples = [Exapmle1, Exapmle2, Exapmle3, Exapmle4];

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
        <Example />
      </div>
    );
  }
}

export default App;
