
import styles from '../styles/PrimeiraPagina.module.css'
import style from "../styles/MainPage.module.css"
import Navbar from './header/navbar'
import { Container, Box, Button } from '@mui/material'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import Link from 'next/link';
import Image from 'next/image'

import img16 from '../../public/img16.webp'
import img14 from '../../public/img14.webp'
import img15 from '../../public/img15.webp'


function Content(){
    return(
        <>
        <Navbar/>
        <Box className={styles.page1}>
          <Container  className={styles.Container} >
            <h4 className={styles.h4}>Lei do Destino Comum</h4>
            <div className={styles.bodyText}>
            Nós também costumamos perceber objetos que “andam” em conjunto e possuem um mesmo destino, como pertencentes a um mesmo grupo. Um exemplo comum dessa lei aplicada a interfaces, são e-commerces.
            </div>
            <Image
              src={img16}
              width={680}
              height={500}
              alt="Blocos redondos e retangulares"
              className={styles.img}
            />
        
            <div className={styles.bodyText}>
            Quando o usuário está passeando por uma loja online e decide comprar mais de um item, ele começa a adicionar os objetos desejados em uma lista de desejos ou em um carrinho virtual.<br/><br/>

            Essa lei também pode ser aplicada quando você oferece a opção de selecionar muitos itens para realizar uma ação em comum com eles, como excluir muitos e-mails de uma só vez.
            </div>
          </Container>
          <Button 
              className={style.button}
              endIcon={< ArrowForwardIcon />}>
              <Link
              href="/conclusao"
              className={style.color}
              >
                Conclusão
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