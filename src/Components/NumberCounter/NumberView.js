import React, {useEffect, useState} from 'react';
import Button from '../Button/Button';

const NumberShower = () => {
    const [count, setCount] = useState(0);


    
    
    



    return (
        <div>
            <p>The current number is {count}!</p>
            
            <Button />
            
        </div>
    )
}

export default NumberShower;