import React, { useCallback, useEffect, useState } from 'react'
import ComponentB from './ComponentB';

export default function ComponentA() {
    const [number, setNumber] = useState(9)
    const [arr, setArr] = useState<string[]>([])

    const handleChangeNumber = () => setNumber(number + 1);

    // const handleChangeNumber = useCallback(() => setNumber(number + 1), []);
    // const handleChangeNumber = useCallback((...r) => {
    //     console.log(r)
    //     setNumber(number + 1)
    // }, []);


    const handleAddArr = () => {
        const arrClone = [...arr]
        arrClone.push('abc')
        setArr(arrClone)
    }

    return (
        <div className='comp-wrapper'>
            <div className='comp-div'>
                <h4>Component A UseCallback</h4>
                <h4>{JSON.stringify(arr)}</h4>
                <div className=""><button onClick={handleAddArr}>Add</button></div>
                <ComponentB number={number} onClick={handleChangeNumber} />
            </div>

        </div>
    )
}











    // const handleChangeNumber = useCallback(() => setNumber(number => number + 1), []);