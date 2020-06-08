import React from 'react';
import ReactDOM from 'react-dom';

function ProtalsDemo(props) {
  // // 正常渲染
  // return (
  //   <div>
  //     { props.children }  {/* 类似于 vue-slot */}
  //   </div>
  // )


  // 使用 Portals 将元素渲染到 body 内部第一层。
  // fixed 元素放在 body 上会有更好的浏览器兼容性。
  return (
    ReactDOM.createPortal(
      <div>{ props.children }</div>,
      document.body
    )
  )
}

export default ProtalsDemo;
