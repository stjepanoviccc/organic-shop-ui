import { useRef } from 'react';
import { Transition } from 'react-transition-group';
import styles from './Backdrop.module.scss';
import useCheckDevice from '../../custom_hooks/CheckDevice';

const Backdrop = ({ toggle, inProp }) => {
    const windowWidth = useCheckDevice();
    const nodeRef = useRef(null);

    return (
        <Transition nodeRef={nodeRef} in={windowWidth <= 920 ? inProp : false} timeout={100} mountOnEnter unmountOnExit>
            {state => (
                <div className={`${styles.backdrop} ${state === 'entered' ? styles.backdropActive : ''}`} onClick={toggle}></div>
            )}
        </Transition>
    )
};

export default Backdrop;