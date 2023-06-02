import { Container, Box, Button } from '@mui/material'
import styles from '../../src/styles/PrimeiraPagina.module.css'
import style from '../../src/styles/MainPage.module.css'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import Link from 'next/link';
import Image from 'next/image'
import Navbar from './header/navbar'
import img1 from '../../public/Planta.webp'
import img2 from '../../public/Spotify.webp'
import img3 from  '../../public/img3.webp'

export default function Home() {
    return (
      <>
        <Navbar/>
        <Box className={styles.page1}>
          <Container  className={styles.Container} >
            <h4 className={styles.h4}>Figura-fundo (figure-ground)</h4>
            <div className={styles.bodyText}>
              É a maneira como organizamos a nossa percepção do que está sendo visto em primeiro plano e em segundo plano. Veja alguns exemplos:
            </div>
            <Image
            src={img1}
            width={680}
            height={500}
            alt="Imagem de Folha com fundo desfocado"
            className={styles.img}
            />
            <div className={styles.bodyText}>
              Na imagem acima, você consegue distinguir facilmente a folha, que está em primeiro plano, da imagem embaçada de um arvoredo, em segundo plano.
            </div>
            <Image
            src={img2}
            alt="Logo do Spotify"
            width={680}
            height={500}
            className={styles.img}
            />
            <div className={styles.bodyText}>
              Da mesma forma, podemos perceber claramente a diferença entre a logo do Spotify e o plano de fundo preto, na tela de carregamento acima.<br/><br/>

              Objetos em primeiro plano, estarão automaticamente em destaque. Já o segundo plano pode ser ilimitado (como o plano de fundo preto da tela do Spotify) ou vagamente definido (como o arvoredo embaçado no fundo do primeiro exemplo).

              <br/><br/>Um outro exemplo comum da aplicação da Figura-Fundo em uma interface, é uma notificação sobrepondo o conteúdo de uma tela.

            </div>
            <Image
            src={img3}
            alt="Esqueleto de uma aplicação mobile "
            width={680}
            height={500}
            className={styles.img}
            />
          </Container>

          <Button 
              className={style.button}
              endIcon={< ArrowForwardIcon />}>
              <Link
              href="/segundaPagina"
              className={style.color}
              >
                Continuar
            </Link>
          </Button>

        </Box>
      </>
    )
  }