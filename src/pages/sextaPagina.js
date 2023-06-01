
import styles from '../styles/PrimeiraPagina.module.css'
import style from "../styles/MainPage.module.css"
import Navbar from './header/navbar'
import { Container, Box, Button } from '@mui/material'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import Link from 'next/link';
import Image from 'next/image'

import img13 from '../../public/img13.webp'
import img14 from '../../public/img14.webp'
import img15 from '../../public/img15.webp'


function Content(){
    return(
        <>
        <Navbar/>
        <Box className={styles.page1}>
          <Container  className={styles.Container} >
            <h4 className={styles.h4}>A Lei do Fechamento</h4>
            <div className={styles.bodyText}>
            Muitas vezes, o nosso cérebro não precisa de uma informação completa para atribuir determinada forma a um objeto. Observe:
            </div>
            <Image
              src={img13}
              width={680}
              height={500}
              alt="Blocos redondos e retangulares"
              className={styles.img}
            />
        
            <div className={styles.bodyText}>
            É normal a visualização de um quadrado na parte central da imagem acima. Mas perceba que não existe um fechamento para esse quadrado. O seu cérebro o está completando por conta própria. <br/><br/>
            É comum a utilização dessa lei em ícones de aplicativos e logomarcas, como nos exemplos abaixo:
            </div>
            <Image
              src={img14}
              width={680}
              height={500}
              alt="Blocos redondos e retangulares"
              className={styles.img}
            />
            <div className={styles.bodyText}>
            O ideal é utilizar essa lei para simplificar informações. O seu usuário não precisa de ícones complexos para entender a mensagem que você deseja passar. <br/>
            Exemplo:
            </div>
            <Image
              src={img15}
              width={680}
              height={500}
              alt="Blocos redondos e retangulares"
              className={styles.img}
            />
          </Container>
          <Button 
              className={style.button}
              endIcon={< ArrowForwardIcon />}>
              <Link
              href="/setimaPagina"
              className={style.color}
              >
                Continuar
            </Link>
          </Button>

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