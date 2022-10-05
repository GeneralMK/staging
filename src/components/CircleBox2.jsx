
import React from 'react'
import{
    Link,
   Box,
    Flex,
    Text,
}
from '@chakra-ui/react';

const CircleBox2 = (props) => {
  return (

    
    <Flex  color='white' w={{base:'50%', md: '', lg:'80%'}}h={{base:'36%', md:'', lg:'50%'}} flexDirection={'column'} justifyContent='center'   alignItems='center' >
       
        <Box position='relative'   w='50%' h='100%'>
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
        display= 'center'
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
<Text mt='30%' fontSize={{
                base:'1xl',
                md:'3xl',
                lg:'3xl'
            }} >
        {props.title}
    </Text>

    <Text  fontSize={{
                base:'10px',
                md:'3xl',
                lg:'16px'
            }} >
        {props.message}
    </Text>

    
<Flex justifyContent="center" alignItems="center" pt='12%'>
<Box border="10px solid white" ml='-1rem' borderRadius="50%" pl='22rem' p={3}>

</Box>
<Box 
border="8px solid white"
borderTop={0}
borderLeft={0}
borderRight={0} 

borderRightRadius="22%"

>
<Link width='100%' color="white"
 href={props.pageLink}
 onClick={props.onClick}
 textDecoration="none">
{props.btnName}
</Link>

</Box>
</Flex>







    </Flex>
    
  )
}

export default CircleBox2