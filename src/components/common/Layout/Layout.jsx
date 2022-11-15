import { Navbar, Footer } from '@components/common';
import Background from './Background';

const Layout = ({ children }) => {
  return (
    <>
      <Background />
      <div className="relative z-10">
        <Navbar />
        <div className="container mx-auto max-w-[1169px]">{children}</div>
        <Footer />
      </div>
    </>
  );
};

export default Layout;
