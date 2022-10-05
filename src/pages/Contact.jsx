

import React, { useState, useEffect } from "react";
import Typewriter from "typewriter-effect";
import {MdLocationOn, MdCall, MdMailOutline} from 'react-icons/md';
import {
  Button,
  Show, Hide ,
  Flex,
  Input,
  Textarea,
  Text,
  GridItem,
  Box,
  Grid,
  Tabs, TabList, TabPanels, Tab, TabPanel,
  FormControl,

  } from '@chakra-ui/react';

const Contact = () => {
  const [input, setInput] = useState('')

  const handleInputChange = (e) => setInput(e.target.value)
  const onSubmit =()=>{
    console.log("I am testing the send button")
  }

  const isError = input === ''
const [state] = useState({})
  useEffect (() => {
    document.title='Analytikus | Contact Us';
});
  return (
    <>
    <Grid templateColumns={{base:('100%'),md:'',lg:'repeat(3, 1fr)'}} background="#140e2e" h="100vh" p={8} >
      <Show below="md">
        <GridItem h='100vh' width='100%' background="#140e2e" display="center" justifyContent="center"
        alignItems="center">
<Flex>
<Box position="relative" >


<Box>
<Box

width={{base:'0',md:'20px',lg:"20px"}}
height={{base:'0',md:'20px',lg:"20px"}}

borderRadius="50%"


bg={"linear-gradient(196.94deg, #158AFF 15.45%, #1F4CC8 45.29%, #6100D0 88.33%)"} />

</Box>


<Box>
<Text color="#FFFFFF" align="center" fontWeight="200" fontSize="4xl">
  
  <Typewriter
  options={{
    autoStart: true,
  loop: 1,
  delay:40,
  strings:[
    "Hello",
    "Sawbona",
    "Molo",
    "Nda!"
  ]

}}
  ></Typewriter>
</Text>
</Box>




</Box>

</Flex>
        </GridItem>
      </Show>
      <Hide below="md">
<GridItem h='100vh'  background="#140e2e" display="center" justifyContent="center"
        alignItems="center">
<Flex>
<Box position="relative" >


<Box>
<Box

width={{base:'0',md:'20px',lg:"20px"}}
height={{base:'0',md:'20px',lg:"20px"}}

borderRadius="50%"


bg={"linear-gradient(196.94deg, #158AFF 15.45%, #1F4CC8 45.29%, #6100D0 88.33%)"} />

</Box>


<Box>
<Text color="#FFFFFF" align="center" fontWeight="200" fontSize="123px">Hello</Text>
</Box>




</Box>

</Flex>
</GridItem>
      </Hide>
<Hide below="md">
<GridItem h='100vh'  background="#140e2e" display="center" justifyContent="center"
        alignItems="center">
<Flex>
<Box position="relative" >


<Box>
<Box

width={{base:'0',md:'20px',lg:"20px"}}
height={{base:'0',md:'20px',lg:"20px"}}

borderRadius="50%"


bg={"linear-gradient(196.94deg, #158AFF 15.45%, #1F4CC8 45.29%, #6100D0 88.33%)"} />

</Box>


<Box>
<Text color="#FFFFFF" align="center" fontWeight="200" fontSize="123px">Sawbona</Text>
</Box>




</Box>

</Flex>
    
</GridItem>

</Hide>
<Hide below="md">

<GridItem h='100vh'  background="#140e2e" display="center" justifyContent="center"
        alignItems="center">

<Flex>
<Box position="relative" >


<Box>
<Box

width={{base:'0',md:'20px',lg:"20px"}}
height={{base:'0',md:'20px',lg:"20px"}}

borderRadius="50%"


bg={"linear-gradient(196.94deg, #158AFF 15.45%, #1F4CC8 45.29%, #6100D0 88.33%)"} />

</Box>


<Box>
<Text color="#FFFFFF" align="center" fontWeight="200" fontSize="123px">Molo</Text>
</Box>




</Box>

</Flex>


    
</GridItem>
</Hide>

































</Grid>

<Grid  templateColumns={{base:('100%'),md:'',lg:'repeat(3, 1fr)'}}  background="#140e2e" h="100vh" p={8}>
  <Hide below="md">

  <GridItem h='100vh'  background="#140e2e" display="flex"  justifyContent="center"
        alignItems="center">
<Box w={{
      base: '5rem', // 0-48em
      md: '35rem', // 48em-65rem,
      xl: '65rem', // 65rem+
    }} h={{
      base: '5rem', // 0-48em
      md: '35rem', // 48em-65rem,
      xl: '65rem', // 65rem+
    }} border="3px dashed white" borderRadius="50%"


t={{
  base:'10%',
  md: '10%', // 48em-10%,
  xl:'50%', 
}}
className="rotatingCircle"
l={{
  base:'10%',
  md: '10%', // 48em-10%,
  xl: '10%', 
}}
transform="translate(-50%, -50%)"
>
  <Box
position="absolute"
width={{base:'0',md:'20px',lg:"20px"}}
height={{base:'0',md:'20px',lg:"20px"}}
left="12%"
borderRadius="50%"
top="15%"
bg={"linear-gradient(196.94deg, #158AFF 15.45%, #1F4CC8 45.29%, #6100D0 88.33%)"} />

<Box
position="absolute"
width={{base:'0',md:'20px',lg:"20px"}}
height={{base:'0',md:'20px',lg:"20px"}}
left="99%"
borderRadius="50%"
top="42%"
bg={"linear-gradient(196.94deg, #158AFF 15.45%, #1F4CC8 45.29%, #6100D0 88.33%)"} />


</Box>
<Box w={{
      base: '5rem', // 0-48em
      md: '50rem', // 48em-50rem,
      xl: '35rem', // 50rem+
    }} h={{
      base: '50rem', // 0-48em
      md: '50rem', // 48em-50rem,
      xl: '35rem', // 50rem+
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
width={{base:'0',md:'20px',lg:"20px"}}
height={{base:'0',md:'20px',lg:"20px"}}
left="97%"
borderRadius="50%"
top="36.6%"
bg={"linear-gradient(196.94deg, #158AFF 15.45%, #1F4CC8 45.29%, #6100D0 88.33%)"} />

<Box
position="absolute"
width={{base:'0',md:'20px',lg:"20px"}}
height={{base:'0',md:'20px',lg:"20px"}}
left="12.9%"
borderRadius="50%"
top="12%"
bg={"linear-gradient(196.94deg, #158AFF 15.45%, #1F4CC8 45.29%, #6100D0 88.33%)"} />




</Box>






 </GridItem>

  </Hide>
  

 <GridItem h='100vh' zIndex={999}  background="#140e2e" display="flex" justifyContent="center"
        alignItems="center">
 {/* <Flex  alignItems="center" justifyContent='center'  display='center' >
  <Box color='white' flexDirection='column'>

    <Text fontSize='3xl'>WANT TO WORK WITH US?</Text>
    
    
  </Box>
  <Text color='white' >We certainly hope so</Text>
  <Text color='white'   fontSize='3xl'>WE WOULD LIKE TO HEAR FROM YOU</Text>
  <Text color='white' >Fill in the form, we will get back to you shortly</Text>

  
</Flex>    */}

<Flex position='absolute' zIndex={999} display='flex' flexDirection='column'>
  <Box color='white'  align="center" justifyContent='center' display='center'>

    <Text fontSize={{base:'2xl', md:'', lg:'3xl'}}>WANT TO WORK WITH US?</Text>
    
    
  </Box>
  <Text color='white' p={2} display='center' justifyContent='center' alignContent='center' fontSize={{base:'8px', md:'', lg:'13px'}} >We certainly hope so</Text>
  <Text color='white' p={2} width='100%'display='center' justifyContent='center' alignContent='center' fontSize={{base:'10px', md:'', lg:'3xl'}}>WE WOULD LIKE TO HEAR FROM YOU</Text>
  <Text color='white' p={2} display='center' justifyContent='center' alignContent='center' fontSize={{base:'10px', md:'', lg:'13px'}}>Fill in the form, we will get back to you shortly</Text>

  {/* FOrm */}
  <Tabs isFitted={true}   variant='enclosed' gap={6}  >
  <TabList >
    <Tab size={{sm:3,md:22,lg:3}}  _selected={{ color: 'white', bg: 'linear-gradient( #001545 -52.23%, #158AFF 93.43%)' }}>
      <Flex flexDirection='column'>

      <MdLocationOn size={33} color="white" boxShadow= '0px 4px 4px rgba(0, 0, 0, 0.25)'
 bg={'linear-gradient( #001545 -52.23%, #158AFF 93.43%)'} />
 <Text className='addresss' fontSize={{base:'9px',md:'12px', lg:'14px' }} p={1} color="white">Address</Text>
      </Flex>
      
      </Tab>
      
    
    
    
    <Tab    _selected={{ color: 'white', bg: 'linear-gradient( #001545 -52.23%, #158AFF 93.43%)' }}>
      <Flex flexDirection='column'>
      <MdCall size={33}style={{
      
      right: '16rem',
    }} color="white"/>
      <Text fontSize={{base:'7px',md:'12px', lg:'14px' }} className='numbers' color='white'>Phone</Text>
      </Flex>
      </Tab>
    <Tab defaultIndex={3} _selected={{ color: 'white', bg: 'linear-gradient( #001545 -52.23%, #158AFF 93.43%)' }}>
<Flex flexDirection='column'>
      <MdMailOutline size={33}  style={{
   
      
    }} mr= {{base:'5rem',md:'8rem',lg:'6rem'}}color="white"/>

      <Text color='white' fontSize={{base:'9px',md:'12px', lg:'14px' }} mr={12} >Email</Text>
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














{/* <Box >
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
    
   
    onClick='tel:0112933032'
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
</Box> */}
</Flex>  








 </GridItem>

 <Hide below="md">

  <GridItem h='100vh' top='50%'  background="#140e2e" display="flex" justifyContent="center"
        alignItems="center">
<Box w={{
      base: '5rem', // 0-48em
      md: '65rem', // 48em-65rem,
      xl: '45rem', // 65rem+
    }} h={{
      base: '5rem', // 0-48em
      md: '65rem', // 48em-65rem,
      xl: '45rem', // 65rem+
    }} border="3px dashed white" borderRadius="50%"


t={{
  base:'10%',
  md: '10%', // 48em-10%,
  xl: '10%', 
}}
className="rotatingCircle"
l={{
  base:'10%',
  md: '10%', // 48em-10%,
  xl: '10%', 
}}
transform="translate(-50%, -50%)"
>
  <Box
position="absolute"
width={{base:'0',md:'20px',lg:"20px"}}
height={{base:'0',md:'20px',lg:"20px"}}
left="12%"
borderRadius="50%"
top="15%"
bg={"linear-gradient(196.94deg, #158AFF 15.45%, #1F4CC8 45.29%, #6100D0 88.33%)"} />

<Box
position="absolute"
width={{base:'0',md:'20px',lg:"20px"}}
height={{base:'0',md:'20px',lg:"20px"}}
left="99%"
borderRadius="50%"
top="42%"
bg={"linear-gradient(196.94deg, #158AFF 15.45%, #1F4CC8 45.29%, #6100D0 88.33%)"} />


</Box>
<Box w={{
      base: '5rem', // 0-48em
      md: '50rem', // 48em-50rem,
      xl: '25rem', // 50rem+
    }} h={{
      base: '50rem', // 0-48em
      md: '50rem', // 48em-50rem,
      xl: '25rem', // 50rem+
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
width={{base:'0',md:'20px',lg:"20px"}}
height={{base:'0',md:'20px',lg:"20px"}}
left="97%"
borderRadius="50%"
top="36.6%"
bg={"linear-gradient(196.94deg, #158AFF 15.45%, #1F4CC8 45.29%, #6100D0 88.33%)"} />

<Box
position="absolute"
width={{base:'0',md:'20px',lg:"20px"}}
height={{base:'0',md:'20px',lg:"20px"}}
left="12.9%"
borderRadius="50%"
top="12%"
bg={"linear-gradient(196.94deg, #158AFF 15.45%, #1F4CC8 45.29%, #6100D0 88.33%)"} />




</Box>






 </GridItem>

  </Hide>
</Grid>
{/* <Grid h="50vh" background="#140e2e">
<Flex ml='33%' zIndex={4}>
<Tabs isFitted variant='enclosed'  gap={6}>
  <TabList mb='1em' >
    <Tab _selected={{ color: 'white', bg: 'linear-gradient(190.95deg, #001545 -52.23%, #158AFF 93.43%)' }}>
      <Flex flexDirection='column'>

      <MdLocationOn size={33} color="white" boxShadow= '0px 4px 4px rgba(0, 0, 0, 0.25)'
 bg={'linear-gradient(190.95deg, #001545 -52.23%, #158AFF 93.43%)'} />
 <Text fontSize='10px' color="white">Address</Text>
      </Flex>
      
      </Tab>
      
    
    
    
    <Tab  _selected={{ color: 'white', bg: 'linear-gradient(190.95deg, #001545 -52.23%, #158AFF 93.43%)' }}>
      <Flex flexDirection='column'>
      <MdCall size={33} color="white"/>
      <Text fontSize='10px' color='white'>Phone</Text>
      </Flex>
      </Tab>
    <Tab _selected={{ color: 'white', bg: 'linear-gradient(190.95deg, #001545 -52.23%, #158AFF 93.43%)' }}>
      <Flex flexDirection='column'>
      <MdMailOutline size={33} color="white"/>
      </Flex>
      <Text fontSize='10px' color='white'>Email</Text>
      </Tab>
  </TabList>
  <TabPanels>
    <TabPanel  width='600' height='300'>
    <iframe width='600' height='300'  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3585.935356151862!2d28.009230417443852!3d-26.00293489999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1e9576ce929ae60f%3A0x7e582c276800ebda!2s4%20Pieter%20Wenning%20Rd%2C%20Fourways%2C%20Sandton%2C%202068!5e0!3m2!1sen!2sza!4v1661955679725!5m2!1sen!2sza" w="50"></iframe>
    </TabPanel>
    <TabPanel >
    <iframe width='600' height='300'></iframe>
   </TabPanel>

    <TabPanel>
    
    <FormControl mr='10%' isRequi#140e2e color="white">
        

        <Flex  mb={10} >
        
        <Input w='60%' placeholder='Full Name' type='text' onChange={handleInputChange}/>
        
        <Input w='60%' ml='10px' placeholder='Email Address' type='email' onChange={handleInputChange}/>

        </Flex>

        <Box mb={8}>

        <Textarea rows="10"  resize='none' />

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

     
   
    </TabPanel>
  </TabPanels>
</Tabs>
</Flex>
</Grid> */}

    </>
  )
}

export default Contact