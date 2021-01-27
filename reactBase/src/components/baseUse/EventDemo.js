import React from 'react';

class EventDemo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: 'zhangsan',
      list: [{
        id: 'id-1',
        title: '标题1',
      }, {
        id: 'id-2',
        title: '标题2',
      }, {
        id: 'id-3',
        title: '标题3',
      }]
    }

    // // 修改方法的 this 指向
    // this.clickHandler1 = this.clickHandler1.bind(this);
  }

  render() {
    // return (
    //   <p onClick={ this.clickHandler1 }>
    //     { this.state.name }
    //   </p>
    // )


    // return (
    //   <p onClick={ this.clickHandler2 }>
    //     { this.state.name }
    //   </p>
    // )


    // return (
    //   <a href='https://github.com/brannua' onClick={ this.clickHandler3 }>brannua</a>
    // )


    // 传参
    return (
      <ul>
        {
          this.state.list.map((item, index) => {
            return <li key={ item.id } onClick={ (event) => { this.clickHandler4(item.id, item.title, event) } }>
              {index} - { item.title }
            </li>
          })
        }
      </ul>
    )
  }


  // clickHandler1() {
  //   // this 默认是 undefined
  //   console.log(this);
  //   this.setState({
  //     name: 'lisi',
  //   })
  // }


  // clickHandler2 = () => {
  //   静态方法, this 指向当前实例
  //   console.log(this);
  //   this.setState({
  //     name: 'lisi',
  //   });
  // }


  // 获取 event
  clickHandler3 = (event) => {
    // // 4. 其实react封装的事件对象模拟出了原生DOM事件的所有能力
    // event.preventDefault();
    // event.stopPropagation();

    // // 1. 查看原型链发现这里的event是 SyntheticEvent
    // console.log(event, event.__proto__.constructor);
    // console.log(event.target, event.currentTarget);

    // // 2. 通过如下方式查看原生的事件对象 MouseEvent
    // console.log(event.nativeEvent);

    // // 3. 所有事件都被挂载到了 document 上
    // console.log(event.nativeEvent.target, event.nativeEvent.currentTarget);
  }


  // // 传参, 最后追加参数 event
  // clickHandler4 = (id, title, event) => {
  //   console.log(id, title);
  //   console.log(event);
  // }
}

export default EventDemo;
