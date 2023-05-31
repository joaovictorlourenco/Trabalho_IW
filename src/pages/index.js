import Link from 'next/link';
import { Box, Button } from '@mui/material';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import Navbar from './header/navbar'
import style from "../styles/MainPage.module.css"


function MainPage(){

  return(

    <>
      <section>
          <Box height="calc(100vh - 64px)" display="flex" flexDirection="column" sx={{ bgcolor: '#252525', color: 'whitesmoke', justifyContent: 'center', alignItems: 'center' }}>
            <h1 className={style.h1}>Teoria das Formas </h1>
            <h3 className={style.h3}>As Leis da Gestalt</h3>
            <Button 
              className={style.button}
              endIcon={< ArrowForwardIcon />}>
              <Link
              href="/primeiraPagina"
              className={style.color}
              >
                Vamos Começar
            </Link>
            </Button>
          </Box>
      </section>
    </>
    
  )

}

export default function Home() {
  return (
    <>
      <Navbar/>
      <main>
        <MainPage/>
      </main>
    </>
  )
}
