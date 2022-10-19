import styles from './ModalCadastro.module.css';
import { useState } from 'react';

export function ModalCadastro(){ 

    return (
    <>
    <div className={styles.modal}>
      <div>
      <h1>Cadastre um novo paciente</h1>
      
      </div>
      <form>
      <label htmlFor="nome">Nome Paciente:</label>
      <input type="text" />
    
      <label htmlFor="sala">Sala Atendimento:</label>
      <input type="text" />
      </form>
    </div>
    </>
    )
  }