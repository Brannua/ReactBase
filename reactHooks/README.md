# 学习 React Hooks

> 参考: http://www.ruanyifeng.com/blog/2019/09/react-hooks.html

- React Hooks 的意思是 :

  - 1、组件尽量写成纯函数

  - 2、如果需要外部功能和副作用，就用钩子把外部代码"钩"进来。React Hooks 就是那些钩子。

- React 默认提供的四个最常用的钩子

  - useState()
  - useContext()
  - useReducer()
  - useEffect()

- 也可以封装自己的钩子

- React 约定，钩子一律使用use前缀命名，便于识别。你要使用 xxx 功能，钩子就命名为 usexxx。

- 由于 Hooks 可以提供共享状态和 Reducer 函数，所以它在这些方面可以取代 Redux。但是，它没法提供中间件（middleware）和时间旅行（time travel），如果你需要这两个功能，还是要用 Redux。
