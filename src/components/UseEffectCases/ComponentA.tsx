import React, { useEffect } from 'react'
import ComponentB from './ComponentB'

export default function ComponentA() {
    const [number, setNumber] = React.useState(11)

    useEffect(() => {
        console.log('number changed')
    }, [number])

    useEffect(() => {
        console.log('run once')
    }, [])

    return (
        <div className='comp-wrapper'>
            <div className='comp-div'>
                <h4>Component A</h4>
                <p>{number}</p>
                <button onClick={() => setNumber(number + 1)}>
                    Number++
                </button>
            </div>
        </div>
    )
}


// const [number, setNumber] = React.useState(11)
//     const [str, setStr] = React.useState('')

//     useEffect(() => {
//         console.log('useEffect runs')
//     }, [number, str])

//     useEffect(() => {
//         console.log('run once')
//     }, [])

//     return (
//         <div className='comp-wrapper'>
//             <div className='comp-div'>
//                 <h4>Component A</h4>
//                 <p>{number}</p>
//                 <p>{str}</p>
//                 <button onClick={() => setNumber(number + 1)}>
//                     Number++
//                 </button>
//                 <br /><input type="text" onChange={(e) => setStr(e.target.value)} />
//             </div>
//         </div>
//     )







// const [number, setNumber] = React.useState(11)
// const [isToggle, setIsToggle] = React.useState(false)

// useEffect(() => {
//     console.log('number changed')
// }, [number])

// useEffect(() => {
//     console.log('run once')
// }, [])

// return (
//     <div className='comp-wrapper'>
//         <div className='comp-div'>
//             <h4>Component A</h4>
//             <p>{number}</p>
//             <button onClick={() => setNumber(number + 1)}>
//                 Number++
//             </button>
//             <br />
//             <button onClick={() => setIsToggle(!isToggle)}>
//                 Show/Hide Component B
//             </button>
//             <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium ut labore quas id explicabo porro odio non exercitationem, quae magnam aliquam dolorum odit dignissimos accusamus culpa eaque nesciunt veritatis aut nulla totam in veniam! Optio nostrum debitis obcaecati esse! Alias harum voluptatibus consectetur doloribus consequatur commodi omnis quae inventore expedita enim eveniet provident voluptate nostrum fugiat eaque ducimus possimus unde laboriosam asperiores aliquid, distinctio iure molestias. Fuga quibusdam voluptates corporis. Alias nobis pariatur sint quis maxime voluptatibus vel blanditiis officia, veritatis eos assumenda ad inventore quidem similique? At earum molestiae quae laborum corporis ut, doloribus officia odit, quisquam molestias voluptatum porro, blanditiis inventore voluptatem modi possimus. Vitae libero cupiditate et, nesciunt odit aliquam laudantium quos accusantium blanditiis tenetur possimus numquam iste quaerat. Optio quo dolores fugiat nesciunt, ipsa explicabo accusantium reprehenderit maiores, tenetur consequatur quis recusandae tempore vitae aliquam soluta quas dignissimos quasi? Libero molestiae harum soluta. Quia cupiditate ex perferendis unde quisquam quo esse cum molestiae enim maiores non saepe, debitis voluptas, corrupti illum facilis commodi possimus, voluptates repellat.</p>
//         </div>
//         {isToggle && <ComponentB />}
//     </div>
// )