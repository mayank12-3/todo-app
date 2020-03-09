
class IndecisinApp extends React.Component {
  constructor(props) {
    super(props)
    this.handlePick = this.handlePick.bind(this)
    this.handleDeleteOptions = this.handleDeleteOptions.bind(this)
    this.handleAddOption = this.handleAddOption.bind(this)
    this.handleDeleteOption = this.handleDeleteOption.bind(this)
    this.state = {
      options: []
    }
  }

  componentDidMount() {
    try {
      console.log('fetching data')
      const json = localStorage.getItem('options')
      const options = JSON.parse(json)
      if(options) {
        this.setState(() => ({ options }))
      }
    } catch(e){
      console.log('e', e)
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if(prevState.options.length !== this.state.options.length) {
      const json = JSON.stringify(this.state.options)
      localStorage.setItem('options', json)
      console.log('Saving data')
    }
  }

  componentWillUnmount() {
    console.log('componentWillUnmount')
  }

  handlePick() {
    const random = Math.floor(Math.random() * this.state.options.length)
    const pick = this.state.options[random]
    alert(pick)
  }

  handleDeleteOption(optionToRemove) {
    this.setState((prevState) => ({
      options: prevState.options.filter((option) => optionToRemove !== option)
    }))
  }

  handleDeleteOptions() {
    this.setState(() => ({
      options: []
    }))
  }

  handleAddOption(option) {
    if(!option){
      return 'Enter valid item to add'
    } else if (this.state.options.indexOf(option) > -1) {
      return 'This item is already listed'
    }

    this.setState((prevState) => ({
      options: prevState.options.concat([option])
    }))
  }

  render() {
    const subtitile = 'Put your life in the hands of a computer'
    return(
      <div>
        <Header subtitile={subtitile}/>
        <Action
          handlePick={this.handlePick}
          hasOptions={this.state.options.length > 0}/>
        <Options
          options={this.state.options}
          handleDeleteOption={this.handleDeleteOption}
          handleDeleteOptions={this.handleDeleteOptions}
        />
        <AddOption
          handleAddOption={this.handleAddOption}
        />
      </div>
    )
  }
}


const Header = (props) => {
  return (
    <div>
      <h1>{props.title}</h1>
      {
        props.subtitile && <h2>{props.subtitile}</h2>
      }
    </div>
  )
}

Header.defaultProps = {
  title: 'Indecision!'
}

const Action = (props) => {
  return (
    <div>
      <button
        disabled={!props.hasOptions}
        onClick={props.handlePick}>
        Action
      </button>
    </div>
  )
}

const Options = (props) => {
  return (
    <div>
      <button
        onClick={props.handleDeleteOptions}>
        Remove All
      </button>
      {props.options.length === 0 && <p>Please add an option to get started</p>}
      {
        props.options.map((value) => (
          <Option
            handleDeleteOption={props.handleDeleteOption}
            key={value}
            optionText={value}
            />
          ))
      }
    </div>
  )
}

const Option = (props) => {
  return(
    <div>
      Option: {props.optionText}
      <button 
        onClick={(e) => {
          props.handleDeleteOption(props.optionText)
        }}
      >
        Remove
      </button>
    </div>
  )
}

class AddOption extends React.Component {
  constructor(props) {
    super(props)
    this.handleAddOption = this.handleAddOption.bind(this)
    this.state = {
      error: undefined 
    }
  }

  handleAddOption(e) {
    e.preventDefault()
    const option = e.target.elements.option.value.trim()
    const error = this.props.handleAddOption(option)

    this.setState(() => ({ error }))
    if (!error) {
      e.target.elements.option.value = ''
    }
  }

  render() {
    return (
      <div>
      {this.state.error && <p>{this.state.error}</p>}
        <form onSubmit={this.handleAddOption}>
          <input type='text' name='option' />
          <button>Add Option</button>
        </form>
      </div>
    )
  }
}

// const User = (props) => {
//   return (
//     <div>
//       <p>Name: {props.name}</p>
//       <p>Age: {props.age}</p>
//     </div>
//   )
// }

ReactDOM.render(<IndecisinApp />, document.getElementById('app'))