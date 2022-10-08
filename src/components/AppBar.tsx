import { AppBar as MUIAppBar, IconButton, Toolbar, Typography } from '@mui/material';
import word from '@/const/word';
import MuiAppBar, { AppBarProps as MuiAppBarProps } from '@mui/material/AppBar';
import { AnimatePresence, motion } from 'framer-motion';
interface AppBarProps {
  open?: boolean;
  handleDrawerOpen: () => void;
}
const Path = (props: any) => (
  <motion.path fill='transparent' strokeWidth='3' stroke='hsl(0, 0%, 18%)' strokeLinecap='round' {...props} />
);
const AppBar = (props: AppBarProps) => {
  return (
    <MuiAppBar position='static' sx={{ zIndex: 3000 }}>
      <Toolbar>
        <IconButton
          size='large'
          edge='start'
          color='inherit'
          aria-label='menu'
          sx={{ mr: 2 }}
          onClick={props.handleDrawerOpen}
        >
          <svg width='23' height='23' viewBox='0 0 23 23'>
            <Path
              variants={{
                closed: { d: 'M 2 2.5 L 20 2.5' },
                open: { d: 'M 3 16.5 L 17 2.5' },
              }}
            />
            <Path
              d='M 2 9.423 L 20 9.423'
              variants={{
                closed: { opacity: 1 },
                open: { opacity: 0 },
              }}
              transition={{ duration: 0.1 }}
            />
            <Path
              variants={{
                closed: { d: 'M 2 16.346 L 20 16.346' },
                open: { d: 'M 3 2.5 L 17 16.346' },
              }}
            />
          </svg>
        </IconButton>
        <motion.div
          variants={{
            open: {
              paddingLeft: '260px',
              transition: {
                type: 'spring',
                stiffness: 400,
                damping: 40,
              },
            },
            closed: {
              paddingLeft: '0px',
              transition: {
                delay: 0.7,
                type: 'spring',
                stiffness: 400,
                damping: 40,
              },
            },
          }}
        >
          <Typography variant='h6' component='div' sx={{ flexGrow: 1 }}>
            {word.PAGE_TITLE}
          </Typography>
        </motion.div>
      </Toolbar>
    </MuiAppBar>
  );
};

export default AppBar;
