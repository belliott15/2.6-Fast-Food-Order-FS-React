import { useState } from 'react';
import Header from './Components/Header';
import './App.css';

function App() {
  // set state
  const [instructions, setInstructions] = useState('');
  const [name, setName] = useState('Customer');
  const [foodID, setFoodID] = useState(1);
  const [sideID, setSideID] = useState(1);
  const [drinkID, setDrinkID] = useState(1); 

  return (
    <div className="App">
      <header className="App-header">
        <Header text={'Kiki\'s Delivery Service'} />
      </header>
      <main>
        <h1>Welcome {name}</h1> 
        <p>please place your order here:</p>
      </main>
    </div>
  );
}

export default App;
