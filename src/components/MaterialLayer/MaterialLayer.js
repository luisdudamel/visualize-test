import Image from 'next/image'

const MaterialLayer = ({ src, alternativeText }) => {
  return (
    <div className='flex flex-col 2xl:h-auto md:w-full w-[1240px] h-full items-center justify-center absolute'>
      <Image
        className='aspect-auto h-full'
        src={src}
        alt={alternativeText}
        width={1240}
        height={873}
      />
    </div>
  )
}

export default MaterialLayer
