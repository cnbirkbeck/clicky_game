import React from 'react';
import CharacterCard from "./components/CharacterCard";
import Nav from "./components/Nav";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import Container from "./Container";
import Row from "./Row";
import Column from "./Column";
import characters from "./character.json";
import './App.css';

//set up shuffle function
function shuffleCharacters(array) {
  for (let i = array.length -1; i > 0; i--){
    let j = Math.floor(Math.random() * (i+1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
};
 
//create app component
class App extends Component {
 //set this.state
 state = {
   characters,
   currentScore: 0,
   topScore: 0, 
   rightWrong: "", 
   clicked: [],
 };

 handleClick = id => {
   if (this.state.clicked.indexOf(id) === -1) {
     this.handleIncrement();
     this.setState({ clicked: this.state.clicked.concat(id) });
   } else {
     this.handleReset();
   }
 };

 handleIncrement = () => {
   const newScore = this.state.currentScore + 1;
   this.setState({
     currentScore: newScore,
     rightWrong: ""
   });
   if (newScore >= this.state.topScore) {
     this.setState({ topScore: newScore});
   }
   else if (newScore === 12) {
     this.setState({ rightWrong: "You Win!" });
   }
   this.handleShuffle();
 };

 handleReset = () => {
   this.setState({
     currentScore: 0,
     topScore: this.state.topScore,
     rightWrong: "Avada Kedavra!", 
     clicked: []
   });
   this.handleShuffle();
 };

 handleShuffle = () => {
   let shuffleCharacters = shuffleCharacters (characters);
   this. setState({characters: shuffleCharacters});
 };
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
