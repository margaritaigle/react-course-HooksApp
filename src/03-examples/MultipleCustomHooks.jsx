import { useFetch, useCounter } from "../hooks";
import { LoadingQuote, Quote} from "../components"

export const MultipleCustomHooks = () => {

    const { counter, increment, decrement } = useCounter(1);
    
    const url = `https://www.breakingbadapi.com/api/quotes/${counter}`;

    const { data, isLoading, hasError } = useFetch(url);

    // const [{ author, quote }] = data; *funciona pero no es la solucion*
    
    const { author, quote } = !!data && data[0]; // si data tiene un valor, toma la data en la posicion 0
    
    return (
        <>
            <h1>Breaking Bad Quotes</h1>
            <hr />

            {
                (isLoading)
                    ? ( <LoadingQuote /> )
                    : ( <Quote author={author} quote={quote} /> )
            }

            <button 
                onClick={() => increment(1)} className="btn btn-primary"
                disabled={isLoading}>
                Next quote
            </button>
            { (counter > 1) && <button
                onClick={() => decrement(1)} className="btn btn-primary"
            >
                Previous quote
            </button>}

        </>
    )
}
