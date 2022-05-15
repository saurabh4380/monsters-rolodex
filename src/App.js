import { useState, useEffect } from "react";
//import { Component } from "react";
import "./App.css";
import CardList from "./components/card-list/card-list.component";
import SearchBox from "./components/search-box/search-box.component";

let App = () => {
  console.log('render App.js')
  let [searchField, setSearchField] = useState("");
  let [monsters, setMonsters] = useState([]);
  let [filteredMonsters, setfilteredMonsters] = useState(monsters);


  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((data) => data.json())
      .then((users) => setMonsters(users));
  }, []);

  function onSearchChange(e) {
    let searchFieldString = e.target.value.toLowerCase();
    setSearchField(searchFieldString);
  }
  console.log(searchField);


  useEffect(() => {
    //List used to display the data... User interaction modifications happens on this list so that the original state can be maintained in the App
    let newFilteredMonsters = monsters.filter((monster) => {
      return monster.name.toLowerCase().includes(searchField);
    }); // by putting this function inside a useEffect hook this function will only run when either monsters or searchField value changes.
    setfilteredMonsters(newFilteredMonsters);
  }, [monsters, searchField]);

  

  return (
    <div className="App">
      <h1 className="app-title">Monsters Rolodex</h1>
      <SearchBox
        onChangeHandler={onSearchChange}
        placeholder="search monsters"
        className="search-box"
      />
      <CardList monsters={filteredMonsters} />
    </div>
  );
};

// class App extends Component {
//   constructor() {
//     console.log("constructor");

//     super();

//     this.state = {
//       monsters: [],
//       searchField: "",
//     };
//   }
//   componentDidMount() {
//     console.log("componentDidMount");
//     fetch("https://jsonplaceholder.typicode.com/users")
//       .then((data) => data.json())
//       .then((users) =>
//         this.setState(
//           () => {
//             //updater function
//             return { monsters: users };
//           },
//           () => {
//             //callback function... Runs when the setState completes
//             console.log(this.state);
//           }
//         )
//       );
//   }

//   onSearchChange = (e) => {
//     let searchField = e.target.value.toLowerCase();
//     this.setState({ searchField });
//   };

//   render() {
//     console.log("render");

//     //ES6 object destructuring
//     let { monsters, searchField } = this.state;
//     let { onSearchChange } = this;

//     //List used to display the data... User interaction modifications happens on this list so that the original state can be maintained in the App
//     let filteredMonsters = monsters.filter((monster) => {
//       return monster.name.toLowerCase().includes(searchField);
//     });

//     return (
//       <div className="App">
//         <h1 className="app-title">Monsters Rolodex</h1>
//         <SearchBox onChangeHandler = {onSearchChange} placeholder = "search monsters" className = 'search-box'/>
//         <CardList monsters = {filteredMonsters}/>
//       </div>
//     );
//   }
// }

export default App;
