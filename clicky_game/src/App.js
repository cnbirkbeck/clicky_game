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

 render() {
   return (
     <Wrapper>
       <Nav
       title= "Harry Potter Clicky Game"
       score = {this.state.currentScore}
       topScore = {this.state.topScore}
       rightWrong = {this.state.rightWrong}
       />
       <Title>
         Try to click on each character without hitting any duplicates!
       </Title>

       <Container>
         <Row>
           {this.state.characters.map(friend => (
             <Column size= "md-3" "sm-6">
               <CharacterCard
                  key={characters.id}
                  handleClick={this.handleClick}
                  handleIncrement={this.handleIncrement}
                  handleReset={this.handleReset}
                  handleShuffle={this.handleShuffle}
                  id={characters.id}
                  image={characters.image}
                />
              </Column>    
           ))}
         </Row>
       </Container>
     </Wrapper>
   );
 }
}

export default App;
