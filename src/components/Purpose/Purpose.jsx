import styles from './Purpose.module.scss';

function Purpose() {
  return (
    <div className={styles.purpose}>
      <div className={styles.container}>
        <h2 className={styles.title}>
          Моя <span>головна мета</span>
        </h2>
        <div className={styles.boxContainer}>
          <div className={styles.box}>
            <svg
              className={styles.icon}
              width="28"
              height="28"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M8.5 6H15.5M10 17H14M12 19V15M15 11.1736C17.3649 12.2971 19 14.7076 19 17.5V19.5C19 20.6046 18.1046 21.5 17 21.5H7C5.89543 21.5 5 20.6046 5 19.5V17.5C5 14.7076 6.63505 12.2971 9 11.1736M12 12C10.067 12 8.5 10.433 8.5 8.5V4C8.5 2.89543 9.39543 2 10.5 2H13.5C14.6046 2 15.5 2.89543 15.5 4V8.5C15.5 10.433 13.933 12 12 12Z"
                stroke="white"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <p>
              Рання діагностика та профілактика хірургічних захворювань у дітей.
            </p>
          </div>
          <div className={styles.box}>
            <svg
              className={styles.icon}
              width="28"
              height="28"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M9 14.5H12M12 14.5H15M12 14.5V11.5M12 14.5V17.5M7 7H17M7 7C7 4.79086 8.79086 3 11 3H13C15.2091 3 17 4.79086 17 7M7 7C4.79086 7 3 8.79086 3 11V17C3 19.2091 4.79086 21 7 21H17C19.2091 21 21 19.2091 21 17V11C21 8.79086 19.2091 7 17 7"
                stroke="white"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <p>
              Створити комфортну атмосферу для дітей та їхніх батьків,
              допомагаючи їм впоратися зі страхами та тривогами.
            </p>
          </div>
          <div className={styles.box}>
            <svg
              className={styles.icon}
              width="28"
              height="28"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M2.5 14H9C10 14 11 15.5 12 15.5C12.8643 15.5 14.4757 14.7529 15.2199 16.1645C15.4551 16.6106 15.141 17.1203 14.6751 17.3135C13.596 17.7609 12.3941 18.3686 12 18.5L9 17.5M15.5 16.5L20.076 14.6696C20.3538 14.5585 20.6559 14.5223 20.9521 14.5646C21.9989 14.7141 22.2946 16.0853 21.4025 16.653L13.7586 21.5173C13.2761 21.8243 12.6853 21.9101 12.1354 21.753L2.5 19M12 12C10.075 11.3223 6.5 8.4091 6.5 5.20455C6.5 3.43474 7.85434 2 9.525 2C10.5481 2 11.4526 2.53804 12 3.36158C12.5474 2.53804 13.4519 2 14.475 2C16.1457 2 17.5 3.43474 17.5 5.20455C17.5 8.4091 13.925 11.3223 12 12Z"
                stroke="white"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <p>
              Забезпечити маленьким пацієнтам якісну, безпечну та сучасну
              медичну допомогу.
            </p>
          </div>
          <div className={styles.box}>
            <svg
              className={styles.icon}
              width="28"
              height="28"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M10 4.34349L8.46443 2.80787C7.68338 2.02682 6.41705 2.02682 5.636 2.80787L2.80757 5.63629C2.02652 6.41734 2.02652 7.68367 2.80757 8.46472L4.34307 10.0002M19.6568 14.0002L21.1923 15.5358C21.9734 16.3168 21.9734 17.5832 21.1923 18.3642L18.3639 21.1926C17.5829 21.9737 16.3165 21.9737 15.5355 21.1926L14 19.6572M12 6.34324L17.6569 12.0001M6.34315 12.0001L12 17.657M2.80761 18.3641L5.63604 21.1925C6.41709 21.9735 7.68342 21.9735 8.46447 21.1925L21.1924 8.46456C21.9734 7.68352 21.9734 6.41719 21.1924 5.63614L18.364 2.80771C17.5829 2.02666 16.3166 2.02666 15.5355 2.80771L2.80761 15.5356C2.02656 16.3167 2.02656 17.583 2.80761 18.3641Z"
                stroke="white"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <p>Зробити лікування максимально ефективним і безболісним.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Purpose;
