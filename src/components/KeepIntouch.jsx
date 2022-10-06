import React,{useState} from 'react'
import { Input} from '@chakra-ui/react';
import {MdLocationOn, MdCall, MdMailOutline} from 'react-icons/md';
import {
    Button,
    Flex,
    Textarea,
    Text,
    GridItem,
    Box,
    Grid,
    Tabs, TabList, TabPanels, Tab, TabPanel,
    FormControl,
  } from '@chakra-ui/react';
const KeepInTouch = (props) => {
  const [input, setInput] = useState('')

  const handleInputChange = (e) => setInput(e.target.value)
  const onSubmit =()=>{
    console.log("I am testing the send button")
  }

  const isError = input === ''

  return (
    <div>
        <Grid templateColumns='25% 75%' background="#140e2e" h="180vh" p={30}>
<GridItem  position="relative" display='flex' flexDirection="column" gap="4" justifyContent="center" alignItems="center">

<Box w={{
      base: '65rem', // 0-48em
      md: '65rem', // 48em-65rem,
      xl: '65rem', // 65rem+
    }} h={{
      base: '65rem', // 0-48em
      md: '65rem', // 48em-65rem,
      xl: '65rem', // 65rem+
    }} border="3px dashed white" borderRadius="50%"
position="absolute"

t={{
  base:'10%',
  md: '10%', // 48em-10%,
  xl: '10%', 
}}
className="rotatingCircle1"
l={{
  base:'10%',
  md: '10%', // 48em-10%,
  xl: '10%', 
}}
transform="translate(-50%, -50%)"
>
  <Box
position="absolute"
width="20px"
height="20px"
left="12%"
borderRadius="50%"
top="15%"
bg={"linear-gradient(196.94deg, #158AFF 15.45%, #1F4CC8 45.29%, #6100D0 88.33%)"} />

<Box
position="absolute"
width="20px"
height="20px"
left="99%"
borderRadius="50%"
top="42%"
bg={"linear-gradient(196.94deg, #158AFF 15.45%, #1F4CC8 45.29%, #6100D0 88.33%)"} />


</Box>
<Box w={{
      base: '50rem', // 0-48em
      md: '50rem', // 48em-50rem,
      xl: '50rem', // 50rem+
    }} h={{
      base: '50rem', // 0-48em
      md: '50rem', // 48em-50rem,
      xl: '50rem', // 50rem+
    }} border="3px dashed white" borderRadius="50%"
position="absolute"
className="rotateOpposite"
t={{
  base: '20%', // 0-48em
  md: '20%', // 48em-20%,
  xl: '20%',
}}

l={{
  base: '20%', // 0-48em
  md: '20%', // 48em-20%,
  xl: '20%',
}}


transform="translate(-50%, -50%)"
>
  <Box
position="absolute"
width="20px"
height="20px"
left="29px"
borderRadius="50%"
top="208px"
bg={"linear-gradient(196.94deg, #158AFF 15.45%, #1F4CC8 45.29%, #6100D0 88.33%)"} />

<Box
position="absolute"
width="20px"
height="20px"
left="727px"
borderRadius="50%"
top="600px"
bg={"linear-gradient(196.94deg, #158AFF 15.45%, #1F4CC8 45.29%, #6100D0 88.33%)"} />




</Box>

<Flex zIndex={4}>
<Text color="white"
className='keep'
pl="50%" 
fontSize={{
  base: '3xl', // 0-48em
  md: '4xl', // 48em-80em,
  xl: '9xl'
}}>Keep <br/>In <br/> Touch</Text>


</Flex>




</GridItem>
<GridItem position='absolute' className='tabs' ml='54%' mt='23.8%' >
<Box>
<Text color="#FAFAFA" className='textkeep' display={{base:'none'}} justifyContent="center" alignItems="center"  gap={2} fontSize={{base:'2xl',md:'4xl',xl:'25px'}}>WE WOULD LIKE TO HEAR FROM YOU</Text>
<Text color="#FAFAFA" className='textkeep' display={{base:'none'}}   mb="30px">Fill in the form, we will get back to you shortly</Text>
<Tabs isFitted className='tabs' tabItemContainerStyle={{width: '400px'}} variant='enclosed' gap={6}>
  <TabList mb='1em' >
    <Tab className='tab' size={{sm:33,md:22,lg:33}} _selected={{ color: 'white', bg: 'linear-gradient(190.95deg, #001545 -52.23%, #158AFF 93.43%)' }}>
      <Flex flexDirection='column'>

      <MdLocationOn size={33} color="white" boxShadow= '0px 4px 4px rgba(0, 0, 0, 0.25)'
 bg={'linear-gradient(190.95deg, #001545 -52.23%, #158AFF 93.43%)'} />
 <Text className='addresss' fontSize={{base:'9px',md:'12px', xl:'10px', lg:'10px' }} p={1} color="white">4 Pieter Wenning Rd</Text>
      </Flex>
      
      </Tab>
      
    
    
    
    <Tab    _selected={{ color: 'white', bg: 'linear-gradient(190.95deg, #001545 -52.23%, #158AFF 93.43%)' }}>
      <Flex flexDirection='column'>
      <MdCall size={33}style={{
      
      right: '16rem',
    }} color="white"/>
      <Text fontSize={{base:'7px',md:'12px', xl:'10px', lg:'10px' }} className='numbers' p={1} color='white'>+27 11 293 3032</Text>
      </Flex>
      </Tab>
    <Tab _selected={{ color: 'white', bg: 'linear-gradient(190.95deg, #001545 -52.23%, #158AFF 93.43%)' }}>
     
      <MdMailOutline size={33}  style={{
      position: 'absolute',
      right: '8rem',
    }} color="white"/>

      <Text color='white' className='addresss' fontSize={{base:'9px',md:'12px', xl:'10px', lg:'10px' }} mr={12} mt={12}>office@analytikus.co.za</Text>
      </Tab>
  </TabList>
  <TabPanels>
    <TabPanel  width='600' height='300'>
    <iframe className='frame' width='600' height='300'  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3585.935356151862!2d28.009230417443852!3d-26.00293489999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1e9576ce929ae60f%3A0x7e582c276800ebda!2s4%20Pieter%20Wenning%20Rd%2C%20Fourways%2C%20Sandton%2C%202068!5e0!3m2!1sen!2sza!4v1661955679725!5m2!1sen!2sza" w="50"></iframe>
    </TabPanel>
    <TabPanel >
    <Box justifyContent='center'  className='callButton' alignItems='center' ml='11rem'>
    <Button 
      
      
    colorScheme='#fafafa' size='md' color='#fafafa'
    
   
    href='tel:0112933032'
    fontSize={'md'}
    fontWeight={600}
    p="35px 70px 35px 70px"
    borderRadius='100px'
    letterSpacing="1px"
    bg={'linear-gradient(206.34deg, #158AFF -4.95%, #1F4CC8 56.86%, #6100D0 145.99%)'}
    _hover={{
    bg: '#1F4CC8',
    transition: "5s easeInOut",
  }}>
    Call Us
</Button>
    </Box>
    
<iframe className='frame' width='600' height='300'></iframe>
   </TabPanel>

    <TabPanel>
    
    <FormControl mr='10%' isRequired color="white">
        

        <Flex  mb={10} >
        
        <Input w='60%' placeholder='Full Name' type='text' onChange={handleInputChange}/>
        
        <Input w='60%' ml='10px' placeholder='Email Address' type='email' onChange={handleInputChange}/>

        </Flex>

        <Box mb={8}>

        <Textarea rows="10"  resize='none'/>

        </Box>
        <Button
  colorScheme='#fafafa' size='md' color='#fafafa'
  fontSize={'md'}
  fontWeight={600}
  p="35px 70px 35px 70px"
  borderRadius='100px'
  letterSpacing="1px"
  bg={'linear-gradient(206.34deg, #158AFF -4.95%, #1F4CC8 56.86%, #6100D0 145.99%)'}
  href={'#'}
  _hover={{
  bg: '#1F4CC8',
  transition: "5s easeInOut",
  
}}
onSubmit={handleInputChange}
>
 Submit
</Button>

        
        
    </FormControl>  

    <iframe className='frame' width='600' height='300'></iframe>
   
    </TabPanel>
  </TabPanels>
</Tabs>
</Box>
</GridItem>
  






</Grid>

    </div>
  )
}

export default React.memo(KeepInTouch)