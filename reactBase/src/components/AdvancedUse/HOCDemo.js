import React from 'react';

// 高阶组件生成器
const withMouse = (Component) => {
  class withMouseComponent extends React.Component {
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
          {/* 1. 透传所有props方便Component获取高阶组件的props, 2. 增加 mouse 属性 */}
          <Component {...this.props} mouse={this.state} />
        </div>
      )
    }
  }

  return withMouseComponent
}

const App = (props) => {
  const { x, y } = props.mouse
  return (
    <h1>the mouse position is ({x}, {y})</h1>
  )
}

// 暴露高阶组件
export default withMouse(App)
