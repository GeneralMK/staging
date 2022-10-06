import React from 'react'
import{
 
    Flex,
    Text,
    
    GridItem
}
from '@chakra-ui/react';
const AboutComponent = () => {
  return (
    <>
       <GridItem color='white' h='100vh'
bg='#140e2e' 
 display="flex" justifyContent="center"
alignItems="center" flexDirection="column" gap="20" >
<Flex justifyContent="center" alignItems="center" flexDirection="column" gap="20">
<Text fontSize={{base:'3xl',md:'4xl', xl:'6xl'}}zIndex={2} color="#fafafa" className='aboutCompnay' fontWeight="400" w="100%">ABOUT US</Text>
</Flex>
<Text  fontSize={{
                base:'14px',
                md:'3xl',
                lg:'2xl'
            }} w='100%' >
We have great passion for what we do
Analytikus uses advanced machine learning, algorithm based intelligence, artificial intelligence solutions to deliver the competitive edge to our clients.<br /><br />
We are operational in various industries: mining, agriculture, technology, education, entertainment, government.</Text>


</GridItem> 
    </>
  )
}

export default AboutComponent
