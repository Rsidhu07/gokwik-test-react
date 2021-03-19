import './App.css';
import InputView from './Components/InputView/InputView';

function App() {
  return (
    <div className="App">
      <div className="background-1">
        <h3>Man Matters</h3>
        <h2>Congratulations</h2>
      </div>
      <div className="background-2">
        <InputView/>
      </div>
      <div className='card'>
        <h3>Paytm</h3>
        <p>Gift Card ₹200 </p>
      </div>
    </div>
  );
}

export default App;
