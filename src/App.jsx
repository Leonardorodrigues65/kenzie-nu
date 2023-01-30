import { useState } from 'react'
import reactLogo from './assets/react.svg'
import Dashboard from './components/Dashboard';
import LandingPage from './components/LandingPage';


function App() {
  const [start, setStart] = useState(false); 

  const localStorage = JSON.parse(window.localStorage.getItem('@NuKenzie: transactions'));

  const [list, setList] = useState(localStorage || []);

  return (
    <div className="App">

      {!start ? <LandingPage click={setStart}/> : <Dashboard click={setStart} setList={setList} list={list}/>}   

    </div>
  )
}

export default App
