import { useState } from "react"

function App() {
const [numeroMarujos, setNumeroMarujos] = useState('');
const [diaDeEvento, setDiaDeEvento] = useState('')

function PodeZarpar(){
  const verificarDiaDeEvento = diaDeEvento === "true"
  const verificarNumeroMarujos = Number(numeroMarujos)

  if(verificarDiaDeEvento === true || verificarNumeroMarujos >= 10){
    alert("Provisões suficientes. Rumo ao horizonte!")
  }else{
    alert("Tripulação insuficiente. Reforçar mantimentos antes de zarpar.")
  }
}
console.log(diaDeEvento)
return (
    <div id="container">
    <h2>Ex.9 - Capitão Ganso</h2>
    <label htmlFor="i-marujos">Quantidade de marujos: </label>
    <input id="i-marujos" value={numeroMarujos}
    onChange={(e) => setNumeroMarujos(e.target.value)}
    type="number" />
    <select id="selectEvento"
    onChange={(e) => setDiaDeEvento(e.target.value)}
    defaultValue={"false"} >
      <option value="true">É dia de Evento</option>
      <option value="false">Não é dia de Evento</option>
    </select>
    <button onClick={PodeZarpar}>Podemos Zarpar?</button>
    </div>
  )

}

export default App
