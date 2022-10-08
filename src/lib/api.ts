import fs from 'fs';
import { join } from 'path';
import matter from 'gray-matter';

// postsが格納されているディレクトリを取得する
// memo: process.cwd() はカレントディレクトリ
const postsDirectory = join(process.cwd(), 'content');

// posts配下にあるディレクトリ名(slug)をすべて取得する
export const getPostSlugs = () => {
  // まずはファイル名、ディレクトリ名を両方取得する
  const allDirents = fs.readdirSync(postsDirectory, { withFileTypes: true });
  // ディレクトリ名のみに絞り込んで返す
  return allDirents.filter((dirent) => dirent.isDirectory()).map(({ name }) => name);
};

/**
 * 与えられたslugから記事の内容を取得して返す
 * @param slug
 * @param fields 取得したい値 (slug | title | description | thumbPath | date | tags)
 */
export const getPostBySlug = (slug: string, fields: string[] = []) => {
  // ファイルを読み込む
  const fullPath = join(postsDirectory, slug, 'index.md');
  const fileContents = fs.readFileSync(fullPath, 'utf8');
  const { data, content } = matter(fileContents);
  type Item = {
    slug: string;
    content: string;
    title: string;
    date: string;
    description: string;
    thumbPath: string;
    tags: string[];
  };

  const items: Item = {
    slug: '',
    content: '',
    title: '',
    date: '',
    description: '',
    thumbPath: '',
    tags: [],
  };

  // 指定された値を取得してくる
  // memo: slugが指定されたとき、contentが指定されたとき、frontmatterの中身が指定されたときで返却の仕方が異なる
  fields.forEach((field) => {
    if (field === 'slug') {
      items[field] = slug;
    }
    if (field === 'content') {
      items[field] = content;
    }

    if (field == 'title' || field == 'date' || field == 'tags' || field == 'description' || field == 'thumbPath') {
      items[field] = data[field];
    }
  });

  return items;
};

/**
 * すべての記事から指定したfieldsの値を取得する
 * @param fields 取得したい値 (slug | title | description | thumbPath | date | tags)
 */
export const getAllPosts = (fields: string[] = []) => {
  const slugs = getPostSlugs();
  const posts = slugs
    .map((slug) => getPostBySlug(slug, fields))
    .sort((a, b) => {
      // 辞書順ソート
      // 目的に応じて、日付順などでソートしてもよい
      const dateA = a.date;
      const dateB = b.date;

      if (dateA < dateB) {
        return 1;
      } else {
        dateB < dateA;
      }

      return dateA <= dateB ? 1 : -1;
    });

  return posts;
};
