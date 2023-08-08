import React from 'react';
import ScrollToTop from '../index';

const App= () => {
  return (
    <div style={{ height: '100px' }}>
      <span>让滚动条飞一会</span>
      <ScrollToTop showUnder={400} style={{
        position: 'fixed',
        bottom: '100px',
        right: '20px',
        color: '#ffffff',
        backgroundColor: '#fd003d',
        width: '100px',
        height: '40px',
        margin: 0,
        padding: 0,
        border: 'none',
        outline: 'none',
        borderRadius: '10px',
        fontSize: '18px',
        cursor: 'pointer',
      }} />
    </div>
  );
};

export default App;
