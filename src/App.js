import React, { Component } from 'react';
import './App.css';
import Radium, { StyleRoot } from 'radium';

import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [
      { id: 'asdf1', name: 'Fedya', age: 29 },
      { id: 'asdf2', name: 'Liuda', age: 18 },
      { id: 'asdf3', name: 'Uliana', age: 1.7 }
    ],
    showPersons: false
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

  render() {

    const style = {
      backgroundColor: 'green',
      font: 'inherit',
      border: '1px solid green',
      padding: '18px',
      cursor: 'pointer',
      color: 'white',
      ':hover': {
        backgroundColor: 'lightgreen',
        color: 'black'
      }
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

      style.backgroundColor = 'red';
      style[':hover'] = {
        backgroundColor: 'salmon',
          color: 'black'
      }
    }

    const classes = [];
    if (this.state.persons.length <= 2) {
      classes.push('red');
    } 
    
    if (this.state.persons.length <= 1) {
      classes.push('bold');
    }


    return (
      <StyleRoot>
        <div className="App">
          <h1>Hello! I'm a first react app!</h1>
          <p className={classes.join(' ')}>Some text</p>
          <button 
            style={style} 
            onClick={this.togglePersonsHandler}>Toggle person</button>
          {persons}
        </div>
      </StyleRoot>
    );
  }
}

export default Radium(App);
