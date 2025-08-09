import { useState } from 'react'
import './App.css'

function App() {
  let array = [3,6,9,12,15]
  let mix = ['Desmóteles', 2, 3.14, true]
  let mixDois = ['Taperebá', 'Graviola', 'Cupuaçu', 'Açai']
  const [min, setMin] = useState([]);
  const [max, setMax] = useState([]);
  let tempMin = min
  let tempMax = max
  
  // push add no fnl unshift no inc
  function add(){
    let numero = prompt('Digite um número')
    // array.push(Number(numero))
    array.unshift(Number(numero))
    console.table(array)
  }
  // pop rmv no final shift no inc
  function dlt(){
    // array.pop()
    array.shift()
    console.table(array)
  }
  // indexOf(), includes(), splice()
  function view(){
    console.log( mix.includes(3.14))
  }
  function index(){
    console.table(array)
    let obj = prompt("Digite um dos números disponíveis(conforme a tabela no console)")
    console.log(array.indexOf(Number(obj)))
    alert("Foi retornado a posição no array")
  }
  // splice(posição, quantidade_deletar, o_q_incluir) -> EDIT <-
  function splice(){
     let nome = prompt("Digite um nome criativo")
      mix.splice(4,0,nome)
      console.log(mix)
  }
  function map(){

    for(let i=0; i < mixDois.length; i++){
      console.log(mixDois[i])
    }

  }  

  //  const [auditoria, setAuditoria] = useState([0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0])
  // 08/08/2025 AULA DE ARRAY-03

  function gerar(){



      // let temp = auditoria
    // for(let i = 0; i<100000; i++){
    // let n = Math.round(Math.random() * (100 + 1))
    // temp[n]++
    // }

    // function gerar(min, max){
    // const minGerado = Math.ceil(min);
    // const maxGerado = Math.floor(max);
    // const n = Math.floor(Math.random() * (maxGerado - minGerado + 1) + minGerado)

    // Math.floor() - SEMPRE ARREDONDA PRA BAIXO              0-99
    // Math.ceil() - SEMPRE ARREDONTA PRA CIMA                1-100
    // Math.round() - ARREDONDA PARA O INTEIRO MAIS PRÓXIMO   0-100
    // setEstado(n)



    for(let i = 0; i < 30; i++){
    let n1 = Math.floor(Math.random() * 24 + 12)
    let n2 = Math.floor(Math.random() * 24 + 12)
        
    if(n1>n2){
    tempMax.push(n1)
    tempMin.push(n2)
    }else{
    tempMax.push(n2)
    tempMin.push(n1)
    }

    }
    console.table(tempMin)
    console.table(tempMax)

    setMax(tempMax)
    setMin(tempMin)
  }

  return (
    <>
    <h1>Abra o console</h1>
    <button onClick={add}>push-unshift</button>
    <button onClick={dlt}>pop-shift</button>
    <button onClick={view}>includes</button>
    <button onClick={index}>indexOf</button>
    <button onClick={splice}>splice</button>
    <button onClick={map}>for</button>
    <button onClick={gerar}>random-number-generator</button><br/>
    
    <div>
      {min.map((minima, index) => (
        <p key={index}>
          {minima}
        </p>
      ))}
    </div>

    </>
  )
}

export default App
