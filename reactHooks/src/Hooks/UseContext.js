/**
 * @desc 共享状态钩子 useContext()
 * 如果需要在组件之间共享状态，可以使用useContext()。
 * 现在有两个组件 Navbar 和 Messages，我们希望它们之间共享状态。
 * 
 * 1、使用 React Context API，在组件外部建立一个 Context。
 * 2、useContext()钩子函数用来引入 Context 对象，从中获取属性。
 */

import React, { Fragment } from 'react';
import Navbar from './useContext/Navbar';
import Messages from './useContext/Messages';

// export const AppContext = React.createContext({});
export const AppContext = React.createContext();

const data = {
  demo: 'Awesome!!!'
}

export function UseContext() {
  return (
    <Fragment>
      <h1>useContext() 状态共享钩子</h1>
      <hr />
      <AppContext.Provider value={ data }>
        <Navbar/>
        <Messages/>
      </AppContext.Provider>
    </Fragment>
  )
}
