import { useState, useEffect } from 'react';
import { useUsersMap } from '../../context/FetchDataContext';
import useCheckImagePath from '../../custom_hooks/CheckImagePath';
import { useBackgroundColorUpdate } from '../../context/NavBackgroundContext';
import EditPasswordModal from './EditPassword';
import GreenButton from '../UI/buttons/GreenButton';
import styles from './Profile.module.scss';

const ProfileContainer = () => {
    const usersMap = useUsersMap();
    const [dataLoaded, setDataLoaded] = useState(false);
    const username = localStorage.getItem('loggedName');
    const email = localStorage.getItem('loggedEmail')
    const [image, setImage] = useState(null);
    const leafImg = useCheckImagePath(`${process.env.PUBLIC_URL}/static/images/basil-leaf-min.png`, './static/images/basil-leaf-min.png');
    const bgImage = useCheckImagePath(`${process.env.PUBLIC_URL}/static/images/leaves-free-img-min.png`, './static/images/leaves-free-img-min.png');
    const changeBgColor = useBackgroundColorUpdate();
    const lightColor = '#f8f6f3';

    useEffect(() => {
        changeBgColor(lightColor);
        return (() => {
            changeBgColor('default')
        })
    });

    useEffect(() => {
        if (usersMap.get(username)) {
            setDataLoaded(true);
            setImage(prev => usersMap.get(username)[2]);
        }
    }, [username, usersMap]);

    const [editPasswordModal, setEditPasswordModal] = useState(false);
    const toggleEditPasswordModal = () => {
        setEditPasswordModal(prev => !prev);
    }

    return (
        <section className={styles.profileSection}>
            <div className={styles.titleHolder} style={{ backgroundColor: lightColor }}>
                <h1 className={styles.title}>Profile Page - {username}</h1>
                <img className={styles.leafImg} src={leafImg} alt="leaf-img"></img>
            </div>
            <div className={styles.mainWrap}>
                <div className={styles.profileWrap}>
                    {dataLoaded && (
                        <>
                            <div className={styles.profileImgHolder}>
                                <img className={styles.profileImg} src={image} alt="profile-img"></img>
                            </div>
                            <div className={styles.profileContentHolder}>
                                <p className={styles.profileText}>Username: {username}</p>
                                <p className={styles.profileText}>Email: {email}</p>
                                <div className={styles.profileBtnHolder}>
                                    <GreenButton onClick={toggleEditPasswordModal} class={true}>Edit Password</GreenButton>
                                </div>
                            </div>
                        </>
                    )}
                </div>
            </div>
            <img src={bgImage} alt="leaf-bg-img" className={`${styles.mainBgImage} ${styles.mainBgImageExt}`}></img>
            {editPasswordModal && <EditPasswordModal toggle={toggleEditPasswordModal} username={username} />}
        </section>
    )
};

export default ProfileContainer;