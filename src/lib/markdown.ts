import React from 'react';
import { unified, Plugin } from 'unified';
import remarkGfm from 'remark-gfm';
import remarkParse from 'remark-parse';
import remarkRehype from 'remark-rehype';
import rehypeStringify from 'rehype-stringify';
import rehypeParse from 'rehype-parse';
import rehypeReact from 'rehype-react';
import CustomLink from '@/components/common/CustomLink';
import CustomImage from '@/components/common/CustomImage';
// カスタムしたタグを作っている場合にはpタグで囲われてしまう問題があったので、pタグで囲わないように
const removeCustomElementParagraph: Plugin = () => {
  return (tree: any) => {
    const firstChildren = tree.children[0];
    if (firstChildren?.type === 'paragraph' && firstChildren?.children![0].type === 'html') {
      tree.children[0].type = 'html';
      tree.children[0].value = firstChildren.children.map((v: any) => v.value).join('');
    }
  };
};
// 既存のタグをカスタマイズしたタグに変更したり、オリジナルのタグをコンポーネントに変換する処理を行なっています
export const parseReact = (str: string) =>
  unified()
    .use(rehypeParse, { fragment: true })
    .use(rehypeReact, {
      passNode: true,
      Fragment: React.Fragment,
      createElement: React.createElement,
      components: {
        a: CustomLink,
        img: CustomImage,
      },
    } as any) // tyescriptの関係でanyにしないとエラーになったため
    .processSync(str).result;
// markdownの記述をHTMLに変換します
export const markdownToHtml = (markdown: string) =>
  unified()
    .use(remarkParse)
    .use(removeCustomElementParagraph)
    .use(remarkGfm)
    .use(remarkRehype, {
      allowDangerousHtml: true, // trueにしておくことで、自分でカスタマイスしたタグをそのまま吐き出してくれるようになります。
    })
    .use(rehypeStringify, {
      allowDangerousHtml: true,
    })
    .processSync(markdown).value as string;
