import React, { useState, useEffect } from 'react';
import styles from './ScrollToTop.module.css';
import Image from 'next/image';

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 100) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
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
    <a className={`${styles.scrollToTop} ${isVisible ? styles.visible : ''}`} onClick={scrollToTop}>
      <Image src="/house-moving-truck.svg" alt="Home" width={50} height={50} />
    </a>
  );
};

export default ScrollToTop;
