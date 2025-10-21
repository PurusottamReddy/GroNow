import React from 'react'
import { categories } from '../assets/assets'
import { useAppContext } from '../context/AppContext'
import { useRef } from 'react'

const Categories = () => {

    const {navigate} = useAppContext()
    const scrollRef = useRef(null)

    const scroll = (scrollOffset) => {
        scrollRef.current.scrollLeft += scrollOffset
    }

  return (
    <div className='mt-15'>
      <div className="flex items-center justify-between">
        <p className='text-2xl md:text-3xl font-medium'>Categories</p>
        <div className="flex items-center gap-2">
          <button onClick={()=> scroll(-200)} className='bg-gray-200 px-1.5 py-0.5 rounded-full shadow-md hover:bg-gray-300 transition'>{'<'}</button>
          <button onClick={()=> scroll(200)} className='bg-gray-200 px-1.5 py-0.5 rounded-full shadow-md hover:bg-gray-300 transition'>{'>'}</button>
        </div>
      </div>
      <div className='relative'>
        <div ref={scrollRef} className='flex overflow-x-scroll no-scrollbar mt-6 gap-6 py-2'>

          {categories.map((category, index)=>(
              <div key={index} className='group cursor-pointer py-5 px-3 gap-2 rounded-lg flex flex-col justify-center items-center min-w-[150px] border border-gray-200 shadow-md hover:shadow-lg hover:scale-105 transition-all duration-300 ease-in-out'
              style={{backgroundColor: `hsl(${index * 40 + 120}, 60%, 80%)`}}
              onClick={()=>{
                  navigate(`/products/${category.path.toLowerCase()}`);
                  scrollTo(0,0)
              }}
              >
                  <img src={category.image} alt={category.text} className='group-hover:scale-108 transition max-w-28'/>
                  <p className='text-sm font-medium'>{category.text}</p>
              </div>
                      
          ))}

          
        </div>
      </div>
    </div>
  )
}

export default Categories
