import logo from './logo.svg';
import './App.css';
import contacts from "./contacts.json";
import React from 'react';


const arr2=contacts.slice(0,5)

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {contactList: arr2};
  }

  addRandom=() => {
    const randomContact= contacts[Math.floor(Math.random() * contacts.length)]
    const contactListCopy= [...this.state.contactList]
    contactListCopy.push(randomContact)
    this.setState( {contactList: contactListCopy})

  }

  sortByName=() => {
    console.log("mira que nombre ma zezy")
    const contactListCopy= [...this.state.contactList]
    console.log(contactListCopy)
    contactListCopy.sort((a, b) => a.name > b.name ? 1 : -1);
    
    this.setState( {contactList: contactListCopy})
  }

  sortByPopularity=() => {
    console.log("mira que polula zoy")
    const randomContact= contacts[Math.floor(Math.random() * contacts.length)]
    const contactListCopy= [...this.state.contactList]
    contactListCopy.push(randomContact)
    this.setState( {contactList: contactListCopy})

  }

  render() {  
    return(
    <div className="App">
    <table>
      <tr>
        <th> Picture </th>
        <th>Name</th>
        <th>Popularity</th>
      </tr>
    
    {this.state.contactList.map(contact => {
      console.log(arr2);
      
        return (
        <tr>
          <td> <img width="50px" src={contact.pictureUrl}/> </td>
          <td>{contact.name}</td>
          <td>{contact.popularity}</td>
        </tr>
      )
      
      
    })}
    </table>
    <button onClick={this.addRandom}>Add Random Contact</button>
    <button onClick={this.sortByName}>Sort by name</button>
    <button onClick={this.sortByPopularity}>Sort by popularity</button>
  </div>)
    
}
}
export default App;