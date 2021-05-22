import React ,{useState}from 'react'
import {
  HeroContainer,
  HeroBg,
  VideoBg,
  HeroContent,
  HeroH1,
  HeroP,
  HeroBtnWrapper,
  ArrowForward,
  ArrowRight
} from './HeroElements';
import Video from '../../videos/video.mp4';
import {Button} from '../ButtonElements';
const HeroSection = () => {
    const [hover, setHover] = useState(false)
    const onHover=()=>{
        setHover(!hover)

    }
    return (
        <HeroContainer>
            <HeroBg>
                <VideoBg autoPlay loop muted src={Video} type='video/mp4' />
            </HeroBg>
            <HeroContent>
                <HeroH1>UMPA</HeroH1>
                <HeroP>
                    음악 SNS
                </HeroP>
                <HeroBtnWrapper>
                    <Button 
                        to= 'signup' 
                        onMouseEnter={onHover} 
                        onMouseLeader={onHover}
                        primary='true'
                        dark='true'
                        >
                        Get started {hover ? <ArrowForward/> : <ArrowRight/>}
                    </Button>
                </HeroBtnWrapper>
            </HeroContent>
        </HeroContainer>
    )
} 

export default HeroSection
