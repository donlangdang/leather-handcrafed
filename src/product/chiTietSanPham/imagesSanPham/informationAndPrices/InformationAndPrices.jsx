import { InputBase, Typography } from '@mui/material'
import Box from '@mui/material/Box'
import Divider from '@mui/material/Divider'
import { useState } from 'react'
import AddToCart from './addToCart/AddToCart'
import Information from './information/Information'

function InformationAndPrices({ imagesGridAboutUs }) {

  const [number, setNumber] = useState(1)
  const handleAddNumber = () => {
    setNumber(number + 1)
  }
  const handleRemoveNumber = () => {
    setNumber(number - 1)
  }

  return (
    <Box
      sx={{
        width: '30%',
        padding: '1rem',
        height: '100vh',
        position: 'sticky',
        top: '4.5rem',
        display: 'flex',
        flexDirection: 'column',
        gap: 2
      }}
    >
      <Typography variant='h4' gutterBottom>
        {imagesGridAboutUs[0].itemName}
      </Typography>
      <Divider/>
      <Typography variant='h5'>
        {imagesGridAboutUs[0].prices}
      </Typography>
      <Divider/>
      <Box>
        <InputBase
          sx={{
            width: '2rem',
            height: '2rem',
            bgcolor: '#f5f5f5',
            border: '1px solid #f5f5f5',
            '& .MuiInputBase-input': {
              textAlign: 'center',
              fontWeight: '500',
              fontSize: '1.25rem',
              cursor: 'pointer'
            }
          }}
          type='button'
          value='-'
          onClick={handleRemoveNumber}
        />
        <InputBase
          sx={{
            border: '1px solid #f5f5f5',
            width: '5rem',
            height: '2rem',
            '& .MuiInputBase-input': {
              textAlign: 'center',
              fontWeight: '500',
              fontSize: '1.25rem'
            }
          }}
          type='text'
          value={number}
        />
        <InputBase
          sx={{
            width: '2rem',
            height: '2rem',
            bgcolor: '#f5f5f5',
            border: '1px solid #f5f5f5',
            '& .MuiInputBase-input': {
              textAlign: 'center',
              fontWeight: '500',
              fontSize: '1.25rem',
              cursor: 'pointer'
            }
          }}
          type='button'
          value='+'
          onClick={handleAddNumber}
        />
      </Box>
      <AddToCart />
      <Divider/>
      <Information />
    </Box>
  )
}

export default InformationAndPrices