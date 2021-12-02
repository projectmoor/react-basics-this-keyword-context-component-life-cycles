import React from 'react'

export default class BindThis extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      msg: 'This is default message'
    }

    // Method 2: binding this and passing arguments in constructor function
    this.changeMsg2 = this.changeMsg2.bind(this, '🚗', '👫')
  }

  render() {
    return <div>
      <h1>Binding this keyword and passing arguments to function</h1>

      {/*  call/apply will run the function, bind won't run */}
    
      {/* Method 1: bind this and pass argument in event handler function */}
      <input type="button" value="Method 1: in event handler function" onClick={this.changeMsg1.bind(this, '🐷', '🍕')} />
      <input type="button" value="Method 2: in constructor function" onClick={this.changeMsg2} />
      <input type="button" value="Method 3: use arrow function" onClick={() => { this.changeMsg3('😊', '😘') }} />

      <hr />

      <h3>Click buttons above to change message: {this.state.msg}</h3>

      <hr />

      {/* hook up data to value property, also trigger onChange event to update value */}
      <p>Below is an add-on demonstration: manually hook up this.state and input value</p>
      <input type="text" style={{ width: '100%' }} value={this.state.msg} onChange={this.txtChanged} ref="txt" />
    </div>
  }

  // txtChanged event handler function to send new data to this.state.
  txtChanged = (e) => {
    // 3 ways to get new text：
    //  1. document.getElementById 
    //  2. ref
    // console.log(this.refs.txt.value);
    //  3. e.target returns a JS DOM object
    // console.log(e.target.value);

    // write code to update this.state value
    this.setState({
      msg: e.target.value
    })
  }

  changeMsg1(arg1, arg2) {
    this.setState({
      msg: 'Method 1' + arg1 + arg2
    })
  }

  changeMsg2(arg1, arg2) {
    this.setState({
      msg: 'Method 2' + arg1 + arg2
    })
  }

  changeMsg3 = (arg1, arg2) => {
    this.setState({
      msg: 'Method 3' + arg1 + arg2
    })
  }

}