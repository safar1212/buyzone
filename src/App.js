
import './App.css';
import Header from './Header';
import data from './data';
import LinesOfObject from './LinesOfObject';

// console.log(data);

function App() {

  const Lines = data.map(item => {

    return (
      <LinesOfObject
      line={item.para}
      />
    )
  })

  return (
    <div className="App">
      <Header />
      {Lines}
    </div>
  );

}

export default App;
