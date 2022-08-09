import { memo } from 'react'

export const ShowIncrement = memo(( { increment } ) => {

    console.log('Me volvi a generar :(');
  return (
    <button
        className='btn btn-primary'
        onClick={ () => {
            increment();
        }}
    >
        +1
    </button>
  )
})

// Sin useCallback se dibuja 1 sola vez la funcion