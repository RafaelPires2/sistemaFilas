import styles from './ModalCadastro.module.css';
import { X, Check } from "phosphor-react";
import style from './Button.module.css';
import { useState } from 'react';
import { App } from '../App'


export function ModalCadastro({ handleCloseModal, salvarPaciente, setName, setSala }) {
  

  return (
    <>
      <div className={styles.modal}>
        <div className={styles.header}>
          <h1>Cadastre um novo paciente</h1>
          <X className={style.btnClose} onClick={handleCloseModal} />
        </div>
        <form>
          <label htmlFor="nome">Nome Paciente:</label>
          <input type="text" onChange={(e) => setName(e.target.value)} />

          <label htmlFor="sala">Sala Atendimento:</label>
          <input type="text" onChange={(e) => setSala(e.target.value)} />
        </form>
        <Check onClick={salvarPaciente} className={style.btnSalvar} />
      </div>
    </>
  )
}

