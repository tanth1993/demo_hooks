import React, { useEffect, useState } from 'react'
import useAsync from './useAsync'
import { useDebounce } from './useDebounce'
import useDidMount from './useDidMount'
import { Repo, pokemonUrl } from '../../Utils'

export default function CustomHookComponent() {
    const [value, setValue] = useState('')

    const debounceVal = useDebounce<string>(value, 1000)
    const { loading, value: data } = useAsync(() => Repo.api_call_get_by_url(pokemonUrl + '/' + debounceVal), [debounceVal])

    return (
        <div className="">
            <h3>CustomHookComponent</h3>

            <div className="">
                <h2>useDebounce</h2>
                <h4>{debounceVal}</h4>
                <input type="text" onChange={(e) => setValue(e.target.value)} />
            </div>
            <div className="">
                {!loading
                    ? <div className="imgs">
                        <h2>{data?.name}</h2>
                        {Object.values(data?.sprites || {})?.filter(s => typeof s === 'string')?.map((img: string, i) => {
                            return <img key={i} src={img} width={150} height={150} />
                        })}
                    </div>
                    : <h1>Loading............... Data</h1>}
            </div>
        </div>
    )
}
