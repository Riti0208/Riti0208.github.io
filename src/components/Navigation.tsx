import * as React from 'react';
import { motion } from 'framer-motion';
import { MenuItem } from './MenuItem';
import { Home, SportsEsports, ViewQuilt } from '@mui/icons-material';

const menuItems = [
  { title: 'ホーム', path: '/', icon: <Home /> },
  { title: '基本的な操作', path: 'doc/control', icon: <SportsEsports /> },
  { title: 'UE公式', path: 'https://www.unrealengine.com/ja', icon: <SportsEsports /> },
  { title: 'マーケットプレイス', path: 'https://www.unrealengine.com/marketplace/ja/store', icon: <SportsEsports /> },
];

const variants = {
  open: {
    transition: { staggerChildren: 0.07, delayChildren: 0.2 },
  },
  closed: {
    transition: { staggerChildren: 0.05, staggerDirection: -1 },
  },
};

export const Navigation = () => (
  <motion.ul variants={variants} className='navigation'>
    {menuItems.map((item, index) => (
      <MenuItem key={index} title={item.title} icon={item.icon} path={item.path} />
    ))}
  </motion.ul>
);
