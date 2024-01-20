import React from 'react'

const CardContainer = () => {
    return (
        <div className="p-4">
            <div className="flex gap-8 flex-wrap justify-evenly">
                <div className="flex card h-[20rem] w-[15rem] shadow-md rounded-md">
                    <div className="flex flex-col mt-auto text-white justify-center items-center flex-1 hover:h-[15rem] duration-150 overlay">
                        <span>DESTINATION</span>
                        <div className="h-[3px] bg-orange-500 w-[2rem]"></div>
                        <span>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima, incidunt.</span>
                    </div>
                </div>
                <div className="flex card h-[20rem] w-[15rem] shadow-md rounded-md">
                    <div className="flex flex-col mt-auto text-white justify-center items-center flex-1 hover:h-[15rem] duration-150">
                        <span>DESTINATION</span>
                        <div className="h-[3px] bg-orange-500 w-[2rem]"></div>
                        <span>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima, incidunt.</span>
                    </div>
                </div>
                <div className="flex card h-[20rem] w-[15rem] shadow-md rounded-md">
                    <div className="flex flex-col mt-auto text-white justify-center items-center flex-1 hover:h-[15rem] duration-150">
                        <span>DESTINATION</span>
                        <div className="h-[3px] bg-orange-500 w-[2rem]"></div>
                        <span>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima, incidunt.</span>
                    </div>
                </div>
                <div className="flex card h-[20rem] w-[15rem] shadow-md rounded-md">
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
