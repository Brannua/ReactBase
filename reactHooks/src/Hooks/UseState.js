/**
 * @desc 状态钩子 useState()
 * 用于为函数组件引入状态（state）。
 * 纯函数不能有状态，所以把状态放在钩子里面。
 */

import React, { useState, Fragment } from 'react';

export function UseState() {
  const [buttonText, setButtonText] = useState('Click me, please.')

  function handleClick() {
    return setButtonText('Thanks, been clicked!')
  }

  return (
    <Fragment>
      <h1>useState() 状态钩子</h1>
      <hr />
      <button onClick={handleClick}>{ buttonText }</button>
    </Fragment>
  )
}
