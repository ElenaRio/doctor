import styles from './Footer.module.scss';

function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.footerWrapper}>
          <div className={styles.footerInfo}>
            <h3>
              Tadey <br></br>Sergeyovich
            </h3>
            <div>
              <p>Соціальні мережі</p>
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
            <button className={styles.scrollToTop} onClick={scrollToTop}>
              <svg
                width="24px"
                height="24px"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g
                  stroke="none"
                  strokeWidth="1"
                  fill="none"
                  fillRule="evenodd"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <g
                    transform="translate(12 12) rotate(180) translate(-12 -12) translate(5 8.5)"
                    stroke="white"
                    strokeWidth="1.5"
                  >
                    <polyline points="14 0 7 7 0 0" />
                  </g>
                </g>
              </svg>
            </button>
          </div>
          <div className={styles.footerDes}>
            <hr className={styles.divider} />
            <div>
              <p>Політика конфіденційності</p>
              <p>© 2025 Tadey Sergeyovich</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
