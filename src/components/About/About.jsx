import styles from './About.module.scss';
import { ReactTyped } from 'react-typed';

function About() {
  return (
    <div className={styles.about}>
      <div className={styles.container}>
        <div className={styles.aboutContent}>
          <div className={styles.content}>
            <h2>Вас вітає лікар-хірург</h2>
            <ReactTyped
              strings={['Швидкий Тадей Сергійович ']}
              typeSpeed={120}
              backSpeed={20}
              loop
            >
              <input type="text" className={styles.typingText} />
            </ReactTyped>
            <p>
              Маю понад 5 років досвіду в хірургії та медичних консультаціях.
              <br />
              Займаюсь діагностикою, лікуванням та профілактикою захворювань, що
              потребують оперативного або консервативного хірургічного
              втручання.
            </p>
            <button
              className={styles.btn}
              onClick={() => {
                document
                  .getElementById('about-info')
                  ?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              <span>Про мене</span>
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M9.5 2.99988H10.5C11.6046 2.99988 12.5 3.89531 12.5 4.99988V9.00002C12.5 11.7614 10.2614 14 7.5 14M5.5 2.99988H4.5C3.39543 2.99988 2.5 3.8953 2.5 4.99987V9.00002C2.5 11.7614 4.73858 14 7.5 14M7.5 14V16.5C7.5 19.5376 9.96243 22 13 22C16.0376 22 18.5 19.5376 18.5 16.5V15.5M18.5 15.5C19.8807 15.5 21 14.3807 21 13C21 11.6193 19.8807 10.5 18.5 10.5C17.1193 10.5 16 11.6193 16 13C16 14.3807 17.1193 15.5 18.5 15.5ZM9.49999 2L9.49997 3.9998M5.5 2.00002V4.00002"
                  stroke="white"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </div>
          <div className={styles.img}>
            <img src="./image/7.jpg" alt="dmitro" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
