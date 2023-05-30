import styles from '../styles/SegundaPagina.module.css'



function Content(){
    return(
        <>
            <div>

                <h4>O que é Gestalt?</h4>

                <p> 
                    palavra Gestalt tem origem alemã e significa “forma”. Então, essa teoria da forma, como também é conhecida, nos diz que nosso cérebro sempre irá perceber um objeto como inteiro e completo, antes de distinguir suas partes separadamente.
                    De acordo com a Gestalt, a nossa percepção da soma dessas partes, sempre será diferente da percepção do inteiro. Um exemplo disso é a sensação de movimento que temos ao nos depararmos com luzes pisca pisca.
                </p>

            </div>
        </>
    )
}

export default function Home() {
    return (
      <>
       <section className={styles.page2}>
            <Content/>
       </section>
      </>
    )
  }