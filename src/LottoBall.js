import React from 'react';
import './LottoBall.css';

const LottoBall = (props) => {
    return ( 
        <div className='LottoBall'>
            {props.num}
        </div>
     );
}

export default LottoBall;