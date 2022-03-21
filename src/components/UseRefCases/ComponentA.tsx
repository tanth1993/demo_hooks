import React, { useEffect } from 'react'

export default function ComponentA() {
    const [isShow, setIsShow] = React.useState(false)

    const ref_element = React.useRef<HTMLDivElement>(null)

    // useEffect(() => {
    //     console.log(ref_element.current.clientWidth)
    // }, [])

    return (
        <div className='comp-wrapper'>
            <div className='comp-div'>
                <h4>Component A UseRef</h4>
                <button onClick={() => setIsShow(!isShow)}>
                    Show/Hide Component
                </button>
                {isShow && <div className="comp-div" ref={ref_element}>
                    <h4>ref_element here</h4>
                </div>}
            </div>
        </div>
    )
}
