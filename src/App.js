import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';
import ValidationComponent from './ValidationComponent/ValidationComponent';
import CharComponent from './CharComponent/CharComponent';


class App extends Component {
  state = {
    persons: [
      { id: 'asdf1', name: 'Fedya', age: 29 },
      { id: 'asdf2', name: 'Liuda', age: 18 },
      { id: 'asdf3', name: 'Uliana', age: 1.7 }
    ],
    showPersons: false,
    inputText: [{text: '11', inputTextLength: 0 }]
  }

  nameChangedHandler = (event, id) => {
    
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    })

    const person = {...this.state.persons[personIndex]};
    person.name = event.target.value;
    const persons = [...this.state.persons];
    persons[personIndex] = person;
    this.setState({persons: persons});  
  }

  deletePersonHandler = (personIndex) => {
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({persons: persons});
  }

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({showPersons: !doesShow}); /* переключаем  true/false */
  }


  textLengthHandler = (event) => {
    const inputText = [...this.state.inputText];
    inputText.text = event.target.value;
    inputText.inputTextLength = inputText.text.length;
    this.setState({ inputText: inputText});
  }

  deleteCharHandler = (letters) => {
    letters.splice(personIndex, 1);
    this.setState({ persons: persons });
  }


  render() {

    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid green',
      padding: '18px',
      cursor: 'pointer'
    }

    let persons = null;
    if (this.state.showPersons) {
      persons = (
        <div>
          {this.state.persons.map((person, index) => {
            return <Person 
              click={() => this.deletePersonHandler(index)}
              name={person.name} 
              age={person.age}
              key={person.id} 
              changed={(event) => this.nameChangedHandler(event, person.id)}/>
          })}
        </div> 
      );
    }

    
    let letters = this.state.inputText.text;
    let letterstoArrow = '';
    if (letters != undefined) {
      let letterstoArrow = letters.split('');
    }


    return (
      <div className="App">
        <h1>Hello! I'm a first react app!</h1>
        <p>Some text</p>
        <input type="text" onChange={this.textLengthHandler}></input>
        <p>Lenght of input text: {this.state.inputText.inputTextLength}</p>
        <ValidationComponent 
          textLength={this.state.inputText.inputTextLength}/>
        <CharComponent 
          click={() => this.deleteCharHandler(letterstoArrow)}
          text={letterstoArrow}
          />
        <button 
          style={style} 
          onClick={this.togglePersonsHandler}>Toggle person</button>
        {persons}
      </div>
    );
  }
}

export default App;
