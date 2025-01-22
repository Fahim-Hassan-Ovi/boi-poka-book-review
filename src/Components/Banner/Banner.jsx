import React from 'react'
import bannerImg from '../../assets/books.jpg'

export const Banner = () => {
    return (
        <div>
            <div className="hero bg-base-200 ">
                <div className="hero-content flex-col lg:flex-row-reverse gap-20 lg:px-28 lg:py-20 lg:h-[554px]">
                    <img
                        src={bannerImg}
                        className="w-[318px] rounded-lg shadow-2xl" />
                    <div className=''>
                        <h1 className="text-6xl font-bold">Books to freshen up your bookshelf</h1>
                        <button className="btn bg-[#23BE0A] text-xl text-white md:mt-5 lg:mt-10">View The List</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
