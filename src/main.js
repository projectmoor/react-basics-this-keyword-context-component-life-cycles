import React from 'react'
import ReactDOM from 'react-dom'

import Counter from './components/Counter.jsx'
import Test from './components/TestReceiveProps.jsx'
import Context from './components/Context.jsx'
import BindThis from './components/BindThis.jsx'

ReactDOM.render(<div>
  <div>1. Component life cycle explained in counter example, for details see source code.</div>
  <Counter initcount={0}></Counter>
  <div>2. this.state.props and nextProps explained in componentWillReceiveProps&#40;nextProps&#41; example.</div>
  <Test></Test>
  <div>3. Use context to pass data to child components</div>
  <Context></Context>
  <div>4. Three ways to bind this keyword and pass arguments</div>
  <BindThis></BindThis>
  
</div>, document.getElementById('app'))