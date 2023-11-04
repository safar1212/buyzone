
import './App.css';
import Header from './Header';
import data from './memesData';
import Meme from './Memes';
import react, {useState} from "react";




function App() {

  

  const [thingsArray, setThingsArray] = useState(["thing 1", "thing 2"])

  console.log(useState);


  function addItem(){
    setThingsArray(PrevthingsArray => {
      return [...PrevthingsArray, `thing ${PrevthingsArray.length + 1}`]
    })
  }


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
