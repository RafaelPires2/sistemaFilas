import styles from './ModalCadastro.module.css';
import { X } from "phosphor-react";
import style from './Button.module.css';

export function ModalCadastro({handleCloseModal}){ 

    return (
    <>
    <div className={styles.modal}>
      <div className={styles.header}>
        <h1>Cadastre um novo paciente</h1>
        <X className={style.btnClose} onClick={handleCloseModal}/>
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

