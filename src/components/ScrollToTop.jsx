import React, {useEffect, useRef}from 'react';
import { IconButton } from '@chakra-ui/react';
import {ArrowUpIcon} from '@chakra-ui/icons';
import {gsap} from 'gsap';
import {
  Box
} from '@chakra-ui/react';


const ScrollToTop = () => {
  const [isVisible, setIsVisible] = React.useState(false);
  const scrollBtn = useRef();

  useEffect(() =>{
    window.addEventListener('scroll', handleScroll);
    return() => window.removeEventListener('scroll', handleScroll);
  },[]);

  useEffect(() =>{
    if(isVisible)
    {
        gsap.to(scrollBtn.current, {
            duration: 0.5,
            opacity:1,
            zIndex:100,
        });
    }else
    {
        gsap.to(scrollBtn.current, {
            duration: 0.5,
            opacity:1,
            zIndex:-1
        });
    }
  },[isVisible]);


  const handleScroll = () =>{
    if(window.scrollY > 100)
    {
        setIsVisible(true)
    }
    else
    {
        setIsVisible(false)
    }
  };

  const handleClick=()=>{
    window.scrollTo({
        top:0,
        left:0,
        behavior: 'smooth',
    });
    scrollBtn.current.blur();
  }
  return (
    <Box className='top'>
       <IconButton

aria-label="Scroll Up"
icon={<ArrowUpIcon />}
size='lg'
colorScheme='white'
bgColor='white'
variant='outline'
border='2px solid'
ref={scrollBtn}
onClick={handleClick}
position='fixed'
bottom='4rem'
right='4rem'
overflowX='hidden'

zIndex='-1'

opacity='0'
/>

    </Box>
   



    
  )
}

export default ScrollToTop