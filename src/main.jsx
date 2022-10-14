import React, { useState } from 'react'
import ReactDOM from 'react-dom/client'
import global from './Global.module.css';
import { Painel } from './components/Painel';
import { Button } from './components/Button';
import styles from './Wrapper.module.css';
import { persons } from './components/chamarSenha'

function App(){
  const [indexPacienteAtual, setIndexPacienteAtual] = useState(0)

  const pacientesAnteriores = persons.filter( (_, index) => {
    const a = indexPacienteAtual - 3
     return index >= a && index < indexPacienteAtual
  })

  console.log(pacientesAnteriores)
  function chamarSenha() {

    if(indexPacienteAtual === persons.length - 1) return;
    setIndexPacienteAtual(indexPacienteAtual + 1)
  }

  function retirarSenha() {

  }

  return(

    <div className={styles.wrapper}>

    <Painel pacienteAtual={persons.at(indexPacienteAtual)} pacientesAnteriores={pacientesAnteriores} />
    <Button chamarSenha={chamarSenha} retirarSenha={retirarSenha}/>

  </div>

  )
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
