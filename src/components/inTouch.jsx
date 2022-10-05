import React,{useState} from 'react'
import { Center, Input, Stack} from '@chakra-ui/react';
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
    <>
        <Grid templateColumns={{
  base:'(1, 1fr)',
  md:'(1, 1fr)',
  lg:'60% 40%'
}} background="#140e2e" h="180vh" p={30}>
        <GridItem  position="relative" display='flex' background="#140e2e"  flexDirection="column" gap="4" justifyContent="center" alignItems="center">
    <Flex h='100%' w='100%' justifyContent='space-evenly' alignItems='center' >
        <Box position='relative' left={{base:'0',md:'',lg:'-15%'}}   w='100%' h='100%'>
        <Box className='circleBox' position= 'absolute'
         top= '50%'
         left=' 50%'
         transform= 'translate(-50%, -50%)'
         
         width={{ base:'10rem', md:'', lg:'55rem'}} height= {{ base:'10rem', md:'', lg:'55rem'}}
         borderRadius= '50%'
         border= {{base:'none',md:'none',lg:'2px dashed white'}}
       ></Box>
        <Box className='circleBox circleBox2' 
        display='flex'
        width= {{base:'100%', md:'', lg:'40rem'}}
        height= {{base:'6rem', md:'', lg:'40rem'}}
        border= {{base:'none',md:'none',lg:'2px dashed white'}}
        justifyContent= 'center'
        alignItems= 'center'
        
        
        >
            <Flex flexDirection='column' alignItems='center' justifyContent='center' gap='2' >

            
            <Box ml={{base:'0rem',md:'28rem',lg:'28rem'}} fontSize={{
              
                base:'3xl',
                md:'3xl',
                lg:'8xl'
            }} color='white'>
                KEEP IN TOUCH

            </Box>

       


        </Flex>
            
       
        

    </Box>
    </Box>
    </Flex>

    </GridItem>
    <GridItem position='relative' display='flex' background="#140e2e"    flexDirection="column" gap="4" justifyContent="center" alignItems="center" >
    
            <Stack  >
            <Text color="#FAFAFA"  display={{base:'flex', md:'flex', lg:'center'}}  gap={2} fontSize={{base:'1xl',md:'4xl',lg:'3xl'}}>WE WOULD LIKE TO HEAR FROM YOU</Text>
             <Box>
             <Text color="#FAFAFA"  display={{base:'flex', md:'flex', lg:'center'}}  justifyContent="center" alignItems="center" fontSize={{base:'8px',md:'4xl',lg:'17px'}}>Fill in the form, we will get back to you shortly</Text>
             </Box>

             <Tabs isFitted={true}   variant='enclosed' gap={6}  >
  <TabList >
    <Tab size={{sm:3,md:22,lg:3}}  _selected={{ color: 'white', bg: 'linear-gradient( #001545 -52.23%, #158AFF 93.43%)' }}>
      <Flex flexDirection='column'>

      <MdLocationOn size={33} color="white" boxShadow= '0px 4px 4px rgba(0, 0, 0, 0.25)'
 bg={'linear-gradient( #001545 -52.23%, #158AFF 93.43%)'} />
 <Text className='addresss' fontSize={{base:'9px',md:'12px', xl:'10px', lg:'10px' }} p={1} color="white">Address</Text>
      </Flex>
      
      </Tab>
      
    
    
    
    <Tab    _selected={{ color: 'white', bg: 'linear-gradient( #001545 -52.23%, #158AFF 93.43%)' }}>
      <Flex flexDirection='column'>
      <MdCall size={33}style={{
      
      right: '16rem',
    }} color="white"/>
      <Text fontSize={{base:'7px',md:'12px', xl:'10px', lg:'10px' }} className='numbers' color='white'>Phone</Text>
      </Flex>
      </Tab>
    <Tab defaultIndex={3} _selected={{ color: 'white', bg: 'linear-gradient( #001545 -52.23%, #158AFF 93.43%)' }}>
<Flex flexDirection='column'>
      <MdMailOutline size={33}  style={{
   
      
    }} mr= {{base:'5rem',md:'8rem',lg:'6rem'}}color="white"/>

      <Text color='white' fontSize={{base:'9px',md:'12px', xl:'10px', lg:'10px' }} mr={12} >Email</Text>
      </Flex>
      </Tab>
  </TabList>
  <TabPanels>
    <TabPanel  >
    <iframe className='frame' width={{base:'150', md:'60',xl:'600'}} height={{base:'70', md:'60',xl:'300'}}  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3585.935356151862!2d28.009230417443852!3d-26.00293489999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1e9576ce929ae60f%3A0x7e582c276800ebda!2s4%20Pieter%20Wenning%20Rd%2C%20Fourways%2C%20Sandton%2C%202068!5e0!3m2!1sen!2sza!4v1661955679725!5m2!1sen!2sza" w="50"></iframe>
    </TabPanel>
    <TabPanel align='center' >
    <Box alignItems='center' >
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
    
<iframe  width={{base:'50', md:'',lg:'600'}} height={{base:'50', md:'',lg:'300'}}></iframe>
   </TabPanel>

    <TabPanel align='center'>
    
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
  onClick:{onSubmit}
  
}}

>
 Submit
</Button>

        
        
    </FormControl>  

    
   
    </TabPanel>
  </TabPanels>
            </Tabs>
             

            </Stack>
            
    </GridItem>

</Grid>

    </>
  )
}

export default KeepInTouch