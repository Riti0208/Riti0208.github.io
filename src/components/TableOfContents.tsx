import * as React from 'react';
import { Box, List, ListItem, ListItemButton, ListItemText, Typography } from '@mui/material';
import { useIsSmall } from '@/lib/use-media-query';
import { motion, MotionStyle } from 'framer-motion';

const divStyle: MotionStyle = {
  position: 'fixed',
  right: '0px',
  top: '100px',
  backgroundColor: '#FFFFFF',
  width: '400px',
  padding: '0px',
  borderRadius: '20px 0px 0px 20px',
  boxShadow: '0px 2px 4px -1px rgb(0 0 0 / 20%), 0px 4px 5px 0px rgb(0 0 0 / 14%), 0px 1px 10px 0px rgb(0 0 0 / 12%)',
};

interface Props {
  heads: any[] | null;
}

const getMargin = (head: any) => {
  const tags = ['H1', 'H2', 'H3', 'H4', 'H5', 'H6'];
  const margins = ['0px', '20px', '40px', '60px', '80px', '100px'];
  const index = tags.findIndex((tag) => {
    return tag === head.nodeName;
  });
  if (index === -1) {
    return '0px';
  }
  return margins[index];
};

export const TableOfContents = (props: Props) => {
  const isSmall = useIsSmall();
  return (
    <motion.div style={divStyle} animate={isSmall ? { width: '400px', opacity: 1 } : { width: '0px', opacity: 0 }}>
      <Box
        display='flex'
        sx={{
          height: '64px',
          paddingLeft: '20px',
          alignItems: 'center',
          backgroundColor: '#616161',
          borderRadius: '20px 0px 0px 0px',
        }}
      >
        <Typography sx={{ color: '#FFFFFF' }}>目次</Typography>
      </Box>
      <Box>
        <List>
          {props.heads ? (
            props.heads.map((head, index) => {
              return (
                <ListItem key={index} sx={{ padding: 0 }}>
                  <ListItemButton
                    sx={{ paddingBottom: 0, paddingTop: 0 }}
                    onClick={() => {
                      const target = document.getElementById(`head${index}`);
                      if (target) {
                        target.scrollIntoView();
                      }
                    }}
                  >
                    <ListItemText
                      primary={head.textContent}
                      sx={{
                        marginLeft: getMargin(head),
                        '& .MuiTypography-root': {
                          fontSize: '16px',
                        },
                      }}
                    />
                  </ListItemButton>
                </ListItem>
              );
            })
          ) : (
            <></>
          )}
        </List>
      </Box>
    </motion.div>
  );
};
