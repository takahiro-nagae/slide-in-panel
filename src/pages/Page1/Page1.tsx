import React from 'react';
import Header from '../../components/Header/Header';

const Page1: React.FC = () => {
  return (
    <div>
      <Header />
      <h1>Page 1</h1>
      <p>This is the content of Page 1.</p>
      <p>
        <a href="/page2">Go to Page 2</a>
      </p>
      <p>
        <a href="http://example.com" target='_blank'>Go to example.com</a>
      </p>
    </div>
  );
};

export default Page1;