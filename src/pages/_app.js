import '@/styles/globals.css'
import Head from "next/head";
import { motion, AnimatePresence } from 'framer-motion';

import { Nunito } from 'next/font/google';

const nunito = Nunito({ subsets: ['latin'] });

export default function App({ Component, pageProps, router }) {
  return (
    <AnimatePresence mode="wait">
     <motion.div
        key={router.route}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5, ease: 'easeInOut' }}
      >
    <main className={nunito.className}>
      <Component {...pageProps} />
    </main>

      </motion.div>
    </AnimatePresence>
   

  )
}

