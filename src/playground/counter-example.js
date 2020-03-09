class Counter extends React.Component {
  constructor(props) {
    super(props)
    this.handlAddOne = this.handlAddOne.bind(this)
    this.handlMinusOne = this.handlMinusOne.bind(this)
    this.handleReset = this.handleReset.bind(this)
    this.state = {
      count: 0
    }
  }
  componentDidMount() {
    try {
      const json = localStorage.getItem('count')
      const count = parseInt(json)
      this.setState(() => ({ count }))
    } catch(e) {
      console.log('e', e)
    }
  }

  componentDidUpdate(prevState) {
    if(prevState.count !== this.state.count) {
      localStorage.setItem('count', this.state.count)
      console.log('Saving data')
    }
  }
  handlAddOne () {
    this.setState((prevState) => {
      return {
        count: prevState.count + 1
      }
    })
    console.log('Add One')
  }

  handlMinusOne () {
    this.setState((prevState) => {
      return {
        count: prevState.count - 1
      }
    })
    console.log('minus One')
  }

  handleReset () {
    this.setState((prevState) => {
      return {
        count: 0
      }
    })
    console.log('Reset')
  }

  render() {
    return (
      <div>
        <h1>Count: {this.state.count}</h1>
        <button onClick={this.handlAddOne}>+ 1</button>
        <button onClick={this.handlMinusOne}>- 1</button>
        <button onClick={this.handleReset}>reset</button>
      </div>
    )
  }
}

ReactDOM.render(<Counter count={0}/>, document.getElementById('app'))



// let count = 0;
// const addOne = () => {
//   count++
//   renderCounterApp()
//   console.log('add One', count)
// }

// const minusOne = () => {
//   count--
//   renderCounterApp()
//   console.log('minus One', count)
// }

// const reset = () => {
//   count = 0
//   renderCounterApp()
//   console.log('reset')
// }

// const appRoot = document.getElementById("app");

// const renderCounterApp = () => {
//   const templateTwo = (
//     <div>
//       <h1>Count: {count}</h1>
//       <button onClick={addOne}>+ 1</button>
//       <button onClick={minusOne}>-  1</button>
//       <button onClick={reset}>Reset</button>
  
//     </div>
//   )

//   ReactDOM.render(templateTwo, appRoot); 
// }

// renderCounterApp()