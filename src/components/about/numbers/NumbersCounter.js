import styles from './Numbers.module.scss';
import { useState, useEffect } from 'react';

const NumberCounter = ({ target }) => {
    const [count, setCount] = useState(0);

    useEffect(() => {
        const duration = 2000;
        const interval = 50;

        const increment = Math.ceil(target / (duration / interval));

        const timer = setInterval(() => {
            setCount(prevCount => {
                const newCount = prevCount + increment;
                return newCount >= target ? target : newCount;
            });
        }, interval);

        return () => {
            clearInterval(timer);
        };
    }, [target]);

    return <p className={styles.bigText}>{count}+</p>;
};

export default NumberCounter;