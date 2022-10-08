import React from 'react';
import Image from 'next/image';
import { Box, Modal } from '@mui/material';
import { motion } from 'framer-motion';
interface Props {
  src: string;
  alt: string;
  width: number;
  height: number;
}
const CustomImage = (props: Props) => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  return (
    <>
      <Box component='span' onClick={handleOpen}>
        <img src={props.src} width={props.width} height={props.height} alt={props.alt} />
      </Box>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby='modal-modal-title'
        aria-describedby='modal-modal-description'
      >
        <Box
          onClick={() => {
            handleClose();
          }}
          display='flex'
          sx={{ width: '100%', height: '100%', justifyContent: 'center', alignItems: 'center' }}
        >
          <motion.div
            style={{
              display: 'flex',
              borderRadius: '10px',
              height: '80%',
              padding: '5px 7px 5px 7px',
              backgroundColor: '#DDDDDD',
              justifyContent: 'center',
              alignItems: 'center',
            }}
            initial={{ opacity: 0, scale: 0 }}
            animate={{
              opacity: open ? 1 : 0,
              scale: open ? 1 : 0,
            }}
          >
            <img src={props.src} height='99%' />
          </motion.div>
        </Box>
      </Modal>
    </>
  );
};
export default CustomImage;
