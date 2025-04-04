import { Link } from 'react-router-dom';
import styles from './Header.module.scss';
import React, { useState, useEffect } from 'react';

function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const handleScroll = () => {
    if (window.scrollY > 0) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header className={`${styles.header} ${isScrolled ? styles.active : ''}`}>
      <nav className={styles.navbar}>
        <Link to="/">Про мене</Link>
        <Link to="/contactForm">Послуги</Link>
      </nav>
      <div className={styles.link}>
        <a
          href="https://www.instagram.com/YOUR_INSTAGRAM_PROFILE"
          target="_blank"
          rel="noopener noreferrer"
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 21 21"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M16 5.5H17M4.5 0.5H16.5C18.7091 0.5 20.5 2.29086 20.5 4.5V16.5C20.5 18.7091 18.7091 20.5 16.5 20.5H4.5C2.29086 20.5 0.5 18.7091 0.5 16.5V4.5C0.5 2.29086 2.29086 0.5 4.5 0.5ZM10.5 14.5C8.29086 14.5 6.5 12.7091 6.5 10.5C6.5 8.29086 8.29086 6.5 10.5 6.5C12.7091 6.5 14.5 8.29086 14.5 10.5C14.5 12.7091 12.7091 14.5 10.5 14.5Z"
              stroke="#fff"
            />
          </svg>
        </a>
      </div>
    </header>
  );
}

export default Header;
