import React, { useEffect, useState } from 'react'
import { useQuery } from 'react-query'
import { Repo, jsonUrl } from '../../Utils'

export default function ComponentUsersThenPosts() {
    const callApiUser = () => Repo.api_call_get_by_url(jsonUrl + '/' + 'users')
    const callApiPosts = ({ queryKey }) => {
        const [key, userId] = queryKey
        return Repo.api_call_get_by_url(jsonUrl + '/' + 'posts' + '?' + 'userId=' + userId)
    }

    const { data: users, isLoading } = useQuery<any>(['users'], callApiUser)

    const userId = users?.[0]?.id
    const { data: posts, isIdle } = useQuery<any>(['posts', userId], callApiPosts, { enabled: !!userId })

    return <div className="div">
        <h2>ComponentUsersThenPosts</h2>
        <h4>isIdle: {isIdle}</h4>
        {!isLoading
            ? posts?.map((d, i) => {
                return <div key={i} className="">
                    <p>userId: {d?.userId}</p>
                    <span>id: {d?.id} </span>

                    <span>name: {d?.title || d?.name}</span>
                    <hr />
                </div>
            })
            : <h3>Loading ...........</h3>}
    </div>
}
