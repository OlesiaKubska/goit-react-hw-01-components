import React from 'react';
import PropTypes from 'prop-types';
import styles from './TransactionHistory.module.css';

export const TransactionHistory = ({ items }) => {
    return (
        <table className={styles['transaction-history']}>
            <thead>
                <tr>
                    <th className={styles.type}>Type</th>
                    <th className={styles.amount}>Amount</th>
                    <th className={styles.currency}>Currency</th>
                </tr>
            </thead>
            <tbody>
                {items.map(({ id, type, amount, currency }) => (
                <tr key={id}>
                    <td>{type}</td>
                    <td>{parseFloat(amount).toFixed(2)}</td>
                    <td>{currency}</td>
                </tr>
                ))}
            </tbody>
        </table>
    );
};

TransactionHistory.propTypes = {
    items: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired,
            type: PropTypes.string.isRequired,
            amount: PropTypes.string.isRequired,
            currency: PropTypes.string.isRequired,
        })
    ).isRequired,
};