import styles from './Contact.module.css';

export default function Contact() {
    return (
        <section className={`section ${styles.contact}`} id="contact">
            <div className="container">
                <div className={styles.wrapper}>
                    <div className={styles.info}>
                        <h2>Давайте работать вместе</h2>
                        <p>Готовы начать свой путь к здоровью? Заполните форму или свяжитесь со мной напрямую.</p>

                        <div className={styles.methods}>
                            <div className={styles.method}>
                                <strong>Почта:</strong> hello@drnutrition.com
                            </div>
                            <div className={styles.method}>
                                <strong>Телефон:</strong> (555) 123-4567
                            </div>
                            <div className={styles.method}>
                                <strong>Офис:</strong> 123 Wellness Blvd, Healthy City, HC 90210
                            </div>
                        </div>
                    </div>

                    <form className={styles.form} onSubmit={(e) => e.preventDefault()}>
                        <div className={styles.formGroup}>
                            <label htmlFor="name">Имя</label>
                            <input type="text" id="name" placeholder="Ваше имя" />
                        </div>
                        <div className={styles.formGroup}>
                            <label htmlFor="email">Email</label>
                            <input type="email" id="email" placeholder="ваша@почта.com" />
                        </div>
                        <div className={styles.formGroup}>
                            <label htmlFor="message">Сообщение</label>
                            <textarea id="message" rows={4} placeholder="Чем я могу вам помочь?"></textarea>
                        </div>
                        <button type="submit" className="btn btn-primary">Отправить сообщение</button>
                    </form>
                </div>
            </div>
        </section>
    );
}
