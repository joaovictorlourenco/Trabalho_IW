
import { Avatar, Toolbar, Box  } from '@mui/material';
import Link from 'next/link';
import Header from './head';

import style from "../../styles/MainPage.module.css"
export default function Navbar(){
    return(
      <>
      <Header/>
      <Toolbar sx={{ flexWrap: 'wrap', bgcolor: '#3a3838' }}>
          <Box sx={{ flexGrow: 1 }}>
            <Avatar alt="Remy Sharp" src="https://miro.medium.com/v2/resize:fit:1100/format:webp/1*ibzRFIPL3wL2-LuRUdOb2g.jpeg"/>
          </Box>
          <nav className={style.nav}>
            <Link
              href="/"
              className={style.tabLink}
            >
              
              Home
            </Link>
            <Link
              href="/primeiraPagina"
              className={style.tabLink}
            >
              Figura-fundo
            </Link>
            <Link
              className={style.tabLink}
              href="/segundaPagina"
            >
              Pragnanz
            </Link>
            <Link
              className={style.tabLink}
              href="#"
            >
              Similaridade
            </Link>
          </nav> 
        </Toolbar>
      </>
  
    )
  }