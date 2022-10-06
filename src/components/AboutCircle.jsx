import React from 'react';
import{
    Box,
      
     Flex,
     Text
 }
 from '@chakra-ui/react';

const AboutCircle = () => {
  return (
    <Flex h='100%' w='100%' justifyContent='space-evenly' alignItems='center' >
        <Box position='relative'  w='50%' h='100%'>
        <Box className='circleBox rotateOpposite' 
          top={{base:'',md:'',lg:'50%'}}
         left={{base:'',md:'',lg:'50%'}}
         transform= 'translate(-50%, -50%)'
         width={{ base:'10rem', md:'', lg:'50rem'}}zIndex={99} height= {{ base:'10rem', md:'', lg:'50rem'}}
         borderRadius= '50%'
         border= {{base:'none',md:'none',lg:'2px dashed white'}}
       ></Box>
        <Box className='circleBox circleBox2 rotatingCircle' 
        border= {{base:'none',md:'none',lg:'2px dashed white'}} 
        width= {{base:'6rem', md:'', lg:'30rem'}}
        height= {{base:'6rem', md:'', lg:'30rem'}}
        display= 'flex'
        justifyContent= 'center'
        alignItems= 'center'
        
        
        >
           </Box>
        

    </Box>


    </Flex>
    
  )
}

export default React.memo(AboutCircle)