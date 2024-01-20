import React from 'react'
import bg from './assets/bg-1.jpg'
import trekking from "./assets/035-trekking.png"
import tent from "./assets/024-tent.png"
import book from "./assets/028-book.png"
const Second = () => {
    return (
        <div className='section-2 relative'>
            <img src={bg} alt="" className='absolute top-0'/>
            <div>
                <div>
                    <span className='heading'>Bali Travel Time</span>
                </div>
                <div className='sub-heading'>
                    <span className='content-of-subheading'>Bavel merupakan singkatan dari Bali Travel Time merupakan website yang bertujuan mengenalkan pesona keindahan Bali mulai dari Wisata dan Budaya . Tidak hanya sarana untuk memperkanalkan, Bavel juga menyediakan berbagai layanan pemesanan tiket mulai tiket Tour dan tempat penginapan di sekitar Bali</span>
                </div>
            </div>
            <div className='group-of-cardds'>
                <div className='cardd'>
                    <img style={{ width: "7rem" }} src={trekking} alt=' ' />
                    <span><h2>ADVENTURE</h2></span>
                    <span className='dis'>Dapatkan pengalaman berpetualang yang belum pernah anda rasakan sebelumnya hanya di Bali</span>
                </div>
                <div className='cardd'>
                    <img style={{ width: "7rem" }} src={book} alt=' ' />
                    <h2>GUIDE</h2>
                    <span className='dis'>Kami memberikan info - info seputar Bali mulai dari event dan destinasi terbaik</span>
                </div>
                <div className='cardd'>
                    <img style={{ width: "7rem" }} src={tent} alt=' ' />
                    <h2> STAY</h2>
                    <span className='dis'>Anda tidak perlu kawatir akan menetap dimana karna kami menyediakan tiket Hotel terbaik</span>
                </div>
            </div>
        </div>
    )
}

export default Second
