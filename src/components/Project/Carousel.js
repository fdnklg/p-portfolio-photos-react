/** @jsx jsx */
import { jsx, Box, ThemeProvider, useColorMode, Button } from 'theme-ui';
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext, Image, WithStore } from 'pure-react-carousel';
import { useSwipeable } from 'react-swipeable'
import Transition from 'react-transition-group/Transition';
import 'pure-react-carousel/dist/react-carousel.es.css';
import { opacityFromState } from 'utils';

import useWindowDimensions from 'components/UseWindowDimensions';

export default p => {
  const { content, setCurrentSlide, currentSlide } = p;
  const { media  } = content;
  const { height, width } = useWindowDimensions();

  const getCurrentSlide = () => {
    setTimeout(() => {
      const slideIndex = parseInt(document.querySelector('.carousel__slide--visible').id);
      setCurrentSlide(slideIndex)
    }, 50);
  }

  const btnNext = document.getElementById('ButtonNext');
  const btnBack = document.getElementById('ButtonBack');

  const handlers = useSwipeable({
    onSwipedLeft: () => btnNext.click(),
    onSwipedRight: () => btnBack.click(),
    preventDefaultTouchmoveEvent: true,
    trackMouse: true
  });


  const checkKey = (e) => {

      e = e || window.event;

      if (e.keyCode == '38') {
          // up arrow
          btnBack.click()
      }
      else if (e.keyCode == '40') {
          // down arrow
          btnNext.click()
      }
      else if (e.keyCode == '37') {
        // left arrow
        btnBack.click()
      }
      else if (e.keyCode == '39') {
        // right arrow
        btnNext.click()
      }

  }
  document.onkeydown = checkKey;

  return (
    <Transition
      in={true}
      timeout={0}
      appear={true}
      mountOnEnter={true}
      unmountOnExit={true}
    >
      {state => (
        <CarouselProvider
          sx={{
            position: 'relative',
            transition: t => t.transitions[3],
            opacity: opacityFromState(state)
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
            {...handlers}
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
            <ButtonBack id="ButtonBack" onClick={() => getCurrentSlide()} sx={{width: '50%', cursor: 'w-resize'}}></ButtonBack>
            <ButtonNext id="ButtonNext" onClick={() => getCurrentSlide()} sx={{width: '50%', cursor: 'e-resize'}}></ButtonNext>
          </div>
        </CarouselProvider>
      )}
    </Transition>
  )
}
