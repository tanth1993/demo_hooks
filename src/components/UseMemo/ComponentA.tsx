import React, { useCallback, useEffect, useState } from 'react'

export default function ComponentA() {
    const [number, setNumber] = useState(9)
    const [arr, setArr] = useState<string[]>([])

    const heavyDuty = (r) => {
        console.log(r)
        let num = 1
        console.log("heavyDuty...");
        for (let i = 0; i < 2000000000; i++) {
            num += 1;
        }
        return num;
    };

    const calculation = React.useMemo((...r) => heavyDuty(r), []);

    const handleAddArr = () => {
        const arrClone = [...arr]
        arrClone.push('abc')
        setArr(arrClone)
    }
    return (
        <div className='comp-wrapper'>
            <div className='comp-div'>
                <h4>Component A UseMemo</h4>
                <div className="">
                    {calculation}
                </div>
                <h3>{number}</h3>
                <h4>{JSON.stringify(arr)}</h4>
                <div className="">
                    <button onClick={() => setNumber(n => n + 1)}>Number++++</button>
                </div>
                <div className="">
                    <button onClick={handleAddArr}>Add Arr</button>
                </div>
            </div>

        </div>
    )
}










