/**
 * @desc 自定义钩子
 * 封装自定义钩子改写副作用钩子
 */

import React, { Fragment, useState, useEffect } from 'react';
import Axios from 'axios';

// 自定义钩子
function DIYHook(show) {
  const defaultState = {};
  const [user, setUser] = useState(defaultState);

  useEffect(() => {
    console.log('useEffect ~');
    Axios.get(`/mock/data.json?id=${show}`)
      .then(({ data }) => {
        setUser(data);
      })
  }, [show]);

  return [user];
}

export default function UseEffect() {

  const [show, setShow] = useState("1");

  // 调用自定义的钩子
  const [user] = DIYHook(show);

  return (
    <Fragment>
      <h1>自定义钩子</h1>
      <hr />
      <div>{ user.userName }</div>
      <div>{ user.sex }</div>
      <div>{ user.age }</div>
      <div>
        <button onClick={() => { setShow('1') }}>setShow 1</button>
        <button onClick={() => { setShow('2') }}>setShow 2</button>
      </div>
    </Fragment>
  )
}
