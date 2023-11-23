import React from 'react';
import Header from './header';
import Footer from './footer';

type ExternalLayoutProps = {
  children?: React.ReactNode;
};

const ExternalLayout = ({ children }: ExternalLayoutProps) => {
  return (
    <div className='flex flex-col h-[100vh]'>
      <Header />
      {children}
      <div className='mt-auto'>
      <Footer />
      </div>
    </div>
  );
};

export default ExternalLayout;
