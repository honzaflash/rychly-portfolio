import { Box, BoxProps } from '@mui/material'
import { RefObject, createRef } from 'react'
import { mergeSxProps } from '../../utils'
import _ from 'lodash'
import { CoolArtSwitch } from './CoolArtSwitch'
import { useCoolArtContext } from './CoolArt'


export const coolArtTarget: RefObject<HTMLDivElement | undefined> = createRef()

export const CoolArtTarget = ({ sx, ...rest }: BoxProps) => {
  const { hidden } = useCoolArtContext()
  return (
    <Box
      ref={coolArtTarget}
      sx={mergeSxProps({
        width: '100%',
        height: '100%',
        position: 'relative',
        ...(hidden ? { minHeight: { xs: '9em', md: undefined } } : undefined),
        transition: '400ms min-height',
      }, sx)}
      {...rest}
    >
      <CoolArtSwitch sx={{ position: 'absolute', top: '3.5em', right: '-4.2em', transform: 'rotate(90deg)' }} />
    </Box>
  )}


/** Return position of the target box relative to the canvas and its dimensions */
export const getArtTargetPosition = (canvasRect: DOMRect) => {
  if (!coolArtTarget.current)
    return undefined
  const targetRect = coolArtTarget.current.getBoundingClientRect()
  return _.mapValues({
    left: targetRect.left - canvasRect.left,
    top: targetRect.top - canvasRect.top,
    width: targetRect.width,
    height: targetRect.height,
  }, (x) => Math.round(x))
}

