import styles from './Contact.module.css';

export default function Contact() {
    return (
        <section className={`section ${styles.contact}`} id="contact">
            <div className="container">
                <div className={styles.wrapper}>
                    <div className={styles.info}>
                        <h2>Let's Work Together</h2>
                        <p>Ready to start your health journey? Fill out the form or reach out directly.</p>

                        <div className={styles.methods}>
                            <div className={styles.method}>
                                <strong>Email:</strong> hello@drnutrition.com
                            </div>
                            <div className={styles.method}>
                                <strong>Phone:</strong> (555) 123-4567
                            </div>
                            <div className={styles.method}>
                                <strong>Office:</strong> 123 Wellness Blvd, Healthy City, HC 90210
                            </div>
                        </div>
                    </div>

                    <form className={styles.form} onSubmit={(e) => e.preventDefault()}>
                        <div className={styles.formGroup}>
                            <label htmlFor="name">Name</label>
                            <input type="text" id="name" placeholder="Your Name" />
                        </div>
                        <div className={styles.formGroup}>
                            <label htmlFor="email">Email</label>
                            <input type="email" id="email" placeholder="your@email.com" />
                        </div>
                        <div className={styles.formGroup}>
                            <label htmlFor="message">Message</label>
                            <textarea id="message" rows={4} placeholder="How can I help you?"></textarea>
                        </div>
                        <button type="submit" className="btn btn-primary">Send Message</button>
                    </form>
                </div>
            </div>
        </section>
    );
}
