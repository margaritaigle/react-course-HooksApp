import { useState } from "react";

export const useCounter = ( initialValue = 10 ) => {

    const [counter, setCounter] = useState( initialValue );

    const increment = () => {
        setCounter( counter + 1 );
    }

    const reset = () => {
        setCounter( initialValue );
    }

    const decrement = () => {
        setCounter( counter - 1 );
    }
    return {
        counter, // counter: counter
        increment,
        reset,
        decrement,
    }
}