import styles from './Button.module.css';

export function Button({ chamarSenha, retirarSenha }) {
    return (
        <div>
            <button type="button" className={styles.buttonRetirar} onClick={retirarSenha}> Retirar Senha</button>
            <button type="button" className={styles.buttonChamar} onClick={chamarSenha}> Chamar Senha</button>
        </div>
    )
}