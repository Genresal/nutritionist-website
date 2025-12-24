import styles from './Testimonials.module.css';

export default function Testimonials() {
    const reviews = [
        {
            id: 1,
            name: "Эмили Р.",
            quote: "Сара полностью изменила мое отношение к еде. У меня больше энергии, чем было за последние годы!",
            role: "Маркетинговый директор"
        },
        {
            id: 2,
            name: "Майкл Т.",
            quote: "Персонализированный план питания стал переломным моментом. Это не ощущалось как диета, просто лучший образ жизни.",
            role: "Инженер-программист"
        },
        {
            id: 3,
            name: "Джессика К.",
            quote: "Высокий профессионализм и глубокие знания. Доктор Сара уделяет время, чтобы выслушать и действительно понять ваши цели.",
            role: "Инструктор по йоге"
        }
    ];

    return (
        <section className={`section ${styles.testimonials}`} id="testimonials">
            <div className="container">
                <h2 className={styles.heading}>Истории клиентов</h2>
                <div className={styles.grid}>
                    {reviews.map((review) => (
                        <div key={review.id} className={styles.card}>
                            <div className={styles.quote}>"{review.quote}"</div>
                            <div className={styles.author}>
                                <div className={styles.avatar}>{review.name.charAt(0)}</div>
                                <div>
                                    <div className={styles.name}>{review.name}</div>
                                    <div className={styles.role}>{review.role}</div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
