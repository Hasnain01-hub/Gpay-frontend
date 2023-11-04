/* eslint-disable @next/next/no-sync-scripts */
import Document, { Html, Head, Main, NextScript } from 'next/document';
import Script from 'next/script';

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html lang="en">
        <Head>
          <Script
            src="https://code.jquery.com/jquery-3.5.1.min.js"
            strategy="beforeInteractive"
          />
        </Head>
        <body>
          <Main />
          <NextScript />

          <Script
            src="/js/bootstrap.min.js"
            strategy="afterInteractive"
            noModule
          />

          <Script
            src="/js/main.js"
            strategy="afterInteractive"
            noModule
          />

          <Script
            src="/js/owl.carousel.min.js"
            strategy="afterInteractive"
            noModule
          />

          <Script
            src="/js/waypoints.min.js"
            strategy="afterInteractive"
            noModule
          />

          <Script
            src="/js/wow.js"
            strategy="afterInteractive"
            noModule
          />

          <Script
            src="/js/imagesloaded.pkgd.min.js"
            strategy="afterInteractive"
            noModule
          />

          <Script
            src="/js/venobox/venobox.js"
            strategy="afterInteractive"
            noModule
          />

          <Script
            src="/js/animated-text.js"
            strategy="afterInteractive"
            noModule
          />

          <Script
            src="/js/venobox/venobox.min.js"
            strategy="afterInteractive"
            noModule
          />

          <Script
            src="/js/jquery.meanmenu.js"
            strategy="afterInteractive"
            noModule
          />

          <Script
            src="/js/jquery.scrollUp.js"
            strategy="afterInteractive"
            noModule
          />

          <Script
            src="/js/theme.js"
            strategy="afterInteractive"
            noModule
          />

          <Script
            src="/js/jquery.counterup.min.js"
            strategy="afterInteractive"
            noModule
          />

          <Script
            src="/js/range.js"
            strategy="afterInteractive"
            noModule
          />

          <Script
            src="/js/jquery.barfiller.js"
            strategy="afterInteractive"
            noModule
          />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
