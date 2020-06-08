import React from 'react';

// 懒加载异步组件
const ContextDemo = React.lazy(() => import('./ContextDemo'));

function LazyDemo(props) {
  return (
    <React.Suspense fallback={<div>Loading...</div>}>
      <ContextDemo />
    </React.Suspense>
  )
}

export default LazyDemo;

// 1. 强制刷新，可看到 loading （看不到就限制一下 chrome 网速）
// 2. 看 network 的 js 加载