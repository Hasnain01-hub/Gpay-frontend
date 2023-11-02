import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html lang="en">
        <Head>
          {/* <link rel="preconnect" href="https://fonts.gstatic.com" />
          <link
            href="https://fonts.googleapis.com/css2?family=Rubik:ital,wght@0,400;0,500;0,600;0,700;1,300&display=swap"
            rel="stylesheet"
          /> */}
          <script src="https://code.jquery.com/jquery-3.5.1.min.js"></script>

          <script src="js/bootstrap.min.js"></script>
          <script src="js/main.js"></script>

          <script src="js/owl.carousel.min.js"></script>

          <script src="js/waypoints.min.js"></script>

          <script src="js/wow.js"></script>

          <script src="js/imagesloaded.pkgd.min.js"></script>

          <script src="js/venobox/venobox.js"></script>

          <script src="js/ajax-mail.js"></script>

          <script src="js/animated-text.js"></script>

          <script src="js/venobox/venobox.min.js"></script>

          <script src="js/jquery.meanmenu.js"></script>

          <script src="js/jquery.scrollUp.js"></script>

          <script src="js/theme.js"></script>

          <script src="js/jquery.counterup.min.js"></script>

          <script src="js/range.js"></script>

          <script src="js/jquery.barfiller.js"></script>
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
