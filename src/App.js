import { useState, useEffect } from 'react';

import CardList from './components/card-list/card-list.component';
import SearchBox from './components/search-box/search-box.component';
//import logo from './logo.svg';
import './App.css';


//Functional Component
const App = () => {

  const [searchField, setSearchField] = useState(''); //[value, setValue]
  const [monsters, setMonsters] = useState([]);
  const [filteredMonsters, setFilterMonsters] = useState(monsters);
 
    console.log('render');

    useEffect( () => {
      fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => response.json())
      .then((users) => setMonsters(users));
    }, [])

    useEffect( () => {
      const newFilteredMonsters = monsters.filter((monster) => {
        return monster.name.toLocaleLowerCase().includes(searchField);   
       });   

       setFilterMonsters(newFilteredMonsters);
    }, [monsters,searchField]);

      
    const onSearchChange = (event) => {
     const searchFieldString = event.target.value.toLocaleLowerCase();
          setSearchField(searchFieldString);
         };
   
 /*    const filteredMonsters = monsters.filter((monster) => {
     return monster.name.toLocaleLowerCase().includes(searchField);   
    });  */  
   
     return (
       <div className="App">
   
       <h1 className='app-title'>Monsters Rolodex</h1>
   
       <SearchBox
        className='monsters-search-box'
        onChangeHandler={onSearchChange}
        placeholder='search monsters'
        />
       <CardList monsters={filteredMonsters}/> 
       </div>
     )
       
   }
  
  
//Class Component

// class App extends Component {
// constructor() {
//   super();

//  this.state = {
//   monsters: []  ,
//   searchField: '',
// };
// }

// componentDidMount() {
 
//    fetch('https://jsonplaceholder.typicode.com/users')
//    .then((response) => response.json())
//    .then((users) => 
//    this.setState(()=>{
//     return {monsters: users}
//    }
//    ));
// }



//  render(){
//   const { monsters, searchField } = this.state;
//   const { onSearchChange } = this;

//   const filteredMonsters = monsters.filter((monster) => {
//       return monster.name.toLocaleLowerCase().includes(searchField);   
//   });


//   return (
//     <div className="App">

//     <h1 className='app-title'>Monsters Rolodex</h1>

//     <SearchBox
//      className='monsters-search-box'
//      onChangeHandler={onSearchChange}
//      placeholder='search monsters'
//      />
//     <CardList monsters={filteredMonsters}/>
//     </div>
//   );
//  }
// }

export default App;
