import React from 'react'
import ReactTypes from 'prop-types' // for props data type check


export default class Counter extends React.Component {
  constructor(props) {
    super(props)

    // initial data
    this.state = {
      msg: 'ok',
      count: props.initcount 
    }
  }

  // use static property defaultProps to set some default values
  static defaultProps = {
    initcount: 0 // if user doesn't pass in initcount, default to 0
  }

  // use static property propTypes for type check
  // require package prop-types
  // prop-types extracted from react after v.15.* 
  static propTypes = {
    initcount: ReactTypes.number 
  }

  // component about to be mounted but hasn't
  // virtual DOM not ready
  componentWillMount() { 
    // unable to get any html elements
    console.log('componentWillMount', document.getElementById('myh3')); // display null
    // able to get props
    console.log('componentWillMount', this.props.initcount); // 0
    // able to get state
    console.log('componentWillMount', this.state.msg); 
    // able to get custom function
    this.myselfFunc()
  }

  // begin to render virtual DOM, virtual DOM ready after execution, page not rendered yet
  render() {
    // no virtual DOM before return, unable to get any html elements
    console.log('render', document.getElementById('myh3')); // null

    // browser DOM elements still old ones (no element before first render's return)
    console.log('render', this.refs.h3 && this.refs.h3.innerHTML); // undefined

    // don't use this.setState inside render
   /*  this.setState({
      count: this.state.count + 1
    }) */

    return <div style={{margin: "10px", border: "1px solid #000", padding: "10px"}}>
      <h1>Counter component</h1>
      <input type="button" value="+1" id="btn" onClick={this.increment} />
      <hr />
      <h3 id="myh3" ref="h3">Count：{this.state.count}</h3>
    </div>

    // virtual DOM ready after return, not mounted on real page yet
  }

  increment = () => {
    this.setState({
      count: this.state.count + 1
    })
  }

  // after component mounted on page, able to get page elements
  // componentDidMount is the last function during building period
  componentDidMount() {
    // the earliest stage where we can manipulate elements
    console.log('componentDidMount', document.getElementById('myh3'));

    /* document.getElementById('btn').onclick = () => {
      // console.log('ok');
      // console.log(this);
      // this.props.initcount++
      this.setState({
        count: this.state.count + 1
      })
    } */
  }

  // running period
  // make decision whether to update component or not
  shouldComponentUpdate(nextProps, nextState) {
    // 1. must return a boolean
    // 2. if return false, don't execute render cycle, back to running period，thus page won't update, but state data changes

    // this.state.count gives old value
    // console.log(this.state.count + ' ---- ' + nextState.count);

    // only update page if even number
    // return this.state.count % 2 === 0 ? true : false
    // return nextState.count % 2 === 0 ? true : false
    return true
  }

  // about to update, but hasn't. virtual DOM still old, page elements still old
  componentWillUpdate() {
    // everything is still old
    console.log('componentWillUpdate', document.getElementById('myh3').innerHTML)
    // console.log(this.refs.h3.innerHTML);
  }

  // updated, everything is being updated
  componentDidUpdate() {
    console.log('componentDidUpdate', this.refs.h3.innerHTML);
  }



  myselfFunc() {
    console.log('custom function executed, not related to life cycle');
  }
}