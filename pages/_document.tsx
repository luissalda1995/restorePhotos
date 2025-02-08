import Document, { Head, Html, Main, NextScript } from 'next/document';

class MyDocument extends Document {
  render() {
    return (
      <Html lang='es'>
        <Head>
          <link rel='icon' href='/favicon.ico' />
          <meta
            name='description'
            content='Restaura tus fotos antiguas y conserva tus recuerdos.'
          />
          <meta property='og:site_name' content='restorePhotos.io' />
          <meta
            property='og:description'
            content='Restaura tus fotos antiguas y conserva tus recuerdos.'
          />
          <meta property='og:title' content='Face Photo Restorer' />
          <meta name='twitter:card' content='summary_large_image' />
          <meta name='twitter:title' content='Face Photo Restorer' />
          <meta
            name='twitter:description'
            content='Restaura tus fotos antiguas y conserva tus recuerdos.'
          />
          <meta
            property='og:image'
            content='https://restore-photos.vercel.app/og-image.png'
          />
          <meta
            name='twitter:image'
            content='https://restore-photos.vercel.app/og-image.png'
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
