
import React from 'react'
import{
   Box,
     
    Flex,
    Text
}
from '@chakra-ui/react';

const CircleBox = (props) => {
  return (
    <Flex h='100%' w='100%' justifyContent='space-evenly' alignItems='center' >
       
        <Box position='relative'  bg="#140e2e"  w='50%' h='100%'>
        <Box className='circleBox' position= 'absolute'
         top= '50%'
         left=' 50%'
         transform= 'translate(-50%, -50%)'
         width={{ base:'10rem', md:'', lg:'15rem'}} height= {{ base:'10rem', md:'', lg:'15rem'}}
         borderRadius= '50%'
         border= '2px dashed white'
       ></Box>
        <Box className='circleBox circleBox2' 
        width= {{base:'6rem', md:'', lg:'10rem'}}
        height= {{base:'6rem', md:'', lg:'10rem'}}
        display= 'flex'
        justifyContent= 'center'
        alignItems= 'center'
        
        
        >
            <Box fontSize={{
                base:'2xl',
                md:'3xl',
                lg:'5xl'
            }}>
                {props.number}
            </Box>
        </Box>
        

    </Box>
<Text  fontSize={{
                base:'2xl',
                md:'3xl',
                lg:'5xl'
            }} >
        {props.title}
    </Text>

    {/* <Flex className='development'>
<Box
  zIndex={999}
  width="20px"
  height="20px"
  ml='-28rem'
  borderRadius="50%"
  top="40.2%"
  bg={"linear-gradient(196.94deg, #158AFF 15.45%, #1F4CC8 45.29%, #6100D0 88.33%)"} />

</Flex> */}

    </Flex>
    
  )
}

export default React.memo(CircleBox)