import { useCallback, useState } from 'react'
import { ShowIncrement } from './ShowIncrement';

export const CallbackHook = () => {

    const [counter, setCounter] = useState( 10 );

    const incrementFather = useCallback(
      () => { 
        setCounter( (currentCounterValue) => currentCounterValue + 1 );
        // se utiliza un callback ya que counter esta memorizado y al usar counter + 1
        // simplemente dado que toma el valor memorizado y renderizado queda en 11
      },
      [],
    )
    
    // memoriza FUNCIONES
     
  return (
    <>
        <h1>useCallback Hook: { counter }</h1>
        <hr />

        <ShowIncrement increment={incrementFather}/>
    </>
  )
}
