import { useState, useEffect } from 'react';
import { useUsersMap } from '../../context/FetchDataContext';
import useCheckImagePath from '../../custom_hooks/CheckImagePath';
import { useBackgroundColorUpdate } from '../../context/NavBackgroundContext';
import GreenButton from '../UI/buttons/GreenButton';
import styles from './Profile.module.scss';

const ProfileContainer = () => {
    const usersMap = useUsersMap();
    const [dataLoaded, setDataLoaded] = useState(false);
    const [username, setUsername] = useState(localStorage.getItem('loggedName'));
    const [email, setEmail] = useState(localStorage.getItem('loggedEmail'));
    const [password, setPassword] = useState(null);
    const [image, setImage] = useState(null);
    const leafImg = useCheckImagePath(`${process.env.PUBLIC_URL}/static/media/basil-leaf.png`, './static/media/basil-leaf.png');
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
            setPassword(prev => usersMap.get(username)[0]);
            setImage(prev => usersMap.get(username)[2]);
        }
    }, [username, usersMap]);

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
                                <img className={styles.profileImg} src={imgPathHandler(image)} alt="profile-img"></img>
                            </div>
                            <div className={styles.profileContentHolder}>
                                <p className={styles.profileText}>Username: {username}</p>
                                <p className={styles.profileText}>Email: {email}</p>
                                <div className={styles.profileBtnHolder}>
                                    <GreenButton class={true}>Edit Password</GreenButton>
                                    <GreenButton style={{ backgroundColor: '#363636' }} class={true}>Set Up Payment</GreenButton>
                                </div>
                            </div>
                        </>
                    ) }
                </div>
            </div>
        </section>
    )
};

export default ProfileContainer;

// mimic of custom hook - useImagePathHandler
const imgPathHandler = (baseUrl) => {
    const fileId = baseUrl.match(/\/file\/d\/([^/]+)/)[1];
    const newUrl = `https://drive.google.com/uc?export=view&id=${fileId}`;
    return newUrl;
};