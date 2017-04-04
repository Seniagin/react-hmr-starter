import React from 'react';
import ReactDOM from 'react-dom';


class TestElement extends React.Component {
  render() {
    return <div>React Starter</div>
  }
}

ReactDOM.render(
  <TestElement/>,
  document.getElementById('root')
);