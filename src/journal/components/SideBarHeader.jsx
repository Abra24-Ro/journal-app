import { Toolbar, Typography } from '@mui/material'
import React from 'react'

export const SideBarHeader = ({displayName}) => {
  return (
    <Toolbar>
    <Typography
      variant="h6"
      noWrap
      component="div"
      fontWeight="bold"
      letterSpacing={1}
    >
      {displayName || "User"}
    </Typography>
  </Toolbar>
  )
}




