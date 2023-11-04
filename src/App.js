
import './App.css';
import Header from './Header';
import data from './memesData';
import Meme from './Memes';
import react, {useState} from "react";




function App() {


   let thingsElement = thingsArray.map(thing =><p>{thing}</p>)



  return (
    <div className="App">
      <Header />
      <Meme />
      <div onClick={addItem}>
        {thingsElement}
      </div>
    </div>
    
  );

}

export default App;
