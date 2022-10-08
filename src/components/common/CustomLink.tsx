import React from 'react';
import Link from 'next/link';

interface Props {
  children: string;
  href: string;
}
const CustomLink = (props: Props) => {
  const isMyPageLink = props.href.startsWith('/') || props.href === '';
  return isMyPageLink ? (
    <Link href={props.href}>
      <a>{props.children}</a>
    </Link>
  ) : (
    <a href={props.href} target='_blank' rel='noopener noreferrer'>
      {props.children}
    </a>
  );
};
export default CustomLink;
