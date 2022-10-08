import * as React from 'react';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import IconButton, { IconButtonProps } from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import CardMenuItemProps from '@/inteface/CardMenuItemProps';
import { useRouter } from 'next/router';
import { motion } from 'framer-motion';

interface ExpandMoreProps extends IconButtonProps {
  expand: boolean;
}

const variants = {
  initial: { scale: 0, opacity: 0 },
  exit: { scale: 0 },
};

const CardMenuItem = (props: CardMenuItemProps) => {
  const [expanded, setExpanded] = React.useState(false);
  const router = useRouter();

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <motion.div
      variants={variants}
      initial='initial'
      animate='animate'
      exit='exit'
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      style={{ marginBottom: '20px', marginTop: '20px' }}
      whileInView={{ scale: 1, opacity: 1, transition: { duration: 0.5 } }}
      viewport={{ once: true }}
    >
      <Card
        onClick={() => {
          router.push(`/doc/${props.slug}`);
        }}
        sx={{ width: '345px', height: '400px', backgroundColor: '#FEFFFE', borderRadius: '30px', cursor: 'pointer' }}
      >
        <CardMedia
          component='img'
          height='200px'
          image={props.thumbPath.length == 0 ? '/images/no-image.png' : props.thumbPath}
        />
        <CardContent>
          <Typography gutterBottom variant='h5' component='div'>
            {props.title}
          </Typography>
          <Typography variant='body2' color='text.secondary'>
            {props.description}
          </Typography>
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default CardMenuItem;
