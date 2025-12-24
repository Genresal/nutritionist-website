import styles from './Services.module.css';
import Card from '../UI/Card';
import consultationImg from '../../assets/service-consultation.png';
import mealPlanImg from '../../assets/service-mealplan.png';

export default function Services() {
    return (
        <section className={`section ${styles.services}`} id="services">
            <div className={`container`}>
                <div className={styles.header}>
                    <h2>Мои услуги</h2>
                    <p className={styles.subtitle}>Индивидуальные решения по питанию, чтобы вы чувствовали себя лучше всего.</p>
                </div>

                <div className={styles.grid}>
                    <Card
                        title="Индивидуальная консультация"
                        image={consultationImg}
                        footer={<span className="btn btn-outline" style={{ color: 'var(--color-primary)', border: '1px solid var(--color-primary)' }}>Узнать больше</span>}
                    >
                        <p>Комплексная оценка здоровья и сессии по персонализированной стратегии для удовлетворения ваших уникальных потребностей.</p>
                    </Card>

                    <Card
                        title="Персонализированные планы питания"
                        image={mealPlanImg}
                        footer={<span className="btn btn-outline" style={{ color: 'var(--color-primary)', border: '1px solid var(--color-primary)' }}>Узнать больше</span>}
                    >
                        <p>Вкусные, простые в исполнении планы питания, созданные с учетом ваших вкусовых предпочтений и целей по здоровью.</p>
                    </Card>

                    <Card
                        title="Разбор кухонной кладовой"
                        // Using placeholder for now or reuse one
                        image={consultationImg}
                        footer={<span className="btn btn-outline" style={{ color: 'var(--color-primary)', border: '1px solid var(--color-primary)' }}>Узнать больше</span>}
                    >
                        <p>Давайте наведем порядок на вашей кухне, чтобы здоровый выбор стал легким выбором.</p>
                    </Card>
                </div>
            </div>
        </section>
    );
}
