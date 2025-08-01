import logo from './logo.svg';
import './App.css';
import alxlogo from './alx-logo.jpg';
import { getFullYear, getFooterCopy } from './utils';

function App() {
  return (
    <>
      <div className='App-header'>
        <img src={alxlogo} alt='ALX Logo' />
        <h1>School dashboard</h1>
      </div >

      <div className='App-body'>
        <p>Login to access the full dashboard</p>
      </div>

      <div className='App-footer'>
        <p>Copyright 2020 - ALX</p>
      </div>
    </>


  );
}

export default App;
