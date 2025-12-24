import styles from './Services.module.css';
import Card from '../UI/Card';
import consultationImg from '../../assets/service-consultation.png';
import mealPlanImg from '../../assets/service-mealplan.png';

export default function Services() {
    return (
        <section className={`section ${styles.services}`} id="services">
            <div className={`container`}>
                <div className={styles.header}>
                    <h2>My Offerings</h2>
                    <p className={styles.subtitle}>Tailored nutrition solutions to help you feel your best.</p>
                </div>

                <div className={styles.grid}>
                    <Card
                        title="1-on-1 Consultation"
                        image={consultationImg}
                        footer={<span className="btn btn-outline" style={{ color: 'var(--color-primary)', border: '1px solid var(--color-primary)' }}>Learn More</span>}
                    >
                        <p>Comprehensive health assessment and personalized strategy sessions to address your unique needs.</p>
                    </Card>

                    <Card
                        title="Personalized Meal Plans"
                        image={mealPlanImg}
                        footer={<span className="btn btn-outline" style={{ color: 'var(--color-primary)', border: '1px solid var(--color-primary)' }}>Learn More</span>}
                    >
                        <p>Delicious, easy-to-follow meal plans crafted for your taste preferences and health goals.</p>
                    </Card>

                    <Card
                        title="Kitchen Pantry Makeover"
                        // Using placeholder for now or reuse one
                        image={consultationImg}
                        footer={<span className="btn btn-outline" style={{ color: 'var(--color-primary)', border: '1px solid var(--color-primary)' }}>Learn More</span>}
                    >
                        <p>Let's clean up your kitchen environment to make healthy choices the easy choices.</p>
                    </Card>
                </div>
            </div>
        </section>
    );
}
