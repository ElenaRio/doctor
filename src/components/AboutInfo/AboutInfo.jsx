import styles from './AboutInfo.module.scss';

function AboutInfo() {
  return (
    <div id="about-info" className={styles.aboutInfo}>
      <div className={styles.container}>
        <div className={styles.info}>
          <div className={styles.infoDetails}>
            <h2 className={styles.title}>
              Про <span>мене</span>
            </h2>
            <div className={styles.text}>
              <p>Я — Цілуйко Дмитро Вікторович, дитячий лікар-хірург.</p>
              <p>
                У 2018 ріці році закінчив Запорізький державний
                медико-фармацевтичний університет та розпочав свою лікарську
                діяльність.
              </p>
              <p>
                Маю досвід роботи як у стаціонарі, так і на амбулаторному
                прийомі.
              </p>
              <p>
                Працював із амбулаторними та стаціонарними пацієнтами
                хірургічного профілю у державних та приватних клініках Запоріжжя
                та Києва.
              </p>
              <p>
                Для підвищення кваліфікації пройшов додаткові курси
                ультразвукової діагностики, що дозволяє комплексно оцінювати
                стан пацієнтів та проводити діагностику на сучасному рівні.
              </p>
              <p>
                Постійно вдосконалюю свої знання, відвідуючи професійні
                конференції, навчальні курси та спеціалізовані тренінги.
              </p>
            </div>
          </div>
          <div className={styles.infoImg}>
            <img src="./image/4.jpg" alt="images" />
          </div>
        </div>
      </div>
    </div>
  );
}
export default AboutInfo;
