import styles from './Testimonials.module.css';

export default function Testimonials() {
    const reviews = [
        {
            id: 1,
            name: "Emily R.",
            quote: "Sarah completely changed my relationship with food. I have more energy than I've had in years!",
            role: "Marketing Executive"
        },
        {
            id: 2,
            name: "Michael T.",
            quote: "The personalized meal plan was a game changer. It didn't feel like a diet, just a better way of living.",
            role: "Software Engineer"
        },
        {
            id: 3,
            name: "Jessica K.",
            quote: "Highly professional and knowledgeable. Dr. Sarah takes the time to listen and truly understand your goals.",
            role: "Yoga Instructor"
        }
    ];

    return (
        <section className={`section ${styles.testimonials}`} id="testimonials">
            <div className="container">
                <h2 className={styles.heading}>Client Stories</h2>
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
