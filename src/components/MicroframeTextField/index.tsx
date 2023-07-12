import React from 'react'
import { TextField, TextFieldProps } from '@mui/material'

const MicroframeTextField: React.FC<TextFieldProps> = ({ label, placeholder }) => {
  return (
    <TextField
      size='small'
      label={label}
      placeholder={placeholder ? placeholder : (label as string)}
      sx={{
        '& .MuiInputBase-input': {
          fontSize: 12,
        },
        minWidth: '300px',
        maxWidth: '600px',
      }}
      focused
      variant='outlined'
      fullWidth
    />
  )
}

export default MicroframeTextField
