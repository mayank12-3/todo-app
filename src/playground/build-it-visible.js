// console.log('App.js is running')

// let visibility = false

// const toggleVisibility = (e) => {
//   e.preventDefault()
//   visibility = !visibility
//   render()
// }

// const appRoot = document.getElementById("app");

// const render = () => {
//   const template = (
//     <div>
//       <h1>Visibility Toggle</h1>
//       <button onClick={toggleVisibility}>
//         {visibility ? 'Hide Details' : 'Show Details' }
//       </button>
//       {visibility && (
//         <p>Hey, There are some details you can now see</p>
//       )}
//     </div>
//   )

//   ReactDOM.render(template, appRoot);
// } 

// render();


 

class VisibilityToggle extends React.Component {
  constructor(props){
    super(props)
    this.handleToggleVisibility = this.handleToggleVisibility.bind(this)
    this.state = {
      visibility: false
    }
  }
  handleToggleVisibility() {
    this.setState((prevState) => {
      return {
        visibility: !prevState.visibility
      }
    })
  }
  render() {
    return(
      <div>
        <h1>Visibility Toggle</h1>
        <button onClick={this.handleToggleVisibility}>
          {this.state.visibility ? 'Hide Details' : 'Show Details' }
        </button>
        {
          this.state.visibility && (
            <div>
              <p>Hey, some details you can see!</p>
            </div>
          )
        }
      </div>
    )
  }
}

ReactDOM.render(<VisibilityToggle />, document.getElementById('app'))