import React, { useEffect, useState } from 'react'
import { useQuery } from 'react-query'
import { Repo, jsonUrl } from '../../Utils'



export default function ComponentUsers() {
    const callApi = () => Repo.api_call_get_by_url(jsonUrl + '/' + 'users')

    // const { data, isLoading } = useQuery<any>(['users'], callApi)

    const [data, setData] = useState([])
    const [isLoading, setIsLoading] = useState(false)

    useEffect(() => {
        const callApiFunc = async () => {
            setIsLoading(true)
            let rsp = await callApi()
            setData(rsp)
            setIsLoading(false)
        }
        callApiFunc()
    }, [])

    return <div className="div">
        <h2>ComponentUsers</h2>
        {!isLoading
            ? data?.map((d, i) => {
                return <div key={i} className="">
                    <span>id: {d?.id} </span>
                    <span>name: {d?.title || d?.name}</span>
                    <hr />
                </div>
            })
            : <h3>Loading ...........</h3>}
    </div>
}
