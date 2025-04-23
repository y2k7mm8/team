import React from 'react'

export const Animallist = () => {
  return (
  <>
    <p className="flex text-5xl justify-center top-4 uppercase">Наши мурчашие</p>
    <div className="flex flex-row justify-center items-center gap-4 border-2 border-gray-500 p-4 m-4 rounded-lg bg-gray-100 overflow-x-auto">
        <img className='w-72 h-96 object-cover' src="https://kulturologia.ru/files/u23581/2358104326.jpg" />
        <img className='w-72 h-96 object-cover' src="https://idsb.tmgrup.com.tr/ly/uploads/images/2022/05/16/205719.jpg" />
        <img className='w-72 h-96 object-cover' src="https://indoorpet.osu.edu/sites/default/files/assets/images/cats/Calico.jpg" />
        <img className='w-72 h-96 object-cover' src="https://www.vetmed.wisc.edu/wp-content/uploads/2022/12/lina-angelov-Ah_QC2v2alE-unsplash-1200x960.jpg" />
        <img className='w-72 h-96 object-cover' src="https://pettrust.uoguelph.ca/sites/default/files/iStock-472160419%20%281%29.jpg"/>
    </div>
</>
  )
}
