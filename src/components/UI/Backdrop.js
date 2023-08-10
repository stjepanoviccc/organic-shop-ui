import { useRef } from 'react';
import { Transition } from 'react-transition-group';
import styles from './Backdrop.module.scss';

const Backdrop = ({ toggle, inProp }) => {
    const nodeRef = useRef(null);

    return (
        <Transition nodeRef={nodeRef} in={inProp} timeout={100} mountOnEnter unmountOnExit>
            {state => (
                <div className={`${styles.backdrop} ${state === 'entered' ? styles.backdropActive : ''}`} onClick={toggle}></div>
            )}
        </Transition>
    )
};

export default Backdrop;