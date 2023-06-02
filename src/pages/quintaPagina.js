
import styles from '../../src/styles/PrimeiraPagina.module.css'
import style from '../../src/styles/MainPage.module.css'
import Navbar from './header/navbar'
import { Container, Box, Button } from '@mui/material'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import Link from 'next/link';
import Image from 'next/image'

import img11 from '../../public/img11.webp'
import img12 from '../../public/img12.webp'


function Content(){
    return(
        <>
        <Navbar/>
        <Box className={styles.page1}>
          <Container  className={styles.Container} >
            <h4 className={styles.h4}>Lei da Simetria</h4>
            <div className={styles.bodyText}>
            O conceito de que simetria é sinônimo de beleza já é bem popular. Mas, segundo a Gestalt, a simetria também pode trazer outras vantagens visuais.
            </div>
            <Image
              src={img11}
              width={680}
              height={500}
              alt="Blocos redondos e retangulares"
              className={styles.img}
            />
        
            <div className={styles.bodyText}>
            Além de visualmente agradáveis, os elementos simétricos são harmoniosos e, portanto, de mais fácil interpretação. Isso não significa que a sua interface precisa ser 100% simétrica — até porque, poucas realmente são. Mas é necessário entender a importância da simetria para utilizá-la a seu favor<br/>
            </div>
            <Image
              src={img12}
              width={680}
              height={500}
              alt="Blocos redondos e retangulares"
              className={styles.img}
            />
            <div className={styles.bodyText}>
            Um elemento assimétrico pode se destacar em meio a uma interface simétrica. Esse elemento em destaque, poderia ser um botão Call to Action, por exemplo. Com criatividade é possível sair do óbvio, mas sempre tomando o cuidado necessário para manter uma boa usabilidade e a harmonia do projeto
            </div>
            {/* <Image
              src={img10}
              width={680}
              height={500}
              alt="Blocos redondos e retangulares"
              className={styles.img}
            /> */}
              <div className={styles.bodyText}>
                Na lista acima, por exemplo, um pedaço do último título à direita foi colocado ali propositalmente. Isso indica ao usuário que existem mais itens naquela lista, “Quem matou Sara?” não é o último.<br/><br/>
                Sem aquela pequena parte do próximo título da lista, o usuário poderia ter uma ilusão de completude e, nesse caso, o conteúdo adicional jamais seria descoberto.
            </div>
          </Container>

          <Button 
              className={style.button}
              endIcon={< ArrowForwardIcon />}>
              <Link
              href="/sextaPagina"
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