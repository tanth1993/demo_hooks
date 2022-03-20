import React, { useEffect } from 'react'

interface IProps {
    number?: number
}
const ComponentB: React.FC<IProps> = (props) => {
    const [numberState, setNumberState] = React.useState(props.number)


    return (
        <div className='comp-div'>
            <h4>Component B</h4>
            <p>prop: number </p>
            <p>{numberState}</p>
        </div>
    )
}
export default ComponentB;





// useEffect(() => {
//     setNumberState(props.number)
// }, [props.number])
















