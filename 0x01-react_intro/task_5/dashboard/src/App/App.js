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
                <p>Login to access full dashboard: </p>
                <label htmlFor='email'>Email: </label>
                <input type='email' id='email'></input>
                <label htmlFor='password'>Password: </label>
                <input type='password' id='password'></input>
                <button>OK</button>
            </div>

            <div className='App-footer'>
                <p>Copyright {getFullYear()} - {getFooterCopy()}</p>
            </div>
        </>


    );
}

export default App;