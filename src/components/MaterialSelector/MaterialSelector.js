import { faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import MaterialSample from '../MaterialSample/MaterialSample'

const MaterialSelector = ({
  materialPreviewList,
  closeSelectorAction,
  setLayers,
  currentActiveLayers,
  currentActiveLayersData
}) => {
  const setNewLayer = newLayerToSet => {
    const newLayerToAdd = materialPreviewList.materials.find(
      material => material.id === newLayerToSet
    )

    setLayers(newLayerToAdd)
  }

  return (
    <>
      <div
        onClick={() => closeSelectorAction()}
        className='fixed top-0 left-0 w-screen h-screen'
        data-testid='selector-close-area'
      >
        <button
          type='button'
          className='w-[0px] focus-visible:overflow-visible overflow-hidden'
        >
          Close material selector
        </button>
      </div>
      <div className='xl:pl-[10px] justify-center top-[110%] h-[80px] xl:h-full w-full xl:w-[150px] items-center flex xl:flex-col h-full absolute xl:top-auto xl:left-[100%]'>
        <button
          type='button'
          className='z-2 h-[30px] w-[100px] flex-2 text-start xl:text-end overflow-hidden text-[12px] focus-visible:overflow-visible'
        >
          <div className='pl-[15px] xl:pr-[15px]'>
            <FontAwesomeIcon
              className='text-white text-center text-2xl xl:rotate-0 -rotate-90'
              icon={faChevronUp}
            />
          </div>
          Go up
        </button>

        <ul
          className={
            materialPreviewList.materials.length > 2
              ? 'py-10 xl:flex-1 w-[500px] xl:w-[200px] xl:overflow-visible flex xl:flex-col gap-[10px] no-scrollbar justify-between xl:justify-start sm:justify-center overflow-auto'
              : 'py-10 xl:flex-1 w-[500px] xl:w-[200px] xl:overflow-visible flex xl:flex-col gap-[10px] no-scrollbar justify-center xl:justify-start overflow-auto'
          }
        >
          {materialPreviewList.materials.map(material => {
            return (
              <li
                key={material.id}
                className='justify-end w-[180px] sm:max-xl:w-auto text-neutral-600 flex h-[70px] flex-row '
              >
                {currentActiveLayers.includes(material.name) ? (
                  <div className='relative px-2 transition-all duration-800 w-[80px] left-[3px] text-[10px] w-full flex justify-center items-center flex h-full bg-white rounded-l border-white'>
                    {material.name}
                  </div>
                ) : (
                  <div className='hidden transition-all duration-800 xl:block relative px-2 w-[80px] left-[3px] text-[10px] w-full flex justify-center items-center flex h-full rounded-l border-white' />
                )}

                <MaterialSample
                  setLayerFunction={setNewLayer}
                  material={material}
                />
              </li>
            )
          })}
        </ul>

        <button
          type='button'
          className='z-2 h-[30px] flex-2 w-[100px] text-end xl:text-end overflow-hidden text-[12px] focus-visible:overflow-visible'
        >
          <div className='pr-[15px]'>
            <FontAwesomeIcon
              className='text-white text-center text-2xl xl:rotate-0 -rotate-90'
              icon={faChevronDown}
            />
          </div>
          Go down
        </button>
      </div>
    </>
  )
}

export default MaterialSelector
