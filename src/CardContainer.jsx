import React from 'react'

const CardContainer = () => {
    return (
        <div className="p-4 flex flex-col gap-4 items-center">
            <div className="h-[3px] w-[10rem] bg-orange-800"/>
            <span className="text-3xl font-bold">DISCOVERY BALI</span>
            <span className="text-xl">Adalah sebuah warisan indahnya alam dan budaya yang masih terjaga di Bali yang dapat anda jelajahi</span>
            <div className="flex gap-2 flex-wrap justify-center">
                <div className="flex card h-[20rem] w-[20rem] p-4 shadow-md rounded-md">
                    <div className="flex flex-col mt-auto text-white justify-center items-center flex-1 hover:h-[15rem] duration-150 overlay">
                        <span>DESTINATION</span>
                        <div className="h-[3px] bg-orange-500 w-[2rem]"></div>
                        <span>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima, incidunt.</span>
                    </div>
                </div>
                <div className="flex card h-[20rem] w-[20rem] p-4 shadow-md rounded-md">
                    <div className="flex flex-col mt-auto text-white justify-center items-center flex-1 hover:h-[15rem] duration-150">
                        <span>DESTINATION</span>
                        <div className="h-[3px] bg-orange-500 w-[2rem]"></div>
                        <span>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima, incidunt.</span>
                    </div>
                </div>
                <div className="flex card h-[20rem] w-[20rem] p-4 shadow-md rounded-md">
                    <div className="flex flex-col mt-auto text-white justify-center items-center flex-1 hover:h-[15rem] duration-150">
                        <span>DESTINATION</span>
                        <div className="h-[3px] bg-orange-500 w-[2rem]"></div>
                        <span>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima, incidunt.</span>
                    </div>
                </div>
                <div className="flex card h-[20rem] w-[20rem] p-4 shadow-md rounded-md">
                    <div className="flex flex-col mt-auto text-white justify-center items-center flex-1 hover:h-[15rem] duration-150">
                        <span>DESTINATION</span>
                        <div className="h-[3px] bg-orange-500 w-[2rem]"></div>
                        <span>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima, incidunt.</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CardContainer
