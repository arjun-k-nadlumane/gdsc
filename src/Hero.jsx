import React from 'react'

const Hero = () => {
  return (
    <div className="h-screen flex flex-col hero">
        <nav>
        <div class="brand font-bold">Bali Travel Time</div>
        <div class="nav-items gap-6 font-bold ml-[15rem]">
          <a href="#" className="nav-item">DESTINATION</a>
          <a href="#" className="nav-item">GALLERY</a>
          <a href="#" className="nav-item">DISCOVER</a>
          <a href="#" className="nav-item">NEWS</a>
          <button className="nav-item login-btn rounded-full border border-white w-[8rem] p-2 text-center">Login</button>
        </div>
      </nav>
      <div className="h-full p-4 flex flex-col justify-center ml-[10rem] w-fit gap-2">
        <span className="font-bold text-5xl">GREAT</span>
        <span className="font-bold text-5xl">ART</span>
        <span className="font-bold text-5xl">OF</span>
        <span className="font-bold text-5xl">BALI</span>
        <span>Telusuri Keindahan Bali Yang <br /> Belum Pernah Anda Temui Sebelumnya</span>
        <button className='p-2 shadow-lg bg-orange-500 rounded-full text-white hover:shadow-xl duration-150 hover:bg-orange-700 w-fit px-5'>See our vacation</button>
      </div>
    </div>
  )
}

export default Hero
