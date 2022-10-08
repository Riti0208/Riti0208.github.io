import * as React from 'react';
import { AppProps } from 'next/app';
import '@/styles/globals.css';
import AppBar from '@/components/AppBar';
import { Box, ThemeProvider } from '@mui/material';
import { useRef } from 'react';
import theme from '@/const/theme';
import { AnimatePresence, useCycle, motion } from 'framer-motion';
import { Navigation } from '@/components/Navigation';

const sidebar = {
  open: (height = window.innerHeight) => ({
    height: height,
    clipPath: `circle(${height * 2 + 200}px at 35px 30px)`, //`circle(${height * 2 + 200}px at 35px 30px)`,
    transition: {
      type: 'spring',
      stiffness: 20,
      restDelta: 2,
    },
  }),
  closed: {
    height: '64px',
    clipPath: 'circle(25px at 35px 30px)',
    transition: {
      delay: 0.5,
      type: 'spring',
      stiffness: 400,
      damping: 40,
    },
  },
};

function MyApp({ Component, pageProps }: AppProps) {
  const [isOpen, toggleOpen] = useCycle(false, true);
  return (
    <ThemeProvider theme={theme}>
      <motion.nav initial={false} animate={isOpen ? 'open' : 'closed'}>
        <motion.div className='background' variants={sidebar} />
        <Navigation />
        <AppBar
          open={isOpen}
          handleDrawerOpen={() => {
            toggleOpen();
          }}
        />
      </motion.nav>
      <Box sx={{ padding: 5 }}>
        <Component {...pageProps} />
      </Box>
    </ThemeProvider>
  );
}

export default MyApp;
