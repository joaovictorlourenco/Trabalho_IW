
import styles from '../styles/PrimeiraPagina.module.css'
import style from "../styles/MainPage.module.css"
import Navbar from './header/navbar'
import { Container, Box, Button } from '@mui/material'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import Link from 'next/link';
import Image from 'next/image'

import img8 from '../../public/img8.webp'
import img9 from '../../public/img9.webp'
import img10 from '../../public/img9.webp'


function Content(){
    return(
        <>
        <Navbar/>
        <Box className={styles.page1}>
          <Container  className={styles.Container} >
            <h4 className={styles.h4}>Lei da Continuidade</h4>
            <div className={styles.bodyText}>
                Ainda com o intuito de relacionar objetos entre si, também podemos dispor esses objetos ao longo de linhas, sejam elas retas ou curvas. Isso passa a impressão visual de continuidade.
            </div>
            <Image
              src={img8}
              width={680}
              height={500}
              alt="Blocos redondos e retangulares"
              className={styles.img}
            />
        
            <div className={styles.bodyText}>
                Ao terminar de preencher o primeiro campo de um formulário bem construído, por exemplo, você dificilmente terá dúvidas sobre qual campo deverá ser preenchido em seguida, correto?<br/>
            </div>
            <Image
              src={img9}
              width={680}
              height={500}
              alt="Blocos redondos e retangulares"
              className={styles.img}
            />
            <div className={styles.bodyText}>
                Na interface da MaxMilhas, exemplificada acima, o usuário tende a preencher primeiro o campo “Origem”, seguido pelos campos “Destino”, “Ida” e “Volta”, respectivamente.<br/><br/>
                Além disso, você já deve ter visto objetos incompletos na sequência de alguma lista. A intenção é mostrar que existe uma continuidade de elementos.
            </div>
            <Image
              src={img10}
              width={680}
              height={500}
              alt="Blocos redondos e retangulares"
              className={styles.img}
            />
              <div className={styles.bodyText}>
                Na lista acima, por exemplo, um pedaço do último título à direita foi colocado ali propositalmente. Isso indica ao usuário que existem mais itens naquela lista, “Quem matou Sara?” não é o último.<br/><br/>
                Sem aquela pequena parte do próximo título da lista, o usuário poderia ter uma ilusão de completude e, nesse caso, o conteúdo adicional jamais seria descoberto.
            </div>
          </Container>

          <Button 
              className={style.button}
              endIcon={< ArrowForwardIcon />}>
              <Link
              href="/quintaPagina"
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