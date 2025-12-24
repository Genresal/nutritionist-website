import styles from './Footer.module.css';

export default function Footer() {
    return (
        <footer className={styles.footer}>
            <div className="container">
                <div className={styles.content}>
                    <div className={styles.brand}>
                        <h3>Dr. Романова</h3>
                        <p>&copy; {new Date().getFullYear()} Все права защищены.</p>
                    </div>
                    <div className={styles.socials}>
                        {/* Placeholders for social icons */}
                        <a href="#">Instagram</a>
                        <a href="#">LinkedIn</a>
                        <a href="#">Twitter</a>
                    </div>
                </div>
            </div>
        </footer>
    );
}
