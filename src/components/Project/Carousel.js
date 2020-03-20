/** @jsx jsx */
import { jsx, Box, ThemeProvider, useColorMode, Button } from 'theme-ui';
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext, Image, WithStore } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';

export default p => {
  const { content, setCurrentSlide, currentSlide } = p;
  const { media  } = content;

  const getCurrentSlide = () => {
    setTimeout(() => {
      const slideIndex = parseInt(document.querySelector('.carousel__slide--visible').id);
      setCurrentSlide(slideIndex)
    }, 50);
  }

  return (
    <CarouselProvider
      sx={{
        position: 'relative'
      }}
      naturalSlideWidth={100}
      naturalSlideHeight={65}
      touchEnabled={true}
      dragEnabled={true}
      totalSlides={media.length}
    >
      <Slider>
        {
          media.map((item,i) => {
            const { path } = item;
            return (
              <Slide id={i} index={i} key={`slide-key-${i}`}>
                <Image sx={{width: 'auto !important', margin: '0 auto'}} src={path}/>
              </Slide>
            )
          })
        }
      </Slider>
      <div
        sx={{
          position: 'absolute',
          top: '0',
          height: '100%',
          width: '100%',
          zIndex: '2',
          display: 'flex',
          background: 'red',
          opacity: '0',
        }}
      >
        <ButtonBack onClick={() => getCurrentSlide()} sx={{width: '50%'}}></ButtonBack>
        <ButtonNext onClick={() => getCurrentSlide()} sx={{width: '50%'}}></ButtonNext>
      </div>
    </CarouselProvider>
  )
}
