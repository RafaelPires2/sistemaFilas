import { useState } from 'react';
import styles from './Button.module.css';
import { ModalCadastro } from './ModalCadastro';
import { App } from '../App';





export function Button({ chamarSenha,  handleOpenModal}) {



    return (
        <div>
            <button type="button" className={styles.buttonRetirar} onClick={handleOpenModal}> Novo Paciente</button>
            <button type="button" className={styles.buttonChamar} onClick={chamarSenha}> Chamar Senha</button>
        </div>
    )
}