import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';
import UserInput from './UserInput/UserInput';
import UserOutput from './UserOutput/UserOutput';


class App extends Component {
  state = {
    persons: [
      { name: 'Fedya', age: 29 },
      { name: 'Liuda', age: 18 },
      { name: 'Uliana', age: 1.7 }
    ],

    userName: 'Frodo'
  }

  switchNameHandler = (newName) => {
    this.setState( {
      persons: [
        { name: newName, age: 30 },
        { name: 'Liuda', age: 30 },
        { name: 'Uliana', age: 1.7 }
      ]
    })
  }

  nameChangedHandler = (event) => {
    this.setState({
      persons: [
        { name: 'Fedor', age: 30 },
        { name: event.target.value, age: 30 },
        { name: 'Uliana', age: 1.7 }
      ]
    })  
  }

  inputNameChanged = (event) => {
    this.setState({
      userName: event.target.value
    })
  }

  render() {

    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid green',
      padding: '18px',
      cursor: 'pointer'
    }

    return (
      <div className="App">
        <h1>Hello! I'm a first react app!</h1>
        <p>Some text</p>
        <button 
          style={style} 
          onClick={() => this.switchNameHandler('FEDORRRR!')}>Switch person</button>
        <UserInput 
          changed={this.inputNameChanged}
          name={this.state.userName} />
        <UserOutput 
          name={this.state.userName} />
        <Person 
          name={this.state.persons[0].name} 
          age={this.state.persons[0].age}/>
        <Person 
          name={this.state.persons[1].name} 
          age={this.state.persons[1].age}
          click={this.switchNameHandler.bind(this, 'Teodor!')}
          changed={this.nameChangedHandler} />
        <Person 
          name={this.state.persons[2].name} 
          age={this.state.persons[2].age}> I am the daughter of programer! </Person>
      </div>
    );
  }
}

export default App;
