import Box from '@mui/material/Box'

function SideBar({ imagesGridAboutUs }) {
  return (
    <Box
      sx={{
        height: '100vh',
        width: '10%',
        display: 'flex',
        alignItems: 'flex-start',
        justifyContent: 'flex-start',
        flexDirection: 'column',
        gap: 1,
        position: 'sticky',
        top: '4.5rem'
      }}
    >
      {imagesGridAboutUs.map((imagesGridAboutU) => (
        <Box
          component='img'
          src={imagesGridAboutU.url}
          sx={{
            width: '100%',
            aspectRatio: '1/1',
            objectFit: 'cover',
            objectPosition: 'center',
            cursor: 'pointer'
          }}
          key={imagesGridAboutU.title}
        />
      ))}
    </Box>
  )
}

export default SideBar