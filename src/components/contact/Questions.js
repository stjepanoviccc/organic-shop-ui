import { useAccordionsData } from '../../context/FetchDataContext';
import useCheckImagePath from '../../custom_hooks/CheckImagePath';
import QuestionAccordion from '../UI/accordions/QuestionAccordion';
import styles from './Questions.module.scss';

const QuestionsContainer = () => {
    const smallLeafImg = useCheckImagePath(`${process.env.PUBLIC_URL}/static/images/logo-leaf-new-min.png`, './static/images/logo-leaf-new-min.png');
    const bgImage = useCheckImagePath(`${process.env.PUBLIC_URL}/static/images/leaves-free-img-min.png`, './static/images/leaves-free-img-min.png');
    const accordionItems = useAccordionsData();
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
            <img src={bgImage} alt="leaf-bg-img" className={styles.mainBgImage} style={{maxHeight: '400px'}}></img>
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