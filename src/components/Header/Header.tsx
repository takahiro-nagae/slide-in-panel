import React from 'react';
import { Link } from 'react-router-dom';

const Header: React.FC = () => {
  if(window.parent !== window.self) {
    return null;
  }
  
  return (
    <header style={{ padding: '10px', backgroundColor: '#f8f9fa', borderBottom: '1px solid #dee2e6' }}>
      <nav>
        <Link to="/">Home</Link> | <Link to="/page1">Page 1</Link> | <Link to="/page2">Page 2</Link>
      </nav>
    </header>
  );
};

export default Header;