import { ChangeEvent, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [valor, setValor] = useState('')
  

  function MudancaDoH1(event: ChangeEvent<HTMLInputElement>) {
    setValor(event.target.value)
  }

  return (
    <>
    <div className="Componente">
      <h2>Componente 1</h2>
      <form>
        <label htmlFor="input">Digite algo: </label>
        <input type="text" onChange={MudancaDoH1}/>
      </form>
      <h3>{valor}</h3>
    </div>
    
    
    </>
  )
}

export default App