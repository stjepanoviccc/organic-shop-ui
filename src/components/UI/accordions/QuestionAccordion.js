import { useState, useRef } from 'react';
import { Transition } from 'react-transition-group';
import styles from './QuestionAccordion.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronUp, faChevronDown } from '@fortawesome/free-solid-svg-icons';

const QuestionAccordion = ({ title, text }) => {
    const [isActive, setIsActive] = useState(false); 
    const nodeRef = useRef(null);    

    const toggleAccordion = () => {
        setIsActive(prevIsActive => !prevIsActive)
    }

    return (
        <div className={styles.container}>
            <button className={styles.questionAccordion} onClick={toggleAccordion}>
                <h4 className={styles.accordionTitle}>{title}</h4>
                {!isActive ? <FontAwesomeIcon className={styles.arrowIcon} icon={faChevronDown} /> : <FontAwesomeIcon className={styles.arrowIcon} icon={faChevronUp} />}
            </button>
            <Transition nodeRef={nodeRef} in={isActive} timeout={0}>
                {state => (
                    <div ref={nodeRef} className={`${styles.panel} ${styles[state]}`} style={{ maxHeight: isActive ? `${nodeRef.current.scrollHeight}px` : '0px' }}>
                        <p className={styles.panelText}>{text}</p>
                    </div>
                )}
            </Transition>
        </div>
    )
};

export default QuestionAccordion;