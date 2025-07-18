import './App.css'

function App() {
  let array = [3,6,9,12,15]
  let mix = ['Desmóteles', 2, 3.14, true]
  let mixDois = ['Taperebá', 'Graviola', 'Cupuaçu', 'Açai']
  
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
  return (
    <>
    <h1>Abra o console</h1>
    <button onClick={add}>push-unshift</button>
    <button onClick={dlt}>pop-shift</button>
    <button onClick={view}>includes</button>
    <button onClick={index}>indexOf</button>
    <button onClick={splice}>splice</button>
    <button onClick={map}>for</button>
    </>
  )
}

export default App
