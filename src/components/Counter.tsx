import React, {useEffect} from "react";
import {connect} from 'react-redux';
import {decrease, increase} from "../reducers/count";

interface ICounterProps {
    increase: () => void,
    decrease: () => void,
    count: {
        count: number;
    };
}

const Counter: React.FC<ICounterProps> = (props: ICounterProps) => {
    useEffect(()=> {console.log('props', props)});
    const increaseCount = () =>  {
        props.increase();
    };

    const decreaseCount = () =>  {
        props.decrease();
    };

    return <div>
        <button onClick={increaseCount}>+</button>
        <span>{props.count.count}</span>
        <button onClick={decreaseCount}>-</button>
    </div>
};

const mapStateToProps = ({count}) => ({
    count
});

const mapDispatchToProps = {
    increase,
    decrease
};

export default connect(mapStateToProps, mapDispatchToProps)(Counter);