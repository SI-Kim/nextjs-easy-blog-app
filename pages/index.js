import Link from 'next/link';
import Header from '../layouts/Header';
import Footer from '../layouts/Footer';
import Sidebar from '../layouts/Sidebar';
import Main from '../layouts/Main';

export default function Home() {
  return (
    <>
      <Header />
      <Main/>
      <Sidebar/>
      <Footer />
      
    </>
  )
}
