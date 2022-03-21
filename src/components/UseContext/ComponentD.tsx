import React, { useContext, useEffect } from 'react'
import { ComAContext } from './ComponentA'

export default function ComponentD() {

    const comAState = useContext(ComAContext)

    return (
        <div className='comp-div'>
            <h4>Component D</h4>
            <h3>{comAState.number}</h3>
            <h3>{comAState.str}</h3>
        </div>
    )
}
