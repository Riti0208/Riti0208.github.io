import React from 'react';
import type { NextPage, InferGetStaticPropsType } from 'next';
import { Box } from '@mui/material';
import CardMenu from '@/components/CardMenu';
import { motion } from 'framer-motion';
import { getAllPosts } from '@/lib/api';

type Props = InferGetStaticPropsType<typeof getStaticProps>;

export const getStaticProps = async () => {
  const allPosts = getAllPosts(['slug', 'title', 'description', 'thumbPath', 'date', 'tags', 'content']);
  return {
    props: { allPosts },
  };
};

const Home: NextPage<Props> = ({ allPosts }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ ease: 'easeOut', duration: 1 }}
    >
      <Box
        sx={{
          padding: 0,
          display: 'flex',
          justifyContent: 'center',
        }}
      >
        <CardMenu
          pageList={allPosts.map((post) => {
            return {
              title: post.title,
              description: post.description,
              thumbPath: post.thumbPath,
              slug: post.slug,
            };
          })}
        />
      </Box>
    </motion.div>
  );
};

export default Home;
