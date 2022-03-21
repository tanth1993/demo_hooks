import React, { useCallback, useEffect, useState } from 'react'

function ComponentB(props: { number: number, onChange: () => void }) {
    const { number, onChange } = props

    return (
        <div className='comp-wrapper'>
            {console.log('render ComponentB')}
            <div className='comp-div'>
                <h4>Component B</h4>
                <h3>{number}</h3>
                <div className=""><button onClick={onChange}>Number++</button></div>
            </div>

        </div>
    )
}

export default ComponentB;
// export default React.memo(ComponentB);