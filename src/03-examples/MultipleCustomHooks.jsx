import { useFetch } from "../hooks/useFetch";
import { useCounter } from "../hooks/useCounter";

export const MultipleCustomHooks = () => {

    const { counter, increment } = useCounter(1);
    
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
                    ? (
                        <div className="alert alert-info text-center">Loading...</div>
                    )
                    : (
                        <blockquote className="blockquote text-end">
                            <p className="mb-1">{quote}</p>
                            <footer className="blockquote-footer mt-1">{author}</footer>
                        </blockquote>
                    )
            }

            <button 
                onClick={() => increment(1)} className="btn btn-primary"
                disabled={isLoading}>
                Next quote
            </button>

        </>
    )
}
