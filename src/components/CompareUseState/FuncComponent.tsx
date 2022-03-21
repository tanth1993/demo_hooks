import React from 'react'

function FuncComponent() {

    const [number, setNumber] = React.useState(0) // renderExample1

    // const [obj, setObj] = React.useState({ a: 1, b: 1 }) // renderExample2


    const renderExample1 = () => {
        return <>
            <div className="">{`onClick={() => setNumber(number + 1)}`}</div>
            <h3>{number}</h3>
            <button onClick={() => setNumber(number + 1)}>
                Number++
            </button></>
    }

    // const renderExample11 = () => {
    //     return <>
    //         <div className="">{`onClick={() => setNumber(prevNumber => prevNumber + 1)}`}</div>
    //         <h3>{number}</h3>
    //         <button onClick={() => setNumber(prevNumber => prevNumber + 1)}>
    //             Number++
    //         </button></>
    // }


    // const renderExample2 = () => {
    //     const upA = () => {
    //         obj.a = obj.a + 1
    //         setObj(obj)
    //     }

    //     const upB = () => {
    //         obj.b = obj.b + 1
    //         setObj(obj)
    //     }

    //     return <>
    //         <div className="">{``}</div>

    //         <pre>{` const upA = () => {
    //         obj.a = obj.a + 1
    //         setObj(obj)
    //     }`}</pre>

    //         <pre>{` const upB = () => {
    //         obj.b = obj.b + 1
    //         setObj(obj)
    //     }`}</pre>

    //         <h3>a: {obj.a}</h3>
    //         <h3>b: {obj.b}</h3>

    //         <button onClick={upA}>
    //             a Up
    //         </button>
    //         <button onClick={upB}>
    //             b Up
    //         </button>
    //     </>
    // }

    // const renderExample2Answer = () => {
    //     const upA = () => {
    //         setObj({
    //             ...obj,
    //             a: obj.a + 1
    //         })
    //     }

    //     const upB = () => {
    //         obj.b = obj.b + 1
    //         setObj({
    //             ...obj,
    //             b: obj.b + 1
    //         })
    //     }

    //     return <>
    //         <div className="">{``}</div>

    //         <pre>{`const upA = () => {
    //         setObj({
    //             ...obj,
    //             a: obj.a + 1
    //         })
    //     }`}</pre>

    //         <pre>{`const upB = () => {
    //         obj.b = obj.b + 1
    //         setObj({
    //             ...obj,
    //             b: obj.b + 1
    //         })
    //     }`}</pre>

    //         <h3>a: {obj.a}</h3>
    //         <h3>b: {obj.b}</h3>

    //         <button onClick={upA}>
    //             a Up
    //         </button>
    //         <button onClick={upB}>
    //             b Up
    //         </button>
    //     </>
    // }


    return <div className=''>
        <h2>Functional Component</h2>
        {renderExample1()}
        {/* {renderExample11()} */}

        {/* {renderExample2()} */}
        {/* {renderExample2Answer()} */}
    </div>
}

export default FuncComponent