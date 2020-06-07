import React from 'react';

class FormDemo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: 'lpj',
      info: '个人信息',
      city: 'beijing',
      flag: true,
      gender: 'male',
    }
  }

  render() {
    // // 受控组件( 组件受state控制 )
    // return (
    //   <div>
    //     <p>{ this.state.name }</p>
    //     {/* htmlFor 代替 for */}
    //     <label htmlFor='inputName'>姓名: </label>
    //     <input id='inputName' value={ this.state.name } onChange={ this.onInputChange }/>
    //   </div>
    // )


    // return (
    //   <div>
    //     <textarea value={ this.state.info } onChange={ this.onSelectChange } />
    //     <p>{ this.state.info }</p>
    //   </div>
    // )


    // return (
    //   <div>
    //     <select value={ this.state.city } onChange={ this.onSelectChange }>
    //       <option value='beijing'>北京</option>
    //       <option value='shanghai'>上海</option>
    //       <option value='shenzhen'>深圳</option>
    //     </select>
    //   </div>
    // )


    // return (
    //   <div>
    //     <input type='checkbox' checked={ this.state.flag } onChange={ this.onCheckChange } />
    //     <p>{ this.state.flag.toString() }</p>
    //   </div>
    // )


    return (
      <div>
        male <input type='radio' name='gender' value='male' checked={ this.state.gender === 'male' ? true : false } onChange={ this.onRadioChange } />
        female <input type='radio' name='gender' value='female' checked={ this.state.gender === 'female' ? true : false } onChange={ this.onRadioChange } />
        <p>{ this.state.gender }</p>
      </div>
    )
  }

  onInputChange = (e) => {
    this.setState({
      name: e.target.value
    })
  }

  onSelectChange = (e) => {
    this.setState({
      info: e.target.value
    })
  }

  onSelectChange = (e) => {
    this.setState({
      city: e.target.value
    })
  }

  onCheckChange = (e) => {
    this.setState({
      flag: !this.state.flag
    })
  }

  onRadioChange = (e) => {
    this.setState({
      gender: e.target.value
    })
  }
}

export default FormDemo;
