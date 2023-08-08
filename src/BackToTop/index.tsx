import React, { useState, useEffect } from 'react';

export interface ScrollToTopProps {
  /**
   * @description 向下滑动的值
   */
  showUnder?: number;
  /**
   * @description css样式
   */
  style: React.CSSProperties;
  /*
   * @description  onclick
   */
  onClick?: () => void;
}

const ScrollToTop: React.FC<ScrollToTopProps> = (props) => {
  const { showUnder, style } = props;
  const [isVisible, setIsVisible] = useState(false); // 按钮的显示隐藏条件
  const handleScroll = () => {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop; //获取当前的滚动距离
    const showUnderChange = showUnder !== undefined ? showUnder : 300; //showUnder 已定义，则 showUnderChange 等于 showUnder，否则等于 300。
    setIsVisible(scrollTop > showUnderChange); //当滚动高度大于设置的值时展示按钮
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div>
      {isVisible && (
        <button style={style} onClick={scrollToTop}>
          UP
        </button>
      )}
    </div>
  );
};

// 使用 defaultProps 可以为组件的属性设置默认值
ScrollToTop.defaultProps = {
  showUnder: 100,
  style: {
    position: 'fixed',
    bottom: '20px',
    right: '20px',
    cursor: 'pointer',
  },
};
export default ScrollToTop;