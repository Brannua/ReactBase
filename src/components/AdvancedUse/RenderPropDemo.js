import React from 'react';
import PropTypes from 'prop-types';

class Mouse extends React.Component {
  constructor(props) {
    super(props)
    this.state = { x: 0, y: 0 }
  }

  handleMouseMove = (e) => {
    this.setState({
      x: e.clientX,
      y: e.clientY,
    })
  }

  render() {
    return (
      <div onMouseMove={ this.handleMouseMove }>
        { this.props.render(this.state) }
      </div>
    )
  }
}

Mouse.propTypes = {
  render: PropTypes.func.isRequired, // 必须接收一个render属性, 还必须是一个函数
}

const App = (props) => {
  return (
    <Mouse
      // render 是一个函数组件
      render={
        ({ x, y }) => <h1>the mouse position is ({x}, {y})</h1>
      }
    />
  )
}

// 即, 定义了 Mouse 组件, 其中是公共计算逻辑
// 将state作为prop传递给App中的函数组件, 渲染工作交给 App 中的函数组件

export default App
