
import './App.css';
import Header from './Header';
import data from './memesData';
import Meme from './Memes';
import react, {useState} from "react";




function App() {

 

  const [thingsArray, setThingsArray] = useState([])



  function addItem(){
    
    setThingsArray(prevThingsArray => {
      return [ ...prevThingsArray, `Thing ${prevThingsArray.length + 1}`];
      
    })

    // setThingsArray(prevThingsArray =>{
    //   return [prevThingsArray.push("Thing 3")];
    // })
  }


   let thingsElement = thingsArray.map(thing =><p key={thing}>{thing}</p>)



  return (
    <div className="App">
      <Header />
      <Meme />
      <div>
        <button type='submit' onClick={addItem}>Click me</button>
      </div>
      <div >
        {thingsElement}
      </div>
    </div>
    
  );

}

export default App;
