import React from 'react'

// parent component
export default class Parent extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      msg: 'message in parent component'
    }
  }

  render() {
    return <div style={{margin: "10px", border: "1px solid #000", padding: "10px"}}>
      <h1>componentWillReceiveProps&#40;nextProps&#41; demonstration</h1>
      <hr />
      <h1>This is parent component</h1>
      <input type="button" value="click to change MSG" onClick={this.changeMsg} />
      <p>Child component used to display message below:</p>
      <Son pmsg={this.state.msg}></Son>
      <p>See console for logged details about props data in componentWillReceiveProps&#40;nextProps&#41; life cycle. <br />This life cycle is triggered when button clicked because props data change. In this life cycle, this.props.pmsg keeps old props data, while nextProps keeps new props data.</p>
    </div>
  }

  changeMsg = () => {
    this.setState({
      msg: 'message altered'
    })
  }
}




// child component
class Son extends React.Component {
  constructor(props) {
    super(props)

    this.state = {}
  }

  render() {
    return <div>
      <h3>This is child component showing message from parent component: {this.props.pmsg}</h3>
    </div>
  }

  // won't trigger at first render
  // trigger when received props change
  componentWillReceiveProps(nextProps) {
    // this.props would be the old data
    // get the new props via nextProps
    console.log('old props: ' + this.props.pmsg + ' ---- new props: ' + nextProps.pmsg);
  }
}