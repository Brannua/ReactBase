/* 
  Redux 的作者 Dan Abramov 总结了组件类的几个缺点。
    1、大型组件很难拆分和重构，也很难测试。
    2、业务逻辑分散在组件的各个方法之中，导致重复逻辑或关联逻辑。
    3、组件类引入了复杂的编程模式，比如 render props 和高阶组件。
*/

import React, { Component } from 'react';

class Button extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.state = {
      buttonText: 'Click me, please.',
    };
  }

  handleClick() {
    this.setState(() => {
      return {
        buttonText: 'Thanks, been clicked!'
      }
    })
  }

  render() {
    return (
      <button onClick={this.handleClick}>{ this.state.buttonText }</button>
    )
  }
}

export default Button;
