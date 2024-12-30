import Header from './Header';
import Footer from './Footer';

import React, { ReactNode } from 'react';

interface LayoutProps {
  children: ReactNode;  // Spécifie que `children` peut être n'importe quel élément React
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="layout">
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
