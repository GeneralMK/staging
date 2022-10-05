import React from 'react';
import { Link} from '@chakra-ui/react';
import{
     Box,
     Flex,
     Text,
     ListItem,
     UnorderedList,
     GridItem
 } 
 from '@chakra-ui/react';
const ServicesCircle = (props) => {
  return (
    <>
    <GridItem zIndex={{base:'999',md:'', lg:'2'}} position="relative" display='flex'  background="#140e2e" flexDirection="column" gap={10} justifyContent="center" alignItems="center">
    <Flex h='100%' w='100%' justifyContent='space-evenly' alignItems='center' >
        <Box position='relative' left={{base:'0',md:'',lg:'-15%'}}   w='100%' h='100%'>
        <Box className='circleBox rotatingCircle12' position= 'absolute'
         top= '50%'
         left=' 50%'
         transform= 'translate(-50%, -50%)'
         
         width={{ base:'10rem', md:'', lg:'55rem'}} height= {{ base:'10rem', md:'', lg:'55rem'}}
         borderRadius= '50%'
         border= {{base:'none',md:'none',lg:'2px dashed white'}}
       >

<Box
  position="absolute"
  width={{base:'0',md:'',lg:"20px"}}
  height={{base:'0',md:'',lg:"20px"}}
  
  left='92%'
  borderRadius={{base:"50%", md:'', lg:'50%'}}
  top={{base:"288px",md:'100px', xl:'', lg: '208px'}}
  bg={"linear-gradient(196.94deg, #158AFF 15.45%, #1F4CC8 45.29%, #6100D0 88.33%)"} />

<Box
  position="absolute"
  width={{base:'0',md:'',lg:"20px"}}
  height={{base:'0',md:'',lg:"20px"}}
  left={{base:"-0%",md:"-0%",  xl:"23rem", lg:"-0%"}}
  borderRadius="50%"
  top={{base:"119px", md:"60px", lg:"54rem"}}
  bg={"linear-gradient(196.94deg, #158AFF 15.45%, #1F4CC8 45.29%, #6100D0 88.33%)"} />

       </Box>
        <Box className='circleBox circleBox3 ' 
        display='flex'
        width= {{base:'100%', md:'', lg:'40rem'}}
        height= {{base:'6rem', md:'', lg:'40rem'}}
        border= {{base:'none',md:'none',lg:'2px dashed white'}}
        justifyContent= 'center'
        alignItems= 'center'
        
        
        >
          
            <Flex flexDirection='column' alignItems='center' position='absolute' justifyContent='center' gap='6' >

            
            <Box fontSize={{
                base:'2xl',
                md:'3xl',
                lg:'5xl'
            }} color='white'>

                Services

            </Box>
            

            <Box>
<Text color="white" textAlign="center" flexDirection='column' lineHeight= '160%' pl='12%' fontSize={{
  base: '1xl', // 0-48em
  md: '1xl', // 48em-80em,
  xl: '20px'
}}

>


Analytikus uses advanced machine learning, algorithm based intelligence, artificial intelligence solutions to deliver the competitive edge to our clients.

We are operational in various industries: mining, agriculture, technology, education, entertainment, government,
</Text>

</Box>

<Text 
color="white" textAlign="center"   fontSize={{
  base: '1xl', // 0-48em
  md: '1xl', // 48em-80em,
  xl: '20px'}}
  mt="-20px"
  
  >
Analytikus works accross all industry verticals from private sector, mining, agriculture, technology, education, entertainment to the public sector.

</Text>
        </Flex>
            
       
        

    </Box>
    </Box>
    </Flex>

    </GridItem>
    <GridItem  position="relative" display='flex'  zIndex={{base:'2',md:'', lg:'9'}} background="#140e2e" flexDirection="column" gap="6"  justifyContent="center" alignItems="center">
    <Box
  box-sizing="border-box"
  // borderRadius="50%"
 position="relative"
 border= {{base:'none',md:'none',lg:'1px solid white'}}

  w={{
    base: '0', // 0-48em
    md: '66rem', // 48em-80em,
    lg: '66rem',
    
  }}
  h={{
    base: '25rem', // 0-48em
    md: '20rem', // 48em-80em,
    lg: '40rem',
    
  }}
  borderBottom={{base:0, md:0,lg:0}}
  borderLeft={{base:0, md:0,lg:0}}
  borderTop={{base:0, md:0,lg:'1px solid white'}}
  borderRight={{base:'1px solid white', md:0,lg:'1px solid white'}}
  right={{base:"5rem",md:'',lg:'40.5rem'}}
 
  top={{
    base: '20rem', // 0-48em
    md: '60%', // 48em-80em,
    xl: '10%',
    
  }}
  

  
     /> 

    <Flex position="absolute" left={{base:"4.6rem", md:'13rem', lg:'15rem'}}  top={{base:"21.4rem", md:'', lg:'12rem'}}>
    <Box
      
      width={{base:'0',md:'',lg:"20px"}}
      height={{base:'0',md:'',lg:"20px"}}
      borderRadius="50%"
      
      bg={"linear-gradient(196.94deg, #158AFF 15.45%, #1F4CC8 45.29%, #6100D0 88.33%)"} >


    </Box>
    <Text color="#FFFFFF" margin='3rem' mt={{base:"21.4rem", md:'', lg:'0rem'}} fontWeight="400" fontSize={{
          base:'1xl',
          md:'3xl',
          lg:'3xl'
        }}>DEVELOPMENT
        <Box color="#FFFFFF" textTransform="uppercase">
        <UnorderedList fontSize={{base:'1xl',
        md:"3xl",
        xl:'3xl',
        lg:'2xl'}}>
          <ListItem>WEB</ListItem>
          <ListItem>Mobile App</ListItem>
        </UnorderedList>
        </Box>
        </Text>
    </Flex>
      
    <Flex  position="absolute" left={{base:"4.6rem", md:'13rem', lg:'15rem'}} top={{base:"50%", md:'', lg:"44.6%"}}> 
    <Box
      width={{base:'0',md:'',lg:"20px"}}
      height={{base:'0',md:'',lg:"20px"}}
      borderRadius="50%"
      bg={"linear-gradient(196.94deg, #158AFF 15.45%, #1F4CC8 45.29%, #6100D0 88.33%)"} >
    </Box>
    <Text color="#FFFFFF" margin='3rem' mt={{base:"50%", md:'', lg:"-1rem"}}  fontWeight="400" fontSize={{base:'1xl',
        md:'3xl',
        xl:"3xl",
        lg:'3xl'}}>DESIGN
        <Box color="#FFFFFF" textTransform="uppercase">
        <UnorderedList fontSize={{base:'1xl',
        md:"3xl",
        xl:'3xl',
        lg:'2xl'}}>
          <ListItem>USER EXPERIENCE</ListItem>
          <ListItem>USER INTERFACE</ListItem>
        </UnorderedList>
        </Box>
        </Text>
    </Flex>
      
    <Flex position="absolute"  left={{base:"4.6rem", md:'13rem', lg:'15rem'}} top={{base:"33rem", md:"56.4%", lg:"36rem"}}>
    <Box
      
      width={{base:'0',md:'',lg:"20px"}}
      height={{base:'0',md:'',lg:"20px"}}
      borderRadius="50%"
      bg={"linear-gradient(196.94deg, #158AFF 15.45%, #1F4CC8 45.29%, #6100D0 88.33%)"} >

    
      </Box>
      <Text color="#FFFFFF"  mt={{base:"80rem", md:'', lg:"-1rem"}} margin='3rem' fontWeight="400" fontSize={{base:'1xl',
        md:"3xl",
        xl:'3xl',
        lg:'3xl'}}>ENGINEERING
        <Box color="#FFFFFF" textTransform="uppercase">
        <UnorderedList fontSize={{base:'1xl',
        md:"3xl",
        xl:'3xl',
        lg:'2xl'}}>
          <ListItem>ELECTRICAL</ListItem>
          <ListItem>ELECTRONICS</ListItem>
        </UnorderedList>
        </Box>
        </Text>
    </Flex>

    <Flex  position="absolute"  left={{base:"4.6rem", md:'13rem', lg:'15rem'}} top={{base:"47rem", md:'', lg:'48rem'}}>
    <Box
      width={{base:'0',md:'',lg:"20px"}}
      height={{base:'0',md:'',lg:"20px"}}
      borderRadius="50%"
      bg={"linear-gradient(196.94deg, #158AFF 15.45%, #1F4CC8 45.29%, #6100D0 88.33%)"} >

    </Box>
    <Text color="#FAFAFA"  mt={{base:"50%", md:'', lg:"-1rem"}} margin='3rem' fontWeight="400" fontSize={{base:"1xl",
      md:'3xl',
      xl:'3xl',
      lg:'3xl'}}>NETWORK & SECURITY</Text>
        
      
    </Flex>

    </GridItem>
    </>
    
    
  )
}

export default ServicesCircle