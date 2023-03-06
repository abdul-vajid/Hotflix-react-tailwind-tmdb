import React from 'react'
import {MdChevronLeft, MdChevronRight} from 'react-icons/md'

const SavedShows = () => {
  return (
    <div>
        <h2 className='text-white font-bold md:text-xl p-4'>My Shows</h2>
            <div className='relative flex items-center group'>
                <MdChevronLeft onClick={slideLeft} className='bg-white rounded-full absolute opacity-50 hover:opacity-100 cursor-pointer z-10 hidden group-hover:block' size={40}/>
                <div id={'slider'} className='w-full left-0 h-full overflow-x-scroll whitespace-nowrap scroll-smooth scrollbar-hide'>
                    {movies.map((item, id) => (
                        <Movie key={id} item={item}/>
                    ))}
                </div>
                <MdChevronRight onClick={slideRight} className='bg-white right-0 rounded-full absolute opacity-50 hover:opacity-100 cursor-pointer z-10 hidden group-hover:block' size={40}/>
            </div>
    </div>
  )
}

export default SavedShows