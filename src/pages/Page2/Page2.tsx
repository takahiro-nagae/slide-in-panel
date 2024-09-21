import React from 'react';
import Header from '../../components/Header/Header';

const Page2: React.FC = () => {
  return (
    <div>
      <Header />
      <h1>Page 2</h1>
      <p>This is the content of Page 2.</p>
      <p>
        <a href="/page1">Go to Page 1</a>
      </p>
      <p>
        <a href="http://example.com" target='_blank'>Go to example.com</a>
      </p>
    </div>
  );
};

export default Page2;