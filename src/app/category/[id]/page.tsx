import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const CategoryPage = ({ params }: { params: { id: number }}) => {
  return (
    <div className="bg-base-200 bg-opacity-30 w-full h-screen">
      <div className='card md:w-[600px] shadow-xl flex bg-white py-12 px-6 items-center gap-6 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[90%]'>
      <h3 className='text-3xl font-semibold text-dark'>Select Level</h3>
      <Image src={'https://img.freepik.com/free-vector/risk-management-concept-illustration_114360-6957.jpg?t=st=1724167108~exp=1724170708~hmac=af5a6d671c56fba64d5036f9a59bab0966e937f6e96f00902363fd62c3709027&w=740'} alt="risk" width={380} height={380} className='rounded-lg'/>
      <div className="inline-flex gap-3 w-full">
        <Link href={`/quiz/${params.id}/easy`} className='btn btn-secondary flex-grow'>Easy</Link>
        <Link href={`/quiz/${params.id}/medium`} className='btn btn-secondary flex-grow'>Medium</Link>
        <Link href={`/quiz/${params.id}/hard`} className='btn btn-secondary flex-grow'>Hard</Link>
      </div>
    </div>
    </div>
  )
}

export default CategoryPage
