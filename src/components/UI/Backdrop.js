import styles from './Backdrop.module.scss';

const Backdrop = (props) => {
    return <div className={styles.backdrop} onClick={props.onClick}></div>
};

export default Backdrop;