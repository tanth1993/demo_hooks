import React from 'react'
import ComponentB from './ComponentB'

export default function ComponentA() {
    const [number, setNumber] = React.useState(2)

    return (
        <div className='comp-div'>
            <h4>Component A</h4>
            <p>{number}</p>
            <button onClick={() => setNumber(number + 1)}>
                Number++
            </button>

            <ComponentB number={number} />
        </div>
    )
}
