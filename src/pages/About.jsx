import MissionAndValues from '../components/MissionAndValues'
import {
  Flex,
  Text,
  GridItem,
  Grid,
  } from '@chakra-ui/react';
  import InTouch from '../components/inTouch'
  import Slider from "../components/Slider"
  import {  useEffect } from 'react';
  import AboutCircle from '../components/AboutCircle';
  import TrustedPartners from '../components/TrustedPartners';
  import AboutComponent from '../components/AboutComponent';
  export default function SplitScreen() {

    useEffect (() => {
      document.title='Analytikus | About';
  });
    return (
       <>
       <Grid  templateColumns={{base:'(1, 1fr)', md:'',lg:'50% 50%'}}  background="#140e2e" h="100vh" p={8}>
       <Flex justifyContent="center" display='flex' alignItems={{base:'center', md: 'center', lg:'flex-start'}} flexDirection="column" gap="20">
     <Text zIndex={999}
        fontSize=
        {{
          base: '4xl', // 0-48em
          md: '3xl', // 48em-65rem,
          lg: '7xl'

        }} 
       
        color="#fafafa" textAlign={{base:'center', md:'center', lg:'left'}} fontWeight="400" >   WE ARE A TECH  HOUSE  THAT IS DEDICATED TO <br/> PUSHING LIMITS
        </Text> 


        </Flex>
       
        <GridItem w='100%' h='100vh' bg="#140e2e" display="flex" justifyContent="center"
        alignItems="flex-start" flexDirection="column">
          
          <AboutCircle/>
         
        
        </GridItem>
        {/* <GridItem  width='100%' h='100vh' display='flex' overflow='hidden' justifyContent='center' flexDirection='column'  bg="#140e2e">


 </GridItem> */}
</Grid>
<Grid templateColumns={{
  base:'(1, 1fr)',
  md:'(1, 1fr)',
  lg:'repeat(2, 1fr)'
}} w='100%'  overflow='hidden' background="#140e2e" p={8} position='relative'>

<AboutComponent />



 <GridItem  w='100%' h='100vh' bg="#140e2e" display='flex' justifyContent='center' position='relative' flexDirection='column'  >
  <TrustedPartners />
</GridItem> 

</Grid>

 <MissionAndValues />
 <Slider /> 
<InTouch /> 


</>


    );
  }