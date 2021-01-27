import React from 'react';

// 创建 Context 填入默认值（任何一个 js 变量）
const defaultContextValue = 'light';
const ThemeContext = React.createContext(defaultContextValue);

// 中间的组件再也不必指明往下传递 theme 了
function Toolbar(props) {
  return (
    <div>
      <ThemeBtn />
      <ThemeLink />
    </div>
  )
}

// 底层组件 class组件
class ThemeBtn extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
  }
  // 也可以在class外部用 ThemedButton.contextType = ThemeContext
  static contextType = ThemeContext
  render() {
    // React 会往上找到最近的 provider 并使用其值
    const theme = this.context
    return <p>button's theme is { theme }</p>
  }
}

// 底层组件 函数式组件 ( 没有实例化，也就没有this )
function ThemeLink(props) {
  return (
    <ThemeContext.Consumer>
      { value => <p>link's theme is {value}</p> }
    </ThemeContext.Consumer>
  )
}

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      theme: 'light',
    }
  }

  changeTheme = () => {
    this.setState({
      theme: this.state.theme === 'light' ? 'dark' : 'light',
    })
  }

  render() {
    return (
      <ThemeContext.Provider value={ this.state.theme }>
        <Toolbar />
        <button onClick={ this.changeTheme }>change theme</button>
      </ThemeContext.Provider>
    )
  }
}

export default App;
