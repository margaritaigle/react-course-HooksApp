import { renderHook, act } from "@testing-library/react";
import { useCounter } from "../../src/hooks/useCounter";

describe('tests in useCounter', () => { 
    test('should return the default values', () => { 
        const { result } = renderHook( () => useCounter() ); 
        const { counter, decrement, increment, reset } = result.current;
        
        expect(counter).toBe(10);
        expect(decrement).toEqual( expect.any( Function ));
        expect(increment).toEqual( expect.any( Function ));
        expect(reset).toEqual( expect.any( Function ));
     });

     test('should return the value set in the useCounter', () => { 
        const { result } = renderHook( () => useCounter(100) );
        const { counter } = result.current;
        
        expect(counter).toBe(100); 
     });

    test('should increment the counter', () => {
        const { result } = renderHook(() => useCounter());
        const { increment } = result.current;
        
        act(() => {
            increment();
            increment(2);
        })

        expect(result.current.counter).toBe(13)
    });

    test('should decrement the counter', () => {
        const { result } = renderHook(() => useCounter());
        const { decrement } = result.current;
        
        act(() => {
            decrement();
            decrement(2);
        })

        expect(result.current.counter).toBe(7)
    });

    test('should reset the counter', () => {
        const { result } = renderHook(() => useCounter());
        const { decrement, reset } = result.current;

        act(() => {
            decrement(2);
            reset();
        })
        expect(result.current.counter).toBe(10);
    });
});