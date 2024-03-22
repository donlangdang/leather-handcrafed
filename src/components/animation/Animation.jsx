import { keyframes } from '@mui/material'


const nextBannerKeyFrame = keyframes`
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
const prevBannerKeyFrame = keyframes`
  from {
    opacity: 1;
    height: 100%;
    width: 100%;
    bottom: 0px;
    right: 0%;
  }
  to {
    opacity: 1;
    height: 30%;
    width: 10%;
    bottom: 5%;
    right: 50%;
  }
`

const nextCardKeyFrame = keyframes`
  from {
    opacity: 1;
    transform: translate(100%, 0)
  }
  to {
    opacity: 1;
    transform: translate(0, 0)
  }
`

const prevCardKeyFrame = keyframes`
  from {
    opacity: 1;
    transform: translate(-100%, 0)
  }
  to {
    opacity: 1;
    transform: translate(0, 0)
  }
`

const titleKeyFrame = keyframes`
  from {
    opacity: 0.3;
    ${'' /* transform: translate(0, 50%); */}
    filter: blur(20px)
  }
  to {
    opacity: 1;
    ${'' /* transform: translate(0,0); */}
    filter: blur(0)
  }
`
const navBarKeyFrame = keyframes`
  from {
    opacity: 0;
    transform: translate(0, -9vh);
    filter: blur(33px)
  }
  to {
    opacity: 1;
    transform: translate(0,0);
    filter: blur(0)
  }
`
const navBarScrollKeyFrame = keyframes`
  from {
    opacity: 0;
    filter: blur(10px)
  }
  to {
    opacity: 1;
    filter: blur(0)
  }
`

export const animation = {
  nextBannerKeyFrame,
  prevBannerKeyFrame,
  nextCardKeyFrame,
  prevCardKeyFrame,
  titleKeyFrame,
  navBarKeyFrame,
  navBarScrollKeyFrame
}

