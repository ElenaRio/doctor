import styles from './Contact.module.scss';
import { useState } from 'react';
import axios from 'axios';

const TELEGRAM_BOT_TOKEN = 'YOUR_BOT_TOKEN'; // Заменить
const CHAT_ID = 'YOUR_CHAT_ID'; // Заменить
const TELEGRAM_API_URL = `https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`;

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    complaint: '',
  });
  const [isDisabled, setIsDisabled] = useState(true);
  const [successMessage, setSuccessMessage] = useState('');
  const [phoneError, setPhoneError] = useState('');

  const validatePhoneNumber = (phone) => {
    const regex = /^(?:\+380|380|0)\d{9}$/;
    return regex.test(phone);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => {
      const newData = { ...prev, [name]: value };

      if (value.trim() !== '') {
        e.target.parentNode.classList.add(styles.filed);
      } else {
        e.target.parentNode.classList.remove(styles.filed);
      }

      if (name === 'phone') {
        if (!validatePhoneNumber(value)) {
          setPhoneError('Введіть коректний номер телефону');
          setIsDisabled(true);
        } else {
          setPhoneError('');
        }
      }

      setIsDisabled(
        !(
          newData.name &&
          validatePhoneNumber(newData.phone) &&
          newData.complaint
        )
      );
      return newData;
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validatePhoneNumber(formData.phone)) {
      setPhoneError('Введіть коректний номер телефону');
      return;
    }

    const message = `Нова заявка!%0AІм'я: ${formData.name}%0AТелефон: ${formData.phone}%0AСкарга: ${formData.complaint}`;

    try {
      await axios.post(TELEGRAM_API_URL, {
        chat_id: CHAT_ID,
        text: message,
      });

      setSuccessMessage('Заявка відправлена!');
      setFormData({ name: '', phone: '', complaint: '' });
      setIsDisabled(true);
    } catch (error) {
      alert('Помилка при відправці');
    }
  };

  return (
    <div className={styles.contact}>
      <div className={styles.container}>
        <div className={styles.contactWrapper}>
          <div className={styles.image}>
            <img src="./image/6.jpg" alt="contact" />
          </div>
          <div className={styles.info}>
            <form className={styles.form} onSubmit={handleSubmit}>
              <div className={styles.title}>
                Записатися на <span>консультацію</span>
              </div>
              <label className={styles.labelForm}>
                <input
                  className={styles.inputForm}
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
                <span className={styles.spanForm}>Ваше ім'я та прізвище *</span>
              </label>
              <label className={styles.labelForm}>
                <input
                  className={styles.inputForm}
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                />
                <span className={styles.spanForm}>Номер телефону *</span>
                {phoneError && (
                  <p className={styles.error}>{phoneError}</p>
                )}{' '}
                {/* Ошибка */}
              </label>
              <label className={styles.labelForm}>
                <input
                  className={styles.inputForm}
                  type="text"
                  name="complaint"
                  value={formData.complaint}
                  onChange={handleChange}
                  required
                />
                <span className={styles.spanForm}>Коментар до запису </span>
              </label>
              <button
                className={styles.buttonForm}
                disabled={isDisabled}
                type="submit"
              >
                <span>Надіслати заявку</span>
              </button>
              {successMessage && (
                <p className={styles.successMessage}>{successMessage}</p>
              )}
            </form>
            <div className={styles.contactInstagram}>
              <h3>
                Щоб отримати консультацію, ви можете заповнити форму на сайті
                або написати мені у Direct в{' '}
                <a
                  href="https://www.instagram.com/YOUR_INSTAGRAM_PROFILE"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Instagram
                </a>
                .
              </h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
