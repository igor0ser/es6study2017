import React from 'react';
import ReactDOM from 'react-dom';
import Example1 from './Example1/Example1';
import Example2 from './Example2/Example2';

ReactDOM.render(
  <div>
    <Example1 value3={0} value4={null} />
    <hr />
    <Example2 />
  </div>,
  document.getElementById('root')
);