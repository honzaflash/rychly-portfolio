import { SxProps, Theme } from '@mui/material'


export const mergeSxProps = (sx1?: SxProps<Theme>, sx2?: SxProps<Theme>) => {
  if (Array.isArray(sx1)) {
    if (Array.isArray(sx2)) {
      return [...sx1, ...sx2]
    }
    return [...sx1, sx2]
  }

  if (Array.isArray(sx2)) {
    return [sx1, ...sx2]
  }
  return [sx1, sx2]
}
