import React, { useEffect } from 'react'
import ComponentC from './ComponentC'

export default function ComponentB() {


    return (
        <div className='comp-div'>
            <h4>Component B</h4>
            <ComponentC />
        </div>
    )
}
