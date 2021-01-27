/* 
  React 团队希望，组件不要变成复杂的容器，最好只是数据流的管道。开发者根据需要，组合管道即可。

  > 组件的最佳写法是函数，而不是类

  > 普通函数组件的缺陷

    1、必须是纯函数，不能包含状态

    2、不支持生命周期方法
*/

import React from 'react';

function Demo(props) {
  return <div>{ props.name }</div>
}

// export default Demo;
