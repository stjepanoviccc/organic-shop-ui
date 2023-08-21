import useCheckImagePath from '../../custom_hooks/CheckImagePath';
import QuestionAccordion from '../UI/accordions/QuestionAccordion';
import styles from './Questions.module.scss';

const QuestionsContainer = () => {
    const smallLeafImg = useCheckImagePath(`${process.env.PUBLIC_URL}/static/media/logo-leaf-new.png`, './static/media/logo-leaf-new.png');
    const bgImage = useCheckImagePath(`${process.env.PUBLIC_URL}/static/media/leaves-free-img.png`, './static/media/leaves-free-img.png');

    const accordionItems = [
        {
            title: 'Pulvinar nostrud class cum facilis?',
            text: 'I am item content. Click edit button to change this text. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar leo.'
        },
        {
            title: 'Pon excepturi numquam, facilis?',
            text: 'I am item content. Click edit button to change this text. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar leo.'
        },
        {
            title: 'Pon excepturi numquam, facilis?',
            text: 'I am item content. Click edit button to change this text. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar leo.'
        },
        {
            title: 'Pon excepturi numquam, facilis?',
            text: 'I am item content. Click edit button to change this text. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar leo.'
        },
        {
            title: 'Consequat nesciunt fusce facilisi?',
            text: 'I am item content. Click edit button to change this text. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar leo.'
        },
        {
            title: 'Consequat nesciunt fusce facilisi?',
            text: 'I am item content. Click edit button to change this text. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar leo.'
        },

    ]
    const chunkedAccordionItems = chunkArray(accordionItems, accordionItems.length/2);

    return (
        <section className={styles.questionsSection}>
            <div className={styles.mainWrap}>
                <div className={styles.questionsTitleHolder}>
                    <h2 className={styles.mainTitle}>Frequently Asked Question!</h2>
                    <img className={styles.smallLeafImg} src={smallLeafImg} alt="small-leaf-img"></img>
                </div>
                <div className={styles.questionsWrap}>
                    {chunkedAccordionItems.map((pair, index) => (
                        <div key={index} className={styles.questionsRow}>
                            {pair.map((item, innerIndex) => (
                                <QuestionAccordion key={innerIndex} title={item.title} text={item.text} />
                            ))}
                        </div>
                    ))}
                </div>
            </div>
            <img src={bgImage} alt="leaf-bg-img" className={styles.mainBgImage}></img>
        </section>

    )
};

export default QuestionsContainer;

const chunkArray = (arr, chunkSize) => {
    const chunkedArray = [];
    for (let i = 0; i < arr.length; i += chunkSize) {
        chunkedArray.push(arr.slice(i, i + chunkSize));
    }
    return chunkedArray;
}