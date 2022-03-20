import React, { useEffect, useState } from 'react'

export default function ComponentB() {


    useEffect(() => {
        console.log(' mounted')

        return () => { console.log('unmounted') }
    }, [])

    return (
        <div className='comp-div'>
            <h4>Component B</h4>
            {/* <h3 className='sticky'>{height}</h3> */}
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam quidem ad cumque repellat adipisci rem, eligendi ullam nesciunt sequi a et, laudantium necessitatibus blanditiis facere perferendis ipsam earum sint error fugiat! Qui animi odio quasi aut sequi vitae, facilis architecto recusandae modi repellat provident commodi dolor tenetur, magnam perferendis reiciendis, asperiores et repellendus tempore sint sed laboriosam dolore! Sed, dignissimos odio. Aspernatur consequatur distinctio inventore voluptas id magni, laboriosam quam in perspiciatis possimus vero aliquid esse porro quod repellat fuga ad velit quibusdam fugiat dignissimos. Eligendi, nobis? Repellendus, aut quam commodi corporis cumque perferendis. Ipsam sunt in totam suscipit, debitis minus distinctio dignissimos delectus cum, itaque nihil? Modi similique inventore ratione quam nulla nisi pariatur, odio cum explicabo, tempora expedita iste officiis autem vero, nihil ducimus labore enim! Omnis rem cum quod. Maiores dicta voluptate perspiciatis non, sint corrupti odit obcaecati qui delectus molestiae tenetur est porro? Voluptatibus fugiat atque vero dolor assumenda, cupiditate earum tenetur velit, est recusandae quidem, sapiente saepe dolore. Ipsum architecto labore, doloremque aut quas repudiandae veritatis provident voluptatem corrupti. Tempora vero, excepturi quidem quod error repellendus distinctio doloremque aperiam cum quam, doloribus eligendi eos, asperiores quasi. Voluptatem exercitationem veniam magni at quaerat ratione nulla omnis amet laboriosam neque id incidunt tenetur voluptatibus ullam mollitia minus cum tempora culpa non vitae aspernatur quam, molestiae dolore aliquam! Placeat ex a amet, dolores magni similique maxime ea labore doloremque nihil delectus, laboriosam perferendis pariatur, dolorem ipsa asperiores blanditiis hic omnis. Asperiores, tenetur, itaque harum quidem deserunt corporis veritatis et voluptas, eum atque laudantium deleniti facilis. Dolore deserunt, odio possimus maxime numquam molestiae non praesentium, est rem repudiandae aut corporis? Rem molestiae eum suscipit obcaecati quaerat similique laudantium recusandae ex. Officiis minima dolores eius quia pariatur, tenetur, magnam porro doloremque voluptates laudantium quis, dignissimos explicabo a veritatis velit! Sequi.</p>
        </div>
    )
}







// const [height, setHeight] = useState(null)

// const handleScroll = () => {
//     setHeight(window.scrollY)
// }

// useEffect(() => {

//     window.addEventListener('scroll', handleScroll)

//     return () => { window.removeEventListener('scroll', handleScroll) }
// }, [])