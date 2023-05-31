
import styles from '../styles/PrimeiraPagina.module.css'
import style from "../styles/MainPage.module.css"
import Navbar from './header/navbar'
import { Container, Box, Button } from '@mui/material'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import Link from 'next/link';
import Image from 'next/image'

import img6 from '../../public/img6.webp'
import img7 from '../../public/img7.webp'


function Content(){
    return(
        <>
        <Navbar/>
        <Box className={styles.page1}>
          <Container  className={styles.Container} >
            <h4 className={styles.h4}>A lei da similaridade</h4>
            <div className={styles.bodyText}>
            É comum que o nosso cérebro busque por padrões. Por causa disso, acabamos por interpretar objetos semelhantes como pertencentes a um mesmo grupo. Veja:<br/>
            </div>
            <Image
              src={img6}
              width={680}
              height={500}
              alt="Blocos de texto"
              className={styles.img}
            />
            <div className={styles.bodyText}>
              Apenas a mudança de cor entre os quadrados da imagem acima é suficiente para passar a sensação de que eles não pertencem ao mesmo grupo ou não possuem o mesmo significado.<br/><br/>
              Se estivesse definido que, por exemplo, cada quadrado representa um aluno em uma sala de aula, eu poderia dizer que os quadrados em amarelo estão representando alunos que preferem matemática, enquanto os quadrados da cor laranja representam os alunos que preferem português.<br/><br/>
              Para que essa sensação seja causada, basta que alguma diferença seja percebida entre os elementos. Ao invés de cores diferentes, os quadrados poderiam ter tamanhos diferentes, por exemplo. Veja este conceito aplicado a uma interface:<br/><br/>
            </div>
            <Image
              src={img7}
              width={680}
              height={500}
              alt="Interface do Banco Inter"
              className={styles.img}
            />
            <div className={styles.bodyText}>
            Na primeira tela, do Banco Inter, o menu é um conjunto. Mas observe que o item “O Inter”, quando selecionado, possui um fundo acinzentado, que se destaca das outras opções. Isso mostra ao usuário que aquela é a opção do menu que ele está navegando.<br/><br/>
            Já na segunda tela, do Mercado Livre, a oferta que o usuário está selecionando se torna maior em comparação as outras, desbloqueando informações adicionais sobre o produto de interesse.
            </div>
          </Container>

          <Button 
              className={style.button}
              endIcon={< ArrowForwardIcon />}>
              <Link
              href="/quartaPagina"
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