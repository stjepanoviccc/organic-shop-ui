import { useState, useRef, useEffect } from 'react';
import { usePricesData, usePricesDataUpdate } from '../../../context/ShopPriceContext';
import ReactSlider from 'react-slider';
import GreenButton from '../../UI/buttons/GreenButton';
import './slider-custom.scss';

const DoubleRangedSlider = () => {
    const updateCurrentPriceRange = usePricesDataUpdate();
    const pricesCtx = usePricesData();
    const minRef = useRef();
    const maxRef = useRef();
    const [globalMin, setGlobalMin] = useState(pricesCtx.GLOBAL_MIN);
    const [globalMax, setGlobalMax] = useState(pricesCtx.GLOBAL_MAX);
    const [minValue, setMinValue] = useState(pricesCtx.currentMin);
    const [maxValue, setMaxValue] = useState(pricesCtx.currentMax);
    const [validationState, setValidationState] = useState(false);
    const [validationMsg, setValidationMsg] = useState('');

    // load secure
    useEffect(() => {
        setGlobalMin(prev => pricesCtx.GLOBAL_MIN);
        setGlobalMax(prev => pricesCtx.GLOBAL_MAX);
        setMinValue(prev => pricesCtx.currentMin);
        setMaxValue(prev => pricesCtx.currentMax);
    }, [pricesCtx]);

    const valueChangeHandler = (type, value) => {
        type === 'MIN' && value <= globalMax && setMinValue(prev => value);
        type === 'MAX' && value <= globalMax && setMaxValue(prev => value);
    };

    const fetchPriceValues = () => {
        setValidationState(prev => true);
        if (minValue > maxValue) {
            validationMessageAppear('Minimum value must be lower than max!');
            return;
        } else {
            validationMessageAppear('Changes successfull!');
            updateCurrentPriceRange(minValue, maxValue);
        }
    }

    const validationMessageAppear = (msg) => {
        setValidationMsg(`${msg}`);
        setTimeout(() => {
            setValidationState(false);
        }, 5000);
    }

    return (
        <>
            <ReactSlider
                className="slider"
                thumbClassName="thumb"
                trackClassName="track"
                value={[minValue, maxValue]}
                min={globalMin}
                max={globalMax}
                renderThumb={(props) => <div {...props}></div>}
                minDistance={1}
                onAfterChange={(values) => {
                    valueChangeHandler('MIN', values[0]);
                    valueChangeHandler('MAX', values[1]);
                }}
            />
            <div className="priceWrap">
                <input ref={minRef} className="priceInput" type="text" value={`$${minValue}`} onChange={event => valueChangeHandler('MIN', Number(event.target.value.slice(1)))}></input>
                <input ref={maxRef} className="priceInput" type="text" value={`$${maxValue}`} onChange={event => valueChangeHandler('MAX', Number(event.target.value.slice(1)))}></input>
                <GreenButton onClick={fetchPriceValues}>Apply</GreenButton>
            </div>
            {validationState && <p className="validationMsg">{validationMsg}</p>}
        </>
    );
};

export default DoubleRangedSlider;