import { useState } from 'react';
import Header from './Components/Header';
import OrderNameInput from './OrderNameInput';
import OrderImages from './OrderImages';
// import Dropdown from './Dropdown';
// import InstructionList from './InstructionsList';
import './App.css';

function App() {
  // set state
  const [instructions, setInstructions] = useState([]);
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
        <OrderNameInput setName={setName} />
        <h1>Welcome {name}</h1> 
        <p>please place your order here:</p>
        <div className='order-images'>
          <OrderImages foodID={foodID} drinkID={drinkID} sideID={sideID}/>
        </div>
      </main>
    </div>
  );
}

export default App;
