import { createContext, useContext, useEffect, useRef } from 'react'
import { getRendererDomElement, updateRendererSize } from './three-main'
import { Box, BoxProps } from '@mui/material'
import { mergeSxProps } from '../../utils'


export const CoolArtContext = createContext({ hidden: false, setHidden: (val: boolean) => { val; return } })
export const useCoolArtContext = () => useContext(CoolArtContext)

export const CoolArt = ({ sx, ...rest }: BoxProps) => {
  const canvasContainer = useRef<HTMLDivElement>()
  const handleWindowResize = () => {
    if (canvasContainer.current)
      updateRendererSize(canvasContainer.current.offsetWidth, canvasContainer.current.offsetHeight)
  }
  // Attach the Three.js canvas to this container through a ref
  useEffect(() => {
    canvasContainer.current?.appendChild(getRendererDomElement())
    handleWindowResize() // also set the size
  }, [canvasContainer.current])

  // Handle canvas resizing
  useEffect(() => {
    handleWindowResize()
    window.addEventListener('resize', handleWindowResize)
    return () => window.removeEventListener('resize', handleWindowResize)
  }, [canvasContainer, canvasContainer.current])

  const { hidden } = useCoolArtContext()

  return (
    <Box
      {...rest}
      ref={canvasContainer}
      sx={mergeSxProps({
        position: 'absolute',
        zIndex: '-1',
        top: 0,
        left: 0,
        width: '100%',
        overflowX: 'hidden',
        visibility: hidden ? 'hidden' : 'visible',
        opacity: hidden ? 0 : 1,
        transition: '400ms opacity',
      }, sx)}
    />
  )
}
