import React from 'react';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';

const Layout = ({ children }) => (
  <div className="mx-4 my-3">
    <Header />
    {children}
    <Footer />
  </div>
);
 
export default Layout;