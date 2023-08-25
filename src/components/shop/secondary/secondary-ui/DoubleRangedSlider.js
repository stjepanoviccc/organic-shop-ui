import { useState } from 'react';
import ReactSlider from 'react-slider';
import './slider-custom.scss';

const DoubleRangedSlider = () => {
    const [minValue, setMinValue] = useState(0);
    const [maxValue, setMaxValue] = useState(50)
    const valueChangeHandler = (type, value) => {
        if (type === 'MIN') {
            setMinValue(value);
        } else if (type === 'MAX') {
            setMaxValue(value);
        }
    };

    return (
        <>
            <ReactSlider
                className="slider"
                thumbClassName="thumb"
                trackClassName="track"
                defaultValue={[minValue, maxValue]}
                pearling
                renderThumb={(props) => <div {...props}></div>}
                minDistance={10}
                onAfterChange={(values) => {
                    valueChangeHandler('MIN', values[0]);
                    valueChangeHandler('MAX', values[1]);
                }}
            />
            <div className="priceWrap">
                <input className="priceInput" type="text" value={`$ ${minValue}`}></input>
                <input className="priceInput" type="text" value={`$ ${maxValue}`}></input>
            </div>
        </>
    );
};

export default DoubleRangedSlider;