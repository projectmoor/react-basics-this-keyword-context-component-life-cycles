import React from 'react'
import ReactTypes from 'prop-types'

/* // parent component
export default class Com1 extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      color: 'red'
    }
  }

  render() {
    return <div>
      <h1>This is parent component </h1>
      <Com2 color={this.state.color}></Com2>
    </div>
  }
}



// son component
class Com2 extends React.Component {
  render() {
    return <div>
      <h3>This is son component </h3>
      <Com3 color={this.props.color}></Com3>
    </div>
  }
}


// grandson component
class Com3 extends React.Component {
  render() {
    return <div>
      <h5 style={{ color: this.props.color }}>this is grandson </h5>
    </div>
  }
} */






// parent component
export default class Com1 extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      message: 'secret message',
      color: 'red'
    }
  }

  //   getChildContextTypes
  // 1. in parent component, define a function called getChildContext, return data to be passed to child components
  getChildContext() {
    return {
      message: this.state.message,
      color: this.state.color
    }
  }

  // 2. content type check, define a static function called childContextTypes, require package prop-types
  static childContextTypes = {
    message: ReactTypes.string,
    color: ReactTypes.string
  }


  render() {
    return <div style={{margin: "10px", border: "1px solid #000", padding: "10px"}}>
      <h1>Context demonstration</h1>
      <hr />
      <h1>This is parent component, rendering child component below </h1>
      <Com2></Com2>
    </div>
  }
}



// son component
class Com2 extends React.Component {
  render() {
    return <div>
      <h3>This is son component, rendering grandson component below </h3>
      <Com3></Com3>
    </div>
  }
}



// grandson component
class Com3 extends React.Component {

  // 3. context type check, a must do
  static contextTypes = {
    message: ReactTypes.string,
    color: ReactTypes.string
  }

  render() {
    return <div>
      <h5 style={{ color: this.context.color }}>This is grandson component, accepting context from parent component:  {this.context.message} </h5>

    </div>
  }
}