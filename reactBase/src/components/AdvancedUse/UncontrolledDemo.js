/**
 * @desc 非受控组件demo
 */

import React from 'react';

class UncontrolledDemo extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      name: 'lpj',
      flag: true,
    }
    // 创建 ref
    this.nameInputRef = React.createRef()
    this.fileInputRef = React.createRef()
  }

  alertName = () => {
    // 通过 ref 获取 DOM 节点
    const elem = this.nameInputRef.current
    alert(elem.value) // 不是 this.state.name
  }

  alertFile = () => {
    // 通过 ref 获取 DOM 节点
    const elem = this.fileInputRef.current
    alert(elem.files[0].name)
  }

  render() {
    return (
      // // input defaultValue
      // <div>
      //     {/* 使用 defaultValue 而不是 value, 使用 ref */}
      //     <input defaultValue={this.state.name} ref={this.nameInputRef} />
      //     {/* state 并不会随着改变 */}
      //     <span>state.name: {this.state.name}</span>
      //     <br/>
      //     <button onClick={this.alertName}>alert name</button>
      // </div>

      // // checkbox defaultChecked
      // <div>
      //     <inpu type="checkbox" defaultChecked={this.state.flag} />
      // </div>

      // file
      <div>
        <input type="file" ref={this.fileInputRef}/>
        <button onClick={this.alertFile}>alert file</button>
      </div>
    )
  }
}

export default UncontrolledDemo;
