import './App.css';
import Home from "./components/home/Home"
import NavBar from './components/navBar/NavBar';
import {Route} from "react-router-dom"
import Characters from './components/characters/Characters';
import  CharacterDetail  from './components/characterDetail/CharacterDetail';
import Episodes from './components/episodes/Episodes';

function App() {
  return (
    <div className="App">
      <NavBar/>
      <Route exact path="/detail/:entry">
         <CharacterDetail/>
       </Route>
       <Route exact path="/characters">
         <Characters/>
       </Route>
       <Route exact path="/episodes">
         <Episodes/>
       </Route>
       <Route  exact path="/">
          <Home/>
       </Route>
    
    </div>
  );
}

export default App;
