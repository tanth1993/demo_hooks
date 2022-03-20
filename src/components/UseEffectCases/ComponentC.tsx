import React, { useEffect, useState } from 'react'

export default function ComponentC() {
    const [number, setNumber] = React.useState(1)

    useEffect(() => {
        console.log('number changed', number)

        return () => { console.log('clean up', number) }
    }, [number])

    return (
        <div className='comp-div'>
            <h4>Component C</h4>
            <h4>{number}</h4>
            <button onClick={() => setNumber(number + 1)}>
                Number++
            </button>
        </div>
    )
}












// const [number, setNumber] = React.useState(1)

//     useEffect(() => {
//         console.log('number changed', number)

//         return () => { console.log('clean up', number) }
//     }, [number])

//     return (
//         <div className='comp-div'>
//             <h4>Component C</h4>
//             <h4>{number}</h4>
//             <button onClick={() => setNumber(number + 1)}>
//                 Number++
//             </button>
//         </div>
//     )