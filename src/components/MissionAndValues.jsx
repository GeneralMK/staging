import React from 'react'

import {
     Flex,
   
    Text,
    GridItem,
   
    Box,
    Grid,
    
  } from '@chakra-ui/react';

const Mission_and_values = () => {
  return (
    <div>
<Grid templateColumns={{base:'1, 1fr',md:'', lg:'50% 50%'}} background="#140e2e"  h="100vh" p={8}>
    <GridItem  display="flex" justifyContent="center"
    bg='#140e2e'
            alignItems="flex-start" flexDirection="column"  >
    
    
    <Flex flexDirection="column"  justifyContent="center" alignItems="center" gap={36}>
    <Text color="white" className='missionHeader'
    fontSize={{
      base: '3xl', // 0-48em
      md: '2xl', // 48em-80em,
      xl: '6xl'
    }}>MISSION/VALUES</Text>
    <Text color="white" textAlign="center" gap={6}  className='para' fontSize={{
      base: '2xl', // 0-48em
      md: '1xl', // 48em-80em,
      xl: '2xl'
    }}
     
    >
    Question Assumptions, Think Deeply, Inspire, Aspire, Disrupt the norms, Always Ask What IF?
    </Text>
    
    </Flex>
    
    
    </GridItem>

    <GridItem  position="relative" display='flex'  zIndex={{base:'2',md:'', lg:'9'}} background="#140e2e" flexDirection="column" gap="6"  justifyContent="center" alignItems="center">
    <Box box-sizing="border-box"
  // borderRadius="50%"
 position="relative"
 border= {{base:'none',md:'none',lg:'1px solid white'}}
  w={{
    base: '0', // 0-48em
    md: '66rem', // 48em-80em,
    lg: '66rem',
    
  }}
  h={{
    base: '35rem', // 0-48em
    md: '20rem', // 48em-80em,
    lg: '20rem',
    
  }}
  borderBottom={{base:0, md:0,lg:0}}
  borderLeft={{base:0, md:0,lg:0}}
  borderTop={{base:0, md:0,lg:'1px solid white'}}
  borderRight={{base:'1px solid white', md:0,lg:'1px solid white'}}
  right={{base:"5rem",md:'',lg:'40.5rem'}}
 
  top={{
    base: '20%', // 0-48em
    md: '60%', // 48em-80em,
    lg: '10rem',
    
  }}
  

  
/> 

<Flex justifyContent='space-between' position="absolute"  top={{base:"6.4rem", md:'', lg:'26.3rem'}} left={{base:"4.6rem", md:'15rem', lg:'21rem'}}>
<Box
  
  width={{base:'0', md:'', lg:'20px'}}
  height={{base:'0', md:'', lg:'20px'}}
  borderRadius="50%"
  bg={"linear-gradient(196.94deg, #158AFF 15.45%, #1F4CC8 45.29%, #6100D0 88.33%)"} >
 
</Box>
<Text color="#FFFFFF" ml='3rem'  mt={{base:"1rem", md:'', lg:'1rem'}} display='center' pr={{base:"0", md:'', lg:'12rem'}}  fontWeight="400" fontSize={{
      base:'1xl',
      md:'3xl',
      xl:'3xl',
      lg:''
    }}>INNOVATE</Text>
</Flex>
 
  
  
<Flex position="absolute"   top={{base:'17rem', md:'', lg:"34.3rem"}}   left={{base:"4.6rem", md:'15rem', lg:'21rem'}}>
<Box
  
  
  width={{base:'0', md:'', lg:'20px'}}
  height={{base:'0', md:'', lg:'20px'}}

  borderRadius="50%"
 
  bg={"linear-gradient(196.94deg, #158AFF 15.45%, #1F4CC8 45.29%, #6100D0 88.33%)"} >


</Box>
<Text color="#FFFFFF"   ml='3rem'  fontWeight="400" fontSize={{base:'1xl',
    md:'3xl',
    xl:"3xl",
    lg:'3xl'}}>DESRUPT</Text>
</Flex>

  
<Flex   position="absolute"  top={{base:"25rem", md:"56.4%", lg:"75.8%"}} left={{base:"4.6rem", md:'15rem', lg:'21rem'}}>
<Box
 
  width={{base:'0', md:'', lg:'20px'}}
  height={{base:'0', md:'', lg:'20px'}}
  
  borderRadius="50%"
 
  bg={"linear-gradient(196.94deg, #158AFF 15.45%, #1F4CC8 45.29%, #6100D0 88.33%)"} >


</Box>
<Text color="#FAFAFA"   ml='3rem'  fontWeight="400" fontSize={{base:"1xl",
  md:'3xl',
  xl:'3xl',
  lg:'3xl'}}>Challenge</Text>
    
</Flex>

<Flex  position="absolute"  top={{base:"35rem", md:'', lg:'85.5%'}}  left={{base:"4.7rem", md:'15rem', lg:'21rem'}}>
<Box
 
  width={{base:'0', md:'', lg:'20px'}}
  height={{base:'0', md:'', lg:'20px'}}
 
  borderRadius="50%"

  bg={"linear-gradient(196.94deg, #158AFF 15.45%, #1F4CC8 45.29%, #6100D0 88.33%)"} >

  </Box>
  <Text  ml='3rem' color="#FAFAFA" mt={{base:"1rem", md:'', lg:'1rem'}}  fontWeight="400" fontSize={{base:"1xl",
  md:'3xl',
  xl:'3xl',
  lg:'3xl'}}>INTENTIONAL CHAOS: SENSE TO THE MADNESS</Text>
</Flex>







    
    </GridItem>
   

    
    
    
    </Grid>
    </div>
  )
}

export default Mission_and_values