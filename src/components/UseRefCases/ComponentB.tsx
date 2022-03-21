import React, { useEffect } from 'react'

export default function ComponentB() {
    const [value, setValue] = React.useState("");
    const prevValue = React.useRef(""); // { current: "" }

    useEffect(() => {
        prevValue.current = value;
        console.log('useEffect', prevValue.current)
    }, [value]);

    return (
        <div className='div'>
            {console.log('render', prevValue.current)}
            <div>
                {['aaa', 'bbb', 'ccc', 'ddd'].map(_ => {
                    return <div key={_}>
                        <input type="radio" value={_} checked={_ === value} onChange={() => setValue(_)} />
                        {_}
                    </div>
                })}
            </div>
            <h2>Current Value: {value}</h2>
            <h2>Previous Value: {prevValue.current}</h2>
        </div>
    );
}
