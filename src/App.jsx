import { useState } from "react"
import global from './Global.module.css';
import styles from './Wrapper.module.css';

import { dadosPacientes } from "./components/dadosPacientes"
import { Button } from './components/Button';
import { Painel } from './components/Painel';
import { ModalCadastro } from "./components/ModalCadastro";



export function App(){
  const [indexPacienteAtual, setIndexPacienteAtual] = useState(0)
  const [isOpenModal, setIsOpenModal] = useState(false)


   function handleOpenModal(){
  setIsOpenModal(true)
  }
    
  function handleCloseModal(){
   setIsOpenModal(false)
  }
  
  const pacientesAnteriores = dadosPacientes.filter( (_, index) => {
    const a = indexPacienteAtual - 3
    return index >= a && index < indexPacienteAtual
  })
  
  function chamarSenha() {
  
    if(indexPacienteAtual === dadosPacientes.length - 1) return;
    setIndexPacienteAtual(indexPacienteAtual + 1)
  }
  
    if(isOpenModal === true){

      return(
      
        <div className={styles.wrapper}>
          <Painel pacienteAtual={dadosPacientes.at(indexPacienteAtual)} pacientesAnteriores={pacientesAnteriores} />
          <Button chamarSenha={chamarSenha} handleOpenModal={handleOpenModal} />
          
          <ModalCadastro handleCloseModal={handleCloseModal} />
          
        </div>
      )
    } else {
      return(
      
        <div className={styles.wrapper}>
          <Painel pacienteAtual={dadosPacientes.at(indexPacienteAtual)} pacientesAnteriores={pacientesAnteriores} />
          <Button chamarSenha={chamarSenha} handleOpenModal={handleOpenModal} />          
        </div>
      )
    }
  }