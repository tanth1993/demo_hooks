import React, { useEffect, useState } from 'react'
import { useQuery } from 'react-query'
import { Repo, jsonUrl } from '../../Utils'
import ComponentPosts from './ComponentPosts'
import ComponentAlbums from './ComponentAlbums'
import ComponentUsers from './ComponentUsers'
import ComponentUsersThenPosts from './ComponentUsersThenPosts'

const cates = ['posts', 'albums', 'users']


export default function ComponentA() {
    const [cate, setCate] = useState(cates[0])
    const [isShow, setIsShow] = useState(false)

    const renderComponent = () => {
        const obj = {
            [cates[0]]: <ComponentPosts />,
            [cates[1]]: <ComponentAlbums />,
            [cates[2]]: <ComponentUsers />
        }
        return obj[cate]
    }

    // return <>
    //     <div className="">
    //         <button onClick={() => setIsShow(!isShow)}>SHow/Hide</button>
    //     </div>
    //     {isShow && <ComponentUsersThenPosts />}
    // </>
    return <div className="div">
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
            {renderComponent()}
        </div>

    </div>
}
