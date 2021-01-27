/**
 * @desc useEffect()：副作用钩子
 * useEffect()用来引入具有副作用的操作，最常见的就是向服务器请求数据。
 * 以前，放在componentDidMount里面的代码，现在可以放在useEffect()。
 */

import React, { Fragment, useState, useEffect } from 'react';
import Axios from 'axios';

function Effect({ show }) {

  const defaultState = {};
  const [user, setUser] = useState(defaultState);

  useEffect(() => {
    console.log('useEffect ~');
    Axios.get(`/mock/data.json?id=${show}`)
      .then(({ data }) => {
        setUser(data);
      })
  }, [show]);

  return (
    <Fragment>
      <h1>useEffect() 副作用钩子</h1>
      <hr />
      <div>{ user.userName }</div>
      <div>{ user.sex }</div>
      <div>{ user.age }</div>
    </Fragment>
  )
}

export function UseEffect() {

  const [show, setShow] = useState("1");

  return (
    <Fragment>
      <Effect show={ show }/>
      <div>
        <button onClick={() => { setShow('1') }}>setShow 1</button>
        <button onClick={() => { setShow('2') }}>setShow 2</button>
      </div>
    </Fragment>
  )
}
