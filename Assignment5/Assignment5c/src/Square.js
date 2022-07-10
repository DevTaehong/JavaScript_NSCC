import React from 'react';
import axios from 'axios';

export default class PersonList extends React.Component { // class-based Component
  
    state = {
      persons: []
    }
  
    componentDidMount() {
      axios.get(`https://jsonplaceholder.typicode.com/users`)
        .then(res => {
          const persons = res.data;
          this.setState({ persons });
        })
    }
  
    render() {
      return (
        <div>
          <h2>List of Customers</h2>
          <ul>
              {
                this.state.persons
                    .map(person =>
                    <li key={person.id}>{person.name}</li>
                    )
              }
          </ul>
        </div>
      )
    }
  }