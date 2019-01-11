import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';
import ValidationComponent from './ValidationComponent/ValidationComponent';
import CharComponent from './CharComponent/CharComponent';


class App extends Component {
  state = {
    userInput: ''
  }

  inputChangeHandler = (event) => {


    this.setState({ userInput: event.target.value});
  }

  deleteCharHandler = (index) => {
    const inputText = this.state.userInput.split('');
    inputText.splice(index, 1);
    const updatedText = inputText.join('');
    this.setState({ userInput: updatedText });
  }


  render() {

    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid green',
      padding: '18px',
      cursor: 'pointer'
    }


    const charComponents = this.state.userInput.split('')
      .map((char, index) => {
        return <CharComponent 
          char={char}
          key={index}
          click={() => this.deleteCharHandler(index)} />
      })

    return (
      <div className="App">
        <h1>Hello! I'm a first react app!</h1>
        <p>Some text</p>
        <input type="text" 
          onChange={this.inputChangeHandler} 
          value={this.state.userInput}></input>
        <p>Lenght of input text: {this.state.userInput.length}</p>
        <ValidationComponent 
          textLength={this.state.userInput.length} />
        {charComponents}
        <button 
          style={style} 
          onClick={this.togglePersonsHandler}>Toggle person</button>
      </div>
    );
  }
}

export default App;
