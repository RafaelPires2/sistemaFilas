import { useState } from "react"
import global from './Global.module.css';
import styles from './Wrapper.module.css';

import { dadosPacientes } from "./components/dadosPacientes"
import { Button } from './components/Button';
import { Painel } from './components/Painel';
import { ModalCadastro } from "./components/ModalCadastro";
import { Img } from "./components/Img";



export function App(){
  const [indexPacienteAtual, setIndexPacienteAtual] = useState(0)
  const [isOpenModal, setIsOpenModal] = useState(false)
  const [name, setName] = useState('')
  const [sala, setSala] = useState('')
  const [id, setId] = useState(1)

 function idPaciente() {
  setId(id + 1)
 }

  function salvarPaciente() {
    dadosPacientes.push({senha: id, name: name, sala: sala})
    idPaciente()
    setIsOpenModal(false)
  }

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
          <Button chamarSenha={chamarSenha} handleOpenModal={handleOpenModal} salvarPaciente={salvarPaciente}/>
          
          <ModalCadastro handleCloseModal={handleCloseModal} salvarPaciente={salvarPaciente} setName={setName} setSala={setSala}/>
          <Img />
          
        </div>
      )
    } else {
      return(
      
        <div className={styles.wrapper}>
          <Painel pacienteAtual={dadosPacientes.at(indexPacienteAtual)} pacientesAnteriores={pacientesAnteriores} />
          <Button chamarSenha={chamarSenha} handleOpenModal={handleOpenModal} />          
          <Img />
        </div>
      )
    }
  }