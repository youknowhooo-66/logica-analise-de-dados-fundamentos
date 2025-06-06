import { useState } from 'react'
import './App.css'

function App() {

  const [inputDia, setInputDia] = useState('');

  function executar(){

  switch(Number(inputDia)){
    case 1:
    alert('Segunda-Feira')
    break
    case 2:
    alert('Terça-Feira')
    break
    case 3:
    alert('Quarta-Feira')
    break
    case 4:
    alert('Quinta-Feira')
    break
    case 5:
    alert('Sexta-Feira')
    break
    case 6:
    alert('Sábado')
    break
    case 7:
    alert('Domingo')
    break

    default:
    alert('Digite um número válido (1-7)')
  }
  }
  return (
    <>
      <input type="text"
      value={inputDia}
      onChange={(e) => setInputDia(e.target.value)}/>
      {inputDia}

      <button onClick={executar}>Botão</button>
    </>
  )
}

export default App
