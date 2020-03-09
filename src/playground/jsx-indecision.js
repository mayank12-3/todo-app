
class IndecisinApp extends React.Component {
  render() {
    const title = 'Test value'
    const subtitile = 'Put your life in the hands of a computer'
    const options = ['One', 'Two', 'Three', 'Four']
    return(
      <div>
        <Header title={title} subtitile={subtitile}/>
        <Action />
        <Options options={options}/>
        <AddOption />
      </div>
    )
  }
}
class Header extends React.Component {
  render() {
    return (
      <div>
        <h1>{this.props.title}</h1>
        <h2>{this.props.subtitile}</h2>
      </div>
    )
  }
}

class Action extends React.Component {
  handlePick() {
    alert('Clicked')
  }
  render() {
    return (
      <div>
        <button onClick={this.handlePick}>Action</button>
      </div>
    )
  }
}


class Options extends React.Component {
  constructor(props) {
    super(props)
    this.handleRemoveAll = this.handleRemoveAll.bind(this)
  }
  handleRemoveAll() {
    console.log(this.props.options)
  }
  // handleRemoveAll() {
  //   alert('remove)
  // }
  render() {
    console.log(this.props.options)
    return (
      <div>
      <button onClick={this.handleRemoveAll}>Remove All</button>
        {
          this.props.options.map((value) => <Option key={value} optionText={value}/>)
        }
      </div>
    )
  }
}

class Option extends React.Component {
  render() {
    return(
      <div>
        Option: {this.props.optionText}
      </div>
    )
  }
}

class AddOption extends React.Component {
  handleAddOption(e) {
    e.preventDefault()
    const option = e.target.elements.option.value.trim()
    if(option) {
      alert(option)
    }
  }
  render() {
    return (
      <div>
        <form onSubmit={this.handleAddOption}>
          <input type='text' name='option' />
          <button>Add Option</button>
        </form>
      </div>
    )
  }
}


ReactDOM.render(<IndecisinApp />, document.getElementById('app'))