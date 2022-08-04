import { useEffect, useState } from "react";

export const Message = () => {

    const [coords, setCoords] = useState({ x: 0, y: 0})

    useEffect(() => {

        const onMouseMove = ({ x, y }) => {
            // const coords = { x, y }
            setCoords({ x, y })
            // console.log(coords);
        }
        // mandar funcion por referencia en return y en el cuerpo de useEffect
        window.addEventListener('mousemove', onMouseMove);

        return () => {
            window.removeEventListener('mousemove', onMouseMove);
        }
    }, []);

    return (
        <>
            <h3>Usuario ya existe</h3>
            { JSON.stringify( coords ) }
        </>
    )
}
