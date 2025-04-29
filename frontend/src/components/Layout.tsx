import React from 'react';
import Header24Jobs from './Header24Jobs';
import Footer24Jobs from './Footer24Jobs';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <>
      <Header24Jobs />
      <main>{children}</main>
      <Footer24Jobs />
    </>
  );
};

export default Layout; 