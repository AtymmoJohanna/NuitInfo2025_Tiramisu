// src/components/Layout.js
import React from 'react';

const Layout = ({ children }) => {
  return (
    <div className="h-screen flex bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 overflow-hidden">
      {children}
    </div>
  );
};

export default Layout;
