import React, { createContext } from 'react'
import ComponentB from './ComponentB'



interface IContext {
    number: number
    str: string
}

export const ComAContext = createContext<IContext>(null)
export default function ComponentA() {
    const [number, setNumber] = React.useState(3)
    const [strValue, setStrValue] = React.useState("")


    return (
        <ComAContext.Provider value={{ number, str: strValue }}>
            <div className='comp-div'>
                <h4>Component A UseContext</h4>
                <h3>{number}</h3>
                <div className="">
                    <button onClick={() => setNumber(number + 1)}>Number++</button>
                </div>
                <input type="text" onChange={(e) => setStrValue(e.target.value)} />
                <ComponentB />
            </div>
        </ComAContext.Provider>
    )
}
