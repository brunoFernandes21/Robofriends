import React from 'react';
// import { robots } from './robots';

const Card = ({id, name, email}) => {
    return (
        <div className='bg-blue dib br3 pa3 ma2 grow bw2 shadow-5 pointer-hover: pointer'>
            <img src={`https://robohash.org/${id}?200x200`} alt='Robots' />
            <div className='tc white'>
                <h2> {name}</h2>
                <p> {email}</p>
            </div>            
        </div>
    )
}

export default Card;