import React from 'react'
import Title from './utils/Title'
import Item from './utils/Item'

const Sales = ({ ifExists ,endpoint:{title, items }} ) => {
  return (
    <>
     <div className='nike-container '>
        <Title title={title}  />
        <div className={`grid items-center justify-items-center  gap-7 lg:gap-5  mt-7 
        ${ ifExists ? 'grid-cols-3 xl:grid-cols-2 md:grid-cols-1' : 'grid-cols-4 xl:grid-cols-3 md:grid-cols-2 sm:grid-cols-1' }`}>
            {/* data içindeki item dan gelen verileri mapleyip direk item objesi
            içindeki öğeleri çekmeye yarıyor.
            Yani item objesini önce sayfaya prop olarak gönderip 
            orada parçalamaktansa burda kısa yoldan yapıyoruz. Yukarıda neden yapmadık çünkü o tek bir öğeydi. */}
            {items?.map((item,i) => (
            <Item {...item} key={i} ifExists={ifExists} />

            ))}
        </div>
     </div>
    </>
  )
}

export default Sales