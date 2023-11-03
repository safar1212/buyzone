
import './App.css';
import Header from './Header';
import data from './data';
import LinesOfObject from './LinesOfObject';



function App() {

  const Lines = data.map(item => {

    return (
      <LinesOfObject
      key={item.id}
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
