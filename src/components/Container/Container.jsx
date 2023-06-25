import React from "react"; 
import styles from './Container.module.css';

export const Container = ({ children, width }) => {
    const containerStyle = {
        maxWidth: width + 'p',
    };

    return <div className={styles.container} style={containerStyle}>{children}</div>;
};