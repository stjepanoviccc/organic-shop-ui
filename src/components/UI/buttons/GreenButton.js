import styles from './GreenButton.module.scss';

const GreenButton = (props) => {

    return (
        <div className={props.class && styles.btnHolder}>
            <button className={styles.greenBtn} onClick={props.onClick} >
                {props.children}
            </button>
        </div>
    )
};

export default GreenButton;