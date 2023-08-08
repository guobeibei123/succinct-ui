import React from 'react';
import ScrollToTop from '../index';

const App: React.FC = () => {
  return (
    <div style={{ height: '200px', }} >
      <span>点击返回顶部</span>
      <ScrollToTop showUnder={450} style={{
        position: 'relative',
        top: '100px',
        right: '0px',
        color: '#ffffff',
        backgroundColor: '#4994c4',
        width: '100px',
        height: '40px',
        margin: 0,
        padding: 0,
        border: 'none',
        outline: "none",
        borderRadius: '10px',
        fontSize: '18px',
        cursor: "pointer"
      }} />
    </div>
  );
};

export default App;
