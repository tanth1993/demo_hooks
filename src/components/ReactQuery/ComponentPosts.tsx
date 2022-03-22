import React, { useEffect, useState } from 'react'
import { useQuery } from 'react-query'
import { Repo, jsonUrl } from '../../Utils'



export default function ComponentPosts() {
    const callApi = () => Repo.api_call_get_by_url(jsonUrl + '/' + 'posts')

    // const { data, isLoading } = useQuery<any>(['posts'], callApi)

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
        <h2>ComponentPosts</h2>
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
