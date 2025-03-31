import styles from './Service.module.scss';

function Service() {
  return (
    <div className={styles.service}>
      <div className={styles.container}>
        <h2 className={styles.title}>
          Мої <span>послуги</span>
        </h2>
        <div className={styles.serviceBox}>
          <div className={styles.box1}>
            <img src="/icon/talking.svg" alt="talk" />
            <h2>Консультація</h2>
            <b>очна або онлайн</b>
            <p className={styles.textDes}>
              Для тих, хто прагне отримати чіткий та зрозумілий план дій для
              вирішення питань, пов’язаних із здоров’ям дитини.
            </p>
            <p className={styles.text}>
              Сучасні реалії змушують багатьох змінювати місце проживання, і, на
              жаль, не завжди є доступ до кваліфікованих лікарів. У таких
              випадках онлайн-консультація може допомогти, але є ситуації, коли
              без очного огляду не обійтися.
              <p className={styles.text}>
                Очно консультую - місто Київ, Оболонський район.
              </p>
            </p>
            <p className={styles.text}>
              📌 Якщо ви сумніваєтеся, чи можна вирішити проблему онлайн –
              запитайте!
            </p>
          </div>
          <div className={styles.box2}>
            <ul className={styles.boxText}>
              <li>Консультація включає:</li>
              <li>
                <span>1️⃣</span> Збір даних і оцінка здоров’я – скарги пацієнта,
                історію хвороби, перенесені операції та хронічні захворювання.
              </li>
              <li>
                <span>2️⃣</span> Огляд, призначення додаткових досліджень – за
                потреби.
              </li>
              <li>
                <span>3️⃣</span> Підбір тактики лікування – рекомендації щодо
                медикаментозного чи хірургічного втручання, догляду та
                спостереження.
              </li>
              <li>
                <span>4️⃣</span> Відповіді на запитання – відповідаю на всі
                незрозумілі моменти.
              </li>
              <li>
                <span>5️⃣ </span>Висновок на офіційному бланку – детальний звіт
                про стан здоров'я та рекомендації (за потреби).
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Service;
