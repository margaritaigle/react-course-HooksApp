import { useCounter } from '../hooks/useCounter';
export const CounterWithCustomHook = () => {

    const { counter, increment, decrement, reset } = useCounter();
    // Si retorna un arreglo, desestructuro con parentesis recto [ counter ]

    return (
        <>
            <h1>Counter with Hook: { counter }</h1>

            <hr />

            <button className="btn btn-primary" onClick={ () => increment(2) }>+2</button>
            <button className="btn btn-primary" onClick={reset}>Reset</button>
            <button className="btn btn-primary" onClick={ () => decrement(2) }>-2</button>
        </>
    )
}

// (event) => increment(event) === increment 
// A callback is a function passed as an argument to another function.
// When you pass a function as an argument, remember not to use parenthesis.