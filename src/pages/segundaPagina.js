
import styles from '../../src/styles/PrimeiraPagina.module.css'
import style from '../../src/styles/MainPage.module.css'
import Navbar from './header/navbar'
import { Container, Box, Button } from '@mui/material'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import Link from 'next/link';
import Image from 'next/image'

import img4 from  '../../public/img4.webp'
import img5 from  '../../public/img5.webp'


function Content(){
    return(
        <>
        <Navbar/>
        <Box className={styles.page1}>
          <Container  className={styles.Container} >
            <h4 className={styles.h4}>A lei de Pregnância (Pragnanz)</h4>
            <div className={styles.bodyText}>
            Pragnanz é uma outra palavra proveniente do alemão e significa precisão, concisão. Portanto, a lei de Pregnância, também conhecida como a lei da simplicidade, diz que sempre tentaremos organizar a nossa percepção de maneira simples.<br/><br/>

            Independente de sua complexidade, imagens e objetos sempre serão interpretados da maneira mais simples possível. No caso do design de interfaces, isso pode significar dificuldade para que o usuário entenda o que precisa fazer em uma tela, caso ela contenha um grande número de informação. Observe a aplicação desse conceito nos exemplos:</div>
            <Image
            src={img4}
            width={680}
            height={500}
            alt="esqueleto de um site web"
            className={styles.img}
            />

            <div className={styles.bodyText}>
            Na interface genérica (e caótica) acima, não é difícil perceber a confusão que qualquer usuário poderia sentir para encontrar a principal ação que precisa realizar.
            </div>

            <Image
            src={img5}
            width={680}
            height={500}
            alt="Interface do duoling"
            className={styles.img}
            />

            <div className={styles.bodyText}>
            Já na interface do Duolingo, a quantidade reduzida de informações guiam o usuário diretamente para a ação principal do site.<br/><br/>

            Outros bons exemplos conhecidos dessa simplicidade que dá certo, são sites de busca como o Google, o Yahoo e o Bing.

            </div>

          </Container>

          <Button 
              className={style.button}
              endIcon={< ArrowForwardIcon />}>
              <Link
              href="/terceiraPagina"
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