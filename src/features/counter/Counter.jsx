import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectCount, increment, decrement, incrementByAmount, incrementAsync } from './counterSlice';

export default function Counter() {
    const dispatch = useDispatch();
    const count = useSelector(selectCount);

    const [ amount, setAmount ] = useState(0);

    return (
        <>  
            <div className="main-counter">
                <button type="button" onClick={ () => dispatch(increment()) }>+</button>
                <p>{ count }</p>
                <button type="button" onClick={ () => dispatch(decrement()) }>-</button>
            </div>
            <div className="options">
                <input type="number" value={ amount } onChange={ (e) => setAmount(+e.target.value) }/>
                <button className="incrementByAmount" onClick={ () => dispatch(incrementByAmount(amount)) }>Add Amount</button>            
                <button className="incrementAsync" onClick={ () => dispatch(incrementAsync(amount)) }>Add Amount (Async)</button>
            </div>
        </>
    );
}