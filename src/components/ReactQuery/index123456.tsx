import React, { useEffect, useState } from 'react'
import { Repo, jsonUrl } from '../../Utils'

const cates = ['posts', 'albums', 'users']
export default function ReactQuery() {
    const [data, setData] = useState([])
    const [cate, setCate] = useState(cates[0])

    useEffect(() => {
        const callApi = async () => {
            let rsp = await Repo.api_call_get_by_url(jsonUrl + '/' + cate)
            setData(rsp)
        }
        callApi()
    }, [cate])

    return (
        <div className="div">

            <h2>ReactQuery</h2>

            <div className="opts">
                {cates?.map(c => {
                    return <label key={c + 'o'}>
                        <input type="radio"
                            checked={c === cate}
                            value={cate}
                            name={c + 'o'}
                            id={c + 'o'}
                            onChange={() => setCate(c)} />
                        {c}
                    </label>
                })}
            </div>
            {data?.map((d, i) => {
                return <div key={i} className="">
                    <span>id: {d?.id} </span>
                    <span>name: {d?.title || d?.name}</span>
                    <hr />
                </div>
            })}
        </div>
    )
}
