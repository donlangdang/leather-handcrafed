import TextField from '@mui/material/TextField'
import Box from '@mui/material/Box'
import { styled } from '@mui/material'

const CustomTextField = styled(TextField)({
  '& .MuiFormLabel-root': { color: 'black', fontWeight: '500' },
  '& .Mui-focused::after': { borderBottom: '2px solid black' },
  '& .MuiInputLabel-root.Mui-focused': { color: 'black' },
  '& .MuiInputBase-root::after': { borderBottom: '2px solid black' }
})


function Request() {
  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'flex-start',
        justifyContent: 'space-between',
        flexDirection: 'column',
        height: '60%'
      }}
    >
      <Box
        sx={{
          display: 'flex',
          alignItems: 'flex-start',
          justifyContent: 'space-between',
          gap: 2
        }}
      >
        <CustomTextField id="standard-basic" label="Họ Và Tên" variant="standard" />
        <CustomTextField id="standard-basic" label="Địa Chỉ Email" variant="standard" />
      </Box>
      <CustomTextField id="standard-basic" label="Yên cầu với chúng tôi" variant="standard"
        sx={{
          width: '100%'
        }}
      />
      <CustomTextField id="standard-basic" label="Nhắn tin với chúng tôi" variant="standard"
        sx={{
          width: '100%'
        }}
      />
    </Box>
  )
}

export default Request