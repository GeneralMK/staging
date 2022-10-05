
import React from "react";
import {
  
  Flex,
  Text,
  GridItem,
  
  Box,
  Grid,
 Link,
  useDisclosure,
  Drawer,
    DrawerBody,
    DrawerFooter,
    
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
  
  } from '@chakra-ui/react';
import KeepInTouch from "../components/inTouch";
import ServiceCircles2 from "../components/ServiceCircles2";
import AboutCircle from "../components/AboutCircle";
import TrustedPartners from "../components/TrustedPartners";
import CircleBox2 from "../components/CircleBox2";
const Offer = () => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const btnRef = React.useRef()
  return (
    <>
    
    <Drawer
        trigger={'hover'}
        isOpen={isOpen}
        placement='right'
        onClose={onClose}
        finalFocusRef={btnRef}
        size='xl'
        background="#140e2e"
        _hover={onOpen}
      >
        <DrawerOverlay />
        <DrawerContent background={"linear-gradient(150.2deg, #001545 -15.61%, #158AFF 98.66%)"}>
          <DrawerCloseButton />
          <DrawerBody color='white'>
            <Box>
            <Grid templateColumns='100%' width='100%' overflow='hidden'zIndex={999} p={16} position='relative'>
            <GridItem  w='100%' h='100vh' display='center' justifyContent='center'  flexDirection='column'  >
                <TrustedPartners />
              </GridItem> 
            </Grid>
            </Box>
           
          </DrawerBody >
            
         
          <DrawerFooter color="#FAFAFA">

         
           
            
          </DrawerFooter>
        </DrawerContent>
      </Drawer>

      <Grid  templateColumns={{base:'(1, 1fr)', md:'',lg:'50% 50%'}}  background="#140e2e" h="100vh" p={8}>
       <Flex justifyContent="center" display='center' alignItems={{base:'center', md: 'center', lg:'flex-start'}} flexDirection="column" gap="20">
     <Text zIndex={999}
        fontSize=
        {{
          base: '4xl', // 0-48em
          md: '3xl', // 48em-65rem,
          lg: '7xl'

        }} 
       
        color="#fafafa" textAlign={{base:'center', md:'center', lg:'left'}} fontWeight="400" >   We are not an agency.  <br/> This is a tech house
        </Text> 


        </Flex>
       
        <GridItem w='100%' h='100vh' bg="#140e2e" display="flex" justifyContent="center"
        alignItems="flex-start" flexDirection="column">
          
          <AboutCircle/>
         
        
        </GridItem>
        {/* <GridItem  width='100%' h='100vh' display='flex' overflow='hidden' justifyContent='center' flexDirection='column'  bg="#140e2e">


 </GridItem> */}
</Grid>

{/* SERVICES */}
<Grid templateColumns={{
  base:'(1, 1fr)',
  md:'(1, 1fr)',
  lg:'60% 40%'
}}  background="#140e2e" h="100vh" p={8}>

<ServiceCircles2/>

</Grid>
<Grid templateColumns={{base:'(3, 1fr)', md: '', lg:'repeat(3, 1fr)'}} background="#140e2e"  p={8}>
<GridItem h="100vh"  bg="#140e2e" display="center" justifyContent="center"
        alignItems="center" >
        <CircleBox2 
 number='12' 
 title='People'
 message="We are world class team of diverse individuals willing to do great work as great as they are"
 btnName="Meet the team"
 pageLink='/About'
/> 





</GridItem>

<GridItem h="100vh"  bg="#140e2e" display="center" justifyContent="center"
        alignItems="center" >
                <CircleBox2 
 number='9' 
 title='Partners'
 message="We have partnered with several reputational organisations acrossthe world to ensure we delivering the best solutions for our clients"
 btnName="see all partners"
 onClick={onOpen}
/>

</GridItem>

<GridItem h="100vh" bg="#140e2e" display="center" justifyContent="center"
        alignItems="center" >
           <CircleBox2 
 number='6' 
 title='Services'
 message="We have partnered with several reputational organisations acrossthe world to ensure we delivering the best solutions for our clients"
 btnName="Get In Touch"
 pageLink='/Contact-Us'
/>     
</GridItem>
 
</Grid>

<KeepInTouch/>

</>
  )
}

export default Offer