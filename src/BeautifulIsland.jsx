import React from 'react'
import bi from './assets/bali-island.png'
import top from './assets/texture-top.png'
import bottom from './assets/texture-bottom.png'
const BeautifulIsland = () => {
    return (
        <div className="bg-fixed bg-cover bg-center h-[30rem] flex items-center justify-center text-white gap-4 BI relative">
            <img src={top} alt="" className='top-0 absolute w-full'/>
            <div className="text-center">
                <h2 className="text-2xl font-bold mb-4 text-white">ENJOY THE BEAUTY & FRIENDLINESS OF</h2>
                <img src={bi} alt="" />
            </div>
            <img src={bottom} alt="" className='absolute bottom-0'/>
        </div>
    );
};
export default BeautifulIsland
