import Image from 'next/image'

const MaterialSample = ({ material }) => {
  return (
    <div className='flex items-center'>
      <button
        type='button'
        className='bg-white text-s text-left rounded border-[3px] border-white overflow-hidden focus-visible:overflow-visible h-[70px] w-[70px]'
      >
        <Image
          className='rounded'
          height={80}
          width={80}
          alt={`${material}material sample`}
          src={material}
        />
        Seleccionar el material
      </button>
    </div>
  )
}

export default MaterialSample
