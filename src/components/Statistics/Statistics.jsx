import React from 'react';
import PropTypes from 'prop-types';

export const Statistics = ({ title, stats }) => {
    return (
        <section className="statistics">
        {title && <h2 className="title">{title}</h2>}
        <ul className="stat-list">
            {stats.map(({ label, percentage }) => (
            <li className="item" key={label}>
                <span className="label">{label}</span>
                <span className="percentage">{percentage}%</span>
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
        })
    ).isRequired,
};