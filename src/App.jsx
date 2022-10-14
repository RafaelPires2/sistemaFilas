import { useState } from "react"
import global from './Global.module.css';
import styles from './Wrapper.module.css';

import { dadosPacientes } from "./components/dadosPacientes"
import { Button } from './components/Button';
import { Painel } from './components/Painel';



export function App(){
    const [indexPacienteAtual, setIndexPacienteAtual] = useState(0)
  
    const pacientesAnteriores = dadosPacientes.filter( (_, index) => {
      const a = indexPacienteAtual - 3
      return index >= a && index < indexPacienteAtual
    })
  
    console.log(pacientesAnteriores)
    function chamarSenha() {
  
      if(indexPacienteAtual === dadosPacientes.length - 1) return;
      setIndexPacienteAtual(indexPacienteAtual + 1)
    }
  
    function retirarSenha() {
    }
  
    return(
  
    <div className={styles.wrapper}>
      <Painel pacienteAtual={dadosPacientes.at(indexPacienteAtual)} pacientesAnteriores={pacientesAnteriores} />
      <Button chamarSenha={chamarSenha} retirarSenha={retirarSenha}/>
    </div>
  
    )
  }