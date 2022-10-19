import styles from './Painel.module.css';

export function Painel({pacienteAtual, pacientesAnteriores}) {
 return (


  <div className={styles.container}>
    <main className={styles.painel}>
      <div className={styles.visor}>
        <div className={styles.senhaAtual}>Senha: {pacienteAtual ? pacienteAtual.senha : 0} </div>
        <div className={styles.nomeAtual}>{pacienteAtual ? pacienteAtual.name : "Retire sua senha"}</div>
        <div className={styles.salaAtual}>Sala:{pacienteAtual ? pacienteAtual.sala : 0}</div>
      </div>

      <div className={styles.painelAnterior}>

        {pacientesAnteriores.map((pacienteAnterior) => (
          <div key={Math.random()} className={styles.anterior}>
            <div className={styles.senhaAnterior}>Senha:{pacienteAnterior.senha}</div>
            <div className={styles.salaAnterior}>Sala:{pacienteAnterior.sala}</div>
          </div>
        ))}


      </div>

    </main>
  </div>
 )
}

