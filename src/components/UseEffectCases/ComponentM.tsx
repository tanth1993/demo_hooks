import React, { useEffect, useState } from 'react'

export default function ComponentM() {

    const [obj, setObj] = React.useState({ a: 1, b: 1 })

    useEffect(() => {
        console.log('obj changed')
    }, [obj])



    const handleObj = () => {
        obj.a = obj.a + 1
        setObj(obj)
    }

    return (
        <div className='comp-div'>
            <h4>Component M</h4>
            <h3>{JSON.stringify(obj)}</h3>
            <button onClick={handleObj}>
                Change Obj
            </button>
        </div>
    )

}











// const [obj, setObj] = React.useState({ a: 1, b: 1 })

// useEffect(() => {
//     setObj({ ...obj })
// }, [obj])

// const handleObj = () => {
//     const objClone = { ...obj }
//     objClone.a = objClone.a + 1
//     setObj(objClone)
// }

// return (
//     <div className='comp-div'>
//         <h4>Component M</h4>
//         <h3>{JSON.stringify(obj)}</h3>
//         <button onClick={handleObj}>
//             Change Obj
//         </button>
//     </div>
// )






// const [obj, setObj] = React.useState({ a: 1, b: 1 })

// useEffect(() => {
//     console.log('obj changed')
// }, [obj])

// const handleObj = () => {
// const objClone = {...obj}
//     objClone.a = objClone.a + 1
//     setObj(objClone)
// }

// return (
//     <div className='comp-div'>
//         <h4>Component M</h4>
//         <h3>{JSON.stringify(obj)}</h3>
//         <button onClick={handleObj}>
//             Change Obj
//         </button>
//     </div>
// )