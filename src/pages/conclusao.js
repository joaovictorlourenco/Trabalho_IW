
import styles from '../../src/styles/PrimeiraPagina.module.css'
import style from '../../src/styles/MainPage.module.css'
import Navbar from './header/navbar'
import { Container, Box, Button } from '@mui/material'
// import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
// import Link from 'next/link';
// import Image from 'next/image'


function Content(){
    return(
        <>
        <Navbar/>
        <Box className={styles.page1}>
          <Container  className={styles.Container} >
            <h4 className={styles.h4}>Conclusão</h4>
            <div className={styles.bodyText}>
            As Leis Gestalt surgem no design de interfaces como uma ferramenta capaz de auxiliar no entendimento, nas tomadas de decisões e interpretações difíceis de uma tela. <br/><br/>

            A partir da aplicação dos conceitos vistos neste artigo, torna-se possível melhorar interfaces, guiando o usuário nas tarefas que ele precisa realizar e transmitindo, da melhor forma possível, as nossas intenções como designers.<br/><br/>

            É claro que quando se trata dos usuários e suas diferentes percepções, as coisas podem se tornar imprevisíveis e jamais podemos assumir que sabemos de tudo. Por causa disso, testes de usabilidade nunca são desnecessários ou substituíveis.<br/><br/>
            </div>
          </Container>
        </Box>
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