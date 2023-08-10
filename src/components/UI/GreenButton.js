import styles from './GreenButton.module.scss';

const GreenButton = ({children}) => {
    return (
        <button className={styles.greenBtn}>
            {children}
        </button>
    )
};

export default GreenButton;