import React, { Component } from 'react';
import classes from './App.css';
import Person from './Person/Person';
import ErrorBoundary from './ErrorBoundary/ErrorBoundary';

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
      return p.userId === id;
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

    let persons = null;
    let btnClass = '';


    if (this.state.showPersons) {
      persons = (
        <div>
          {this.state.persons.map((person, index) => {
            return <ErrorBoundary key={person.id} > 
                <Person 
                  click={() => this.deletePersonHandler(index)}
                  name={person.name} 
                  age={person.age}
                  
                  changed={(event) => this.nameChangedHandler(event, person.id)}/>
              </ErrorBoundary>
          })}
        </div> 
      );

      btnClass = classes.Red;
    }

    const assignedClasses = [];
    if (this.state.persons.length <= 2) {
      assignedClasses.push( classes.red );
    } 
    
    if (this.state.persons.length <= 1) {
      assignedClasses.push( classes.bold );
    }


    return (
      <div className={classes.App}>
        <h1>Hello! I'm a first react app!</h1>
        <p className={assignedClasses.join(' ')}>Some text</p>
        <button 
          className={btnClass}
          onClick={this.togglePersonsHandler}>Toggle person</button>
        {persons}
      </div>
    );
  }
}

export default App;
