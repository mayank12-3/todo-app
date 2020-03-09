
import React from 'react'
import AddOption from './AddOption'
import Options from './Options'  
import Header from './Header'  
import Action from './Action'  
import OptionModal from './OptionModal'

export default class IndecisionApp extends React.Component {
  state = {
    options: [],
    selectedOption: undefined
  }

  handlePick = () => {
    const random = Math.floor(Math.random() * this.state.options.length)
    const pick = this.state.options[random]

    this.setState(() => ({
      selectedOption: pick
    }))
  }

  handleClearSelectedOption = () => {
    this.setState(() => ({
      selectedOption: undefined
    }))
  }

  handleDeleteOption = (optionToRemove) => {
    this.setState((prevState) => ({
      options: prevState.options.filter((option) => optionToRemove !== option)
    }))
  }

  handleDeleteOptions = () => {
    this.setState(() => ({
      options: []
    }))
  }

  handleAddOption = (option) => {
    if(!option){
      return 'Enter valid item to add'
    } else if (this.state.options.indexOf(option) > -1) {
      return 'This item is already listed'
    }

    this.setState((prevState) => ({
      options: prevState.options.concat([option])
    }))
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

  render() {
    const subtitile = 'Put your life in the hands of a computer'
    return(
      <div >
        <Header subtitile={subtitile}/>
        <div className="container">
          <Action
            handlePick={this.handlePick}
            hasOptions={this.state.options.length > 0}/>
          <div className="widget">
            <Options
              options={this.state.options}
              handleDeleteOption={this.handleDeleteOption}
              handleDeleteOptions={this.handleDeleteOptions}
            />
            <AddOption
              handleAddOption={this.handleAddOption}
            />
          </div>
        </div>
        <OptionModal
        handleClearSelectedOption={this.handleClearSelectedOption}
        selectedOption={this.state.selectedOption}/>
      </div>
    )
  }
}









