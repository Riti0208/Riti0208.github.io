import * as React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@mui/material';
import { useRouter } from 'next/router';

const variants = {
  open: {
    y: 0,
    opacity: 1,
    transition: {
      y: { stiffness: 1000, velocity: -100 },
    },
  },
  closed: {
    y: 50,
    opacity: 0,
    transition: {
      y: { stiffness: 1000 },
    },
  },
};

interface MenuItemPops {
  title: string;
  path: string;
  icon: React.ReactNode;
}

export const MenuItem = (props: MenuItemPops) => {
  const router = useRouter();
  return (
    <motion.li variants={variants} whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }} className='navigation'>
      <Button
        variant='contained'
        fullWidth
        sx={{ zIndex: 100 }}
        onClick={() => {
          router.push(props.path);
        }}
      >
        {props.title}
      </Button>
    </motion.li>
  );
};
