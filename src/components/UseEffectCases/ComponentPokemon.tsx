import React, { useEffect, useState } from 'react'
import { Repo, serializeObj } from '../../Utils'
interface IData {
    count?: number
    results?: IResult[]
}
interface IResult {
    name?: string
    url?: string
}

export default function ComponentPokemon(props) {
    const [data, setData] = useState<IResult[]>([])
    const [limit, setLimit] = useState(5) //pageSize
    const [offset, setOffset] = useState(0) //paging

    useEffect(() => {
        console.log('limit changed')
        const callAPI = async () => {
            const obj = serializeObj({ limit, offset })
            let rsp: IData = await Repo.api_call_get(obj)
            setData(rsp.results)
        }
        callAPI()
    }, [limit])

    useEffect(() => {
        console.log('offset changed')
        const callAPI = async () => {
            const obj = serializeObj({ limit, offset })
            let rsp: IData = await Repo.api_call_get(obj)
            setData(rsp.results)
        }
        callAPI()
    }, [offset])

    useEffect(() => {
        const callAPI = async () => {
            const obj = serializeObj({ limit, offset })
            let rsp: IData = await Repo.api_call_get(obj)
            setData(rsp.results)
        }
        callAPI()
    }, [])

    const limits = [5, 10, 15, 20, 25]
    const offsets = [0, 10, 20, 30, 40]

    return (
        <div className='div'>
            <h4>Component Pokemon</h4>
            <div className="d-flex">
                <div className="">
                    <h4>Limit</h4>
                    <div className="opts">
                        {limits?.map(l => {
                            return <label key={l + 'l'}>
                                <input type="radio"
                                    checked={l === limit}
                                    value={limit}
                                    name={l + 'l'}
                                    id={l + 'l'}
                                    onChange={() => setLimit(l)} />
                                {l}
                            </label>
                        })}
                    </div>
                </div>
                <div className="">
                    <h4>Offset</h4>
                    <div className="opts">
                        {offsets?.map(o => {
                            return <label key={o + 'o'}>
                                <input type="radio"
                                    checked={o === offset}
                                    value={offset}
                                    name={o + 'o'}
                                    id={o + 'o'}
                                    onChange={() => setOffset(o)} />
                                {o}
                            </label>
                        })}
                    </div>
                </div>
            </div>
            <ol>
                {data.map(d => {
                    return <li key={d?.name}>
                        <p>{d?.name}</p>
                        <p>{d?.url}</p>
                    </li>
                })}

            </ol>
        </div>
    )
}




// const isMounted = React.useRef(false) // { current: false }
// useEffect(() => {
//     if (!isMounted.current) return
//     console.log('limit changed')
//     const callAPI = async () => {
//         const obj = serializeObj({ limit, offset })
//         let rsp: IData = await Repo.api_call_get(obj)
//         setData(rsp.results)
//     }

//     callAPI()
// }, [limit])
// useEffect(() => {
//     if (!isMounted.current) return
//     console.log('offset changed')
//     const callAPI = async () => {
//         const obj = serializeObj({ limit, offset })
//         let rsp: IData = await Repo.api_call_get(obj)
//         setData(rsp.results)
//     }

//     callAPI()
// }, [offset])
// useEffect(() => {
//     const callAPI = async () => {
//         const obj = serializeObj({ limit, offset })
//         let rsp: IData = await Repo.api_call_get(obj)
//         setData(rsp.results)
//     }

//     callAPI()
//     isMounted.current = true
// }, [])








//     useEffect(() => {
//         console.log('limit changed')
//         const callAPI = async () => {
//             const obj = serializeObj({ limit, offset })
//             let rsp: IData = await Repo.api_call_get(obj)
//             setData(rsp.results)
//         }
//         callAPI()
//     }, [limit])

//     useEffect(() => {
//         console.log('offset changed')
//         const callAPI = async () => {
//             const obj = serializeObj({ limit, offset })
//             let rsp: IData = await Repo.api_call_get(obj)
//             setData(rsp.results)
//         }
//         callAPI()
//     }, [offset])
//     useEffect(() => {
//         const callAPI = async () => {
//             const obj = serializeObj({ limit, offset })
//             let rsp: IData = await Repo.api_call_get(obj)
//             setData(rsp.results)
//         }
//         callAPI()
//     }, [])







// useEffect(() => {
//     console.log('limit || offset  changed')
//     const callAPI = async () => {
//         const obj = serializeObj({ limit, offset })
//         let rsp: IData = await Repo.api_call_get(obj)
//         setData(rsp.results)
//     }

//     callAPI()
// }, [limit, offset])