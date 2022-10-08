import Document, { Head, Html, Main, NextScript } from 'next/document';

import theme from '@/const/theme';

export default class MyDocument extends Document {
  render() {
    return (
      <Html lang='ja'>
        <Head>
          <meta name='theme-color' content={theme.palette.primary.main} />
          <link rel='stylesheet' href='https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap' />
          <link href='https://fonts.googleapis.com/css2?family=Kosugi+Maru&display=swap' rel='stylesheet' />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
