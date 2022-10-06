import { Link, Stack} from '@chakra-ui/react';
import analytikus from '../assets/analytikus.png';
import {useEffect} from 'react'
import { useNavigate} from 'react-router-dom';
import {
    Button,
    Flex,
    Image,
    UnorderedList,
    
    ListItem,
  
    Text,
    GridItem,
    
    Box,
    Grid,
   
    
  } from '@chakra-ui/react';
 
  import InTouch from '../components/inTouch'
  import CircleBox from './CircleBox';
  import ServicesCircle from './ServicesCircle';


 function SplitScreen() {
  const navigate = useNavigate();
  useEffect (() => {
    document.title='Analytikus | Home';
});
  const navigateToAboutUs =() =>{
    navigate('/About')
  }
return (
      
      <>
<Grid  templateColumns={{
  base:'(1, 1fr)',
  md:'(1, 1fr)',
  lg:'repeat(2, 1fr)'
}} w='100%' h='100vh' overflow='hidden' background="#140e2e" p={8} position='relative'>

  <Box position="absolute" right='0%' top={{base:'20%', md:'', lg: '18%'}} boxSize={{base:200, md:400, lg:500}}>
  <Image
transform="scale(2)"
className="ilogo"
opacity="0.4"
src={analytikus}
alt="Segun Adebayo" />

  </Box>

<GridItem w='100%' h='100vh' bg="#140e2e" display='flex' justifyContent='center' flexDirection='column'  >
        <Flex justifyContent="center" alignItems={{base:'center', md: 'center', lg:'flex-start'}} flexDirection="column" gap="20">
     <Text zIndex={999}
        fontSize=
        {{
          base: '4xl', // 0-48em
          md: '3xl', // 48em-65rem,
          lg: '7xl'

        }} 
       
        color="#fafafa" textAlign={{base:'center', md:'center', lg:'left'}} fontWeight="400" >PUSHING ALL THE  LIMITS ACROSS  THE GLOBE
        </Text> 

<Link color="white" className='nameBtn'  
href='/Contact-Us'
 textDecoration="none">
GET IN TOUCH
</Link>
        </Flex>



</GridItem >

</Grid>

{/* ABOUT */}
<Grid templateColumns={{
  base:'(1, 1fr)',
  md:'(1, 1fr)',
  lg:'repeat(2, 1fr)'
}}  background="#140e2e" w='100%' overflowX='hidden' color='white' p={8}>

<GridItem   w='100%' h='100vh' 
bg="#140e2e" 
display='flex' alignItems='center' justifyContent='center' flexDirection='column' >
  
  <Flex justifyContent="center" alignItems={{base:'center', md: 'center', lg:'flex-start'}} flexDirection="column" gap="20">
    <Text  fontSize=
        {{
          base: '4xl', // 0-48em
          md: '3xl', // 48em-65rem,
          lg: '7xl'

        }} >About us</Text>
     <Text zIndex={999}
        fontSize=
        {{
          base: '1xl', // 0-48em
          md: '2xl', // 48em-65rem,
         
          lg: '1xl'

        }} 
       
        color="#fafafa" textAlign={{base:'center', md:'center', lg:'left'}} fontWeight="400" >We have great passion for what we do
        Analytikus uses advanced machine learning, algorithm based intelligence, artificial intelligence solutions to deliver the competitive edge to our clients.<br /><br />We are operational in various industries: mining, agriculture, technology, education, entertainment, government.
        </Text> 

        <Button
  colorScheme='#fafafa' size='md' color='#fafafa'
 
  fontSize={'md'}
  fontWeight={600}
  p="35px 70px 35px 70px"
  borderRadius='100px'
  letterSpacing="1px"
  bg={'linear-gradient(206.34deg, #158AFF -4.95%, #1F4CC8 56.86%, #6100D0 145.99%)'}
  onClick={navigateToAboutUs}
  _hover={{
  bg: '#1F4CC8',
  transition: "5s easeInOut",
}}>
  GET TO KNOW US
</Button>
        </Flex>


</GridItem>
<GridItem width='100%' h='100vh' display='flex' overflow='hidden' justifyContent='center' flexDirection='column'  bg="#140e2e">


<CircleBox 
 number='12' 
 title='People'
/>
<CircleBox
 number='9' 
 title='Partners'
/>
<CircleBox
 number='6' 
 title='Services'
/>




</GridItem>
</Grid>

{/* SERVICES */}
<Grid templateColumns={{
  base:'(1, 1fr)',
  md:'(1, 1fr)',
  lg:'60% 40%'
}} className='aboutGrid' background="#140e2e" h="150vh" p={30}>

<ServicesCircle/>

</Grid>

 <InTouch /> 



</>


    );
  }
  export default SplitScreen;