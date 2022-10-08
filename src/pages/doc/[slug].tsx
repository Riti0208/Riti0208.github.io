import React, { useEffect, useRef, useState } from 'react';
import type { InferGetStaticPropsType, NextPage } from 'next';
import { Box } from '@mui/material';
import { motion } from 'framer-motion';
import { markdownToHtml, parseReact } from '@/lib/markdown';
import { getAllPosts, getPostBySlug } from '@/lib/api';
import { styled } from '@mui/material/styles';
import { TableOfContents } from '@/components/TableOfContents';

type Props = InferGetStaticPropsType<typeof getStaticProps>;

const MDBox = styled(Box)(() => ({
  backgroundColor: '#FFFFFF',
  borderRadius: '40px',
  padding: '20px 5px 50px 50px',
  '& code': {
    backgroundColor: '#AAAAAA',
    padding: '3px',
    fontFamily: 'Kosugi Maru',
    borderRadius: '5px',
  },
  '& p': {
    fontFamily: 'Kosugi Maru',
    lineHeight: '25px',
  },
  '& h1,h2,h3,h4,h5,h6': {
    textDecoration: 'underline',
  },
}));

export const getStaticPaths = async () => {
  const posts = getAllPosts(['slug']);

  return {
    paths: posts.map((post) => {
      return {
        params: {
          slug: post.slug,
        },
      };
    }),
    fallback: false,
  };
};

export const getStaticProps = async ({ params }: any) => {
  const post = getPostBySlug(params.slug, ['slug', 'title', 'description', 'thumbPath', 'date', 'tags', 'content']);
  // ここで変換
  const content = await markdownToHtml(post.content);

  // 変換結果をpropsとして渡す
  return {
    props: {
      post: {
        ...post,
        content,
      },
    },
  };
};

const Post: NextPage<Props> = ({ post }) => {
  const boxRef = useRef(null);
  const [heads, setHeads] = useState<any[] | null>(null);
  useEffect(() => {
    const current: any = boxRef.current;
    if (current) {
      const childNodes = current.childNodes;
      if (childNodes) {
        let headerNodes = [];
        for (let i = 0; i < childNodes.length; i++) {
          if (['H1', 'H2', 'H3', 'H4', 'H5', 'H6'].includes(childNodes[i].nodeName)) {
            headerNodes.push(childNodes[i]);
          }
        }
        headerNodes.forEach((node, index) => {
          node.innerHTML += `<a id="head${index}"></a>`;
        });
        setHeads(headerNodes);
      }
    }
  }, [boxRef]);
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ ease: 'easeOut', duration: 1 }}
    >
      <Box display='flex' sx={{ justifyContent: 'center' }}>
        <MDBox ref={boxRef}>{parseReact(post.content)}</MDBox>
      </Box>
      <TableOfContents heads={heads} />
    </motion.div>
  );
};

export default Post;
