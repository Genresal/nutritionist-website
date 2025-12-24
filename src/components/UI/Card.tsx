import type { ReactNode } from 'react';
import styles from './Card.module.css';

interface CardProps {
    image?: string;
    title: string;
    children: ReactNode;
    footer?: ReactNode;
}

export default function Card({ image, title, children, footer }: CardProps) {
    return (
        <div className={styles.card}>
            {image && <img src={image} alt={title} className={styles.image} />}
            <h3 className={styles.title}>{title}</h3>
            <div className={styles.body}>{children}</div>
            {footer && <div className={styles.footer}>{footer}</div>}
        </div>
    );
}
