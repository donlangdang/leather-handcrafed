import ChevronLeftIcon from '@mui/icons-material/ChevronLeft'
import ChevronRightIcon from '@mui/icons-material/ChevronRight'
import { keyframes } from '@mui/material'
import { useEffect, useRef, useState } from 'react'
import Title from './title/Title'
import Cards from './cards/Cards'
import { Box, ButtonBase } from '@mui/material'


const bannerKeyFrame = keyframes`
  from {
    opacity: 1;
    height: 30%;
    width: 10%;
    bottom: 5%;
    right: 50%;
  }
  to {
    opacity: 1;
    height: 100%;
    width: 100%;
    bottom: 0px;
    right: 0%;
  }
`

function BannerSlider({ images }) {

  const [currentImage, setCurrentImage] = useState(0)
  const nextImage = () => {
    const nextIndex = (currentImage + 1) % images.length
    setCurrentImage(nextIndex)
  }
  const prevImage = () => {
    const prevIndex = (currentImage - 1 + images.length) % images.length
    setCurrentImage(prevIndex)
  }

  // React thực hiện render component theo từng bước.
  // Bước 1: Render component và khởi tạo state.
  //   đầu tiên khi render component thì imageRef.current là undefined vì chưa được gọi callback useEffect
  // Bước 2: Khởi tạo các hook, bao gồm cả useEffect.
  //   render xong thì tạo các hook thì callback useEffect được thực thi sau khi dependences so với imageRef.current giá trị là undefined
  // Bước 3: Chạy các callback function của các hook.

  const imageRef = useRef()
  useEffect(() => {
    imageRef.current = currentImage
  }, [currentImage])

  return (
    <Box
      sx={{
        width: '100%',
        aspectRatio: '16/9',
        top: '0',
        zIndex: 0,
        position: 'relative',
        overflow: 'hidden'
      }}
    >
      <Box
        sx={{
          backgroundImage: `linear-gradient(0, rgba(0,0,0,0.3), rgba(0,0,0,0.3)),
            url(${images[imageRef.current]?.url})`,
          width: '100%',
          height: '100%',
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center'
        }}
        key={currentImage - 1}
      >
        <Box
          sx={{
            backgroundImage: `linear-gradient(0, rgba(0,0,0,0.3), rgba(0,0,0,0.3)), url(${images[currentImage]?.url})`,
            width: '100%',
            height: '100%',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center',
            animation: `${bannerKeyFrame} 0.5s ease-in-out 1 forwards`,
            position: 'absolute'
          }}
          key={currentImage + 1}
        ></Box>
        <Title titleDescription={images[currentImage]} key={currentImage}/>
        <Cards images={images} currentImage={currentImage}/>
        <Box
          sx={{
            position: 'absolute',
            right: 'calc(50% + 10% + 20px)',
            bottom: 'calc(15% + 50px)',
            transform: 'translate(0, 50%)',
            gap: 1,
            display: 'flex'
          }}
        >
          <ButtonBase
            sx={{
              bgcolor: '#994D1C',
              borderRadius: '50%',
              border: '1px solid #6B240C',
              color: 'white'
            }}
            onClick={prevImage}
          >
            <ChevronLeftIcon fontSize='large'/>
          </ButtonBase>
          <ButtonBase
            sx={{
              bgcolor: '#994D1C',
              borderRadius: '50%',
              border: '1px solid #6B240C',
              color: 'white'
            }}
            onClick={nextImage}
          >
            <ChevronRightIcon fontSize='large'/>
          </ButtonBase>
        </Box>
      </Box>
    </Box>
  )
}

export default BannerSlider