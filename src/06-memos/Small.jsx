import { memo } from 'react'

export const Small = memo(({ value }) => {

    console.log('object')

  return (
    <small>{ value }</small>
  )
})


// CRA (create react app) se utiliza React.memo pero en Vite NO porque React no esta definido o lo podemos importar de React