// import ChevronLeftIcon from '@mui/icons-material/ChevronLeft'
import ChevronRightIcon from '@mui/icons-material/ChevronRight'
import { useEffect, useRef, useState } from 'react'
import Title from './title/Title'
import Cards from './cards/Cards'
import { animation } from '~/components/animation/Animation'
import { useMediaQuery } from '@mui/material'
import { Box, ButtonBase } from '@mui/material'


function BannerSlider({ images }) {

  const [currentImage, setCurrentImage] = useState(0)
  const [currentAnimation, setCurrentAnimation] = useState()
  const [currentCard, setCurrentCard] = useState(animation.nextCardKeyFrame)
  const nextImage = () => {
    setCurrentCard(animation.nextCardKeyFrame)
    setCurrentAnimation(animation.nextBannerKeyFrame)
    const nextIndex = (currentImage + 1) % images.length
    setCurrentImage(nextIndex)
  }
  // const prevImage = () => {
  //   setCurrentCard(animation.prevCardKeyFrame)
  //   setCurrentAnimation(animation.prevBannerKeyFrame)
  //   const prevIndex = (currentImage - 1 + images.length) % images.length
  //   setCurrentImage(prevIndex)
  // }

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

  const mobile = useMediaQuery((theme) => theme.breakpoints.down('sm'))

  return (
    <Box
      sx={{
        width: '100%',
        aspectRatio: mobile ? '2/3' : '16/9',
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
            animation: `${currentAnimation} 0.5s ease-in-out 1 forwards`,
            position: 'absolute'
          }}
        ></Box>
        <Title titleDescription={images[currentImage]} mobile={mobile} key={currentImage}/>
        {mobile ?
          <></> :
          <Cards images={images} currentImage={currentImage} currentCard={currentCard}/>
        }
        <Box
          sx={{
            position: 'absolute',
            right: mobile ? '50%' : 'calc(50% + 10% + 20px)',
            bottom: mobile ? '10%' : 'calc(15% + 50px)',
            transform: mobile ? 'translate(50%, 0)' : 'translate(0, 50%)',
            gap: 1,
            display: 'flex'
          }}
        >
          {/* <ButtonBase
            sx={{
              bgcolor: '#994D1C',
              borderRadius: '50%',
              border: '1px solid #6B240C',
              color: 'white'
            }}
            onClick={prevImage}
          >
            <ChevronLeftIcon fontSize='large'/>
          </ButtonBase> */}
          <ButtonBase
            sx={{
              bgcolor: 'white',
              borderRadius: '50%',
              color: 'white'
            }}
            onClick={nextImage}
          >
            <ChevronRightIcon fontSize='large' sx={{ color: 'black' }}/>
          </ButtonBase>
        </Box>
      </Box>
    </Box>
  )
}

export default BannerSlider