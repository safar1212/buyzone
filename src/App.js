
import './App.css';
import Header from './Header';
import data from './memesData';
import Meme from './Memes';
import react, {useState} from "react";




function App() {


  return (
    <div className="App">
      <Header />
      <div >
       <Meme />
      </div>
    </div>
    
  );

}

export default App;
