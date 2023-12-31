import React from 'react';
import PropTypes from 'prop-types';
import styles from './Statistics.module.css';

export const Statistics = ({ title, stats }) => {
    return (
        <section className={styles.statistics}>
            {title && <h2 className={styles.title}>{title}</h2>}
            <ul className={styles['stat-list']}>
                {stats.map(({ id, label, percentage }) => (
                    <li className={styles.item} key={id}>
                        <span className={styles.label}>{label}</span>
                        <span className={styles.percentage}>{percentage}%</span>
                    </li>
                ))}
            </ul>
        </section>
    );
};

Statistics.propTypes = {
    title: PropTypes.string,
    stats: PropTypes.arrayOf(
        PropTypes.shape({
            label: PropTypes.string.isRequired,
            percentage: PropTypes.number.isRequired,
            id: PropTypes.string.isRequired,
        })
    ).isRequired,
};