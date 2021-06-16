import logo from './logo.svg';
import './App.css';
import contacts from "./contacts.json";


const arr2=contacts.slice(0,5)

function App() {
  return (
    <div className="App">
      <table>
        <tr>
          <th> Picture </th>
          <th>Name</th>
          <th>Popularity</th>
        </tr>
      
      {arr2.map(contact => {
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
    </div>
  );
}
export default App;