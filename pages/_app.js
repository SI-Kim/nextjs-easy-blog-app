import Header from "../layouts/Header";
import Footer from "../layouts/Footer";
import Sidebar from "../layouts/Sidebar";
import styles from "../styles/layouts.module.css";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Header />
      <Component {...pageProps} className={styles.main} />
      <Sidebar />
      <Footer />
    </>
  );
}

export default MyApp;
