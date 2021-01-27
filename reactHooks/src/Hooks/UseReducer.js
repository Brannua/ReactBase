/**
 * @desc useReducers()钩子用来引入 Reducer 功能
 */

import React, { Fragment, useReducer } from 'react';

function myReducer(state, action) {
  switch (action.type) {
    case 'countUp':
      return {
        ...state,
        count: state.count + 1,
      }
    default:
      return state;
  }
}

export function UseReducer() {
  // useReducer() 接受 Reducer 函数和状态的初始值作为参数，返回一个数组。
  // 数组的第一个成员是状态的当前值，第二个成员是发送 action 的dispatch函数。
  const [ state, dispatch ] = useReducer(myReducer, { count: 0 });
  const action = { type: 'countUp' };

  return (
    <Fragment>
      <h1>useReducer() action钩子</h1>
      <hr />
      <button onClick={() => dispatch(action)}> +1 </button>
      <p>Count: { state.count }</p>
    </Fragment>
  );
}
