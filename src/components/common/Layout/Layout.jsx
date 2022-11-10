import { Navbar, Footer } from '@components/common';
import Background from './Background';

const Layout = ({ children }) => {
  return (
    <>
      <Background />
      <div className="relative z-10">
        <Navbar />
        <div>{children}</div>
        <Footer />
      </div>
    </>
  );
};

export default Layout;
