
import styles from '../styles/PrimeiraPagina.module.css'
import style from "../styles/MainPage.module.css"
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
            A Gestalt surge no design de interfaces como uma ferramenta capaz de auxiliar no entendimento do que pode estar ambíguo ou muito difícil de interpretar em uma tela. <br/><br/>

            A partir da aplicação dos conceitos vistos neste artigo, torna-se possível melhorar interfaces, guiando o usuário nas tarefas que ele precisa realizar e transmitindo, da melhor forma possível, as nossas intenções como designers.<br/><br/>

            É claro que quando se trata dos usuários e suas diferentes percepções, as coisas podem se tornar imprevisíveis e jamais podemos assumir que sabemos de tudo. Por causa disso, testes de usabilidade nunca são desnecessários ou substituíveis.<br/><br/>
            </div>
            {/* <Image
              src={img16}
              width={680}
              height={500}
              alt="Blocos redondos e retangulares"
              className={styles.img}
            /> */}
          </Container>
          {/* <Button 
              className={style.button}
              endIcon={< ArrowForwardIcon />}>
              <Link
              href="/conclusão"
              className={style.color}
              >
                Continuar
            </Link>
          </Button> */}
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