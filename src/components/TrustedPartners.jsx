import React from 'react'
import{
    Box,
    Flex,
    Text
} 
from '@chakra-ui/react';
function TrustedPartners() {
  return (
    <>

 
 <Flex h='100%' w='100%' justifyContent='space-evenly' alignItems='center' >
       
        <Box position='relative'   w='50%' h='100%'   border={{base:'none', md:'', lg:'1px dash white'}}>
        
        <Box className='circleBox' 
      
        width= {{base:'0', md:'', lg:'50rem'}}
        height= {{base:'0', md:'', lg:'50rem'}}
        display= 'flex'
        justifyContent= 'center'
        alignItems= 'center'
        
        
        >
            <Text color="white"  pt={{base:"20%", md:'', lg:0}}   fontSize={{
                base:'3xl',
                md:'3xl',
                lg:'5xl'
            }}>
               Trusted Partners
            </Text>

            <Box position = "absolute" top="29%" left='10%'  transform={{base:'rotate(0) ', md:'', lg:'rotate(90deg) translate(-50%, 50%)'}} display='flex' justifyContent='center' alignItems='center'>
            <Box
            width={{base:'0px', md:'', lg:"80px"}}
            height={{base:'0px', md:'', lg:"80px"}}
            borderRadius={{base:'-0%',md:'',lg:"50%"}}
            bg={"linear-gradient(196.94deg, #158AFF 15.45%, #1F4CC8 45.29%, #6100D0 88.33%)"}>

            </Box>

            <Box
            w={{base:'0px', md:'', lg:'90px'}} h={{base:'0px', md:'', lg:'1px'}}bg='white'>
                
            </Box>
                <Flex textDecoration={{base:'underline', md:'',lg:'none'}} color='white' mt={{base:"90%", md:'', lg:0}}  mr={{base:"90%", md:'', lg:0}} transform={{base:'0', md:'', lg:'rotate(269deg)'}} justifyContent="center" textAlign="cente">
                    <Text color="#FFFFFF"   fontWeight="100" fontSize={{base:'2xl', md:'23px', xl:'22px'}}>Invicti</Text>
                </Flex>
            </Box>

            <Box position = "absolute" top="40%" left='80%'  transform={{base:'0', md:'', lg:'rotate(120deg) translate(50%, -50%)'}} display='flex' justifyContent='center' alignItems='center'>
            <Box
            width={{base:'0px', md:'', lg:"60px"}}
            height={{base:'0px', md:'', lg:"60px"}}
            borderRadius={{base:'0%',md:'',lg:"50%"}}
            bg={"linear-gradient(196.94deg, #158AFF 15.45%, #1F4CC8 45.29%, #6100D0 88.33%)"}>

            </Box>

            <Box
           w={{base:'0px', md:'', lg:'90px'}} h={{base:'0px', md:'', lg:'1px'}}bg='white' >
                
            </Box>

            <Flex  textDecoration={{base:'underline', md:'',lg:'none'}} color='white' transform={{base:'0', md:'', lg:'rotate(240deg)'}} mt={{base:"90%", md:'', lg:0}}  mr={{base:"90%", md:'', lg:0}}>
            <Text color="#FFFFFF" className="partners  Microsoft"   fontWeight="100" fontSize={{base:'2xl', md:'23px', xl:'22px'}}>Microsoft</Text>
            </Flex>
           </Box>


            <Box position = "absolute" top="96%" left='50%'  transform={{base:'0',md:'',lg:'rotate(10deg) translate(50%, -50%)'}} display='flex' justifyContent='center' alignItems='center'>
            <Box
            width={{base:'0px', md:'', lg:"60px"}}
            height={{base:'0px', md:'', lg:"60px"}}
            borderRadius={{base:'0%',md:'',lg:"50%"}}
            bg={"linear-gradient(196.94deg, #158AFF 15.45%, #1F4CC8 45.29%, #6100D0 88.33%)"}>

            </Box>

            <Box
           w={{base:'0px', md:'', lg:'90px'}} h={{base:'0px', md:'', lg:'1px'}}bg='white'>
                
            </Box>

            <Flex  textDecoration={{base:'underline', md:'',lg:'none'}} color='white' mt={{base:"47%", md:'', lg:0}}  mr={{base:"90%", md:'', lg:0}}>
                <Text color="#FFFFFF" className="partners  Unity" fontWeight="100" fontSize={{base:'2xl', md:'23px', xl:'22px'}}>Unity</Text>
            </Flex>
            </Box>


            <Box position = "absolute" top="90%" right='86%'  transform={{base:'0', md:'', lg:'rotate(90deg) translate(-50%, -50%)' }}display='flex' justifyContent='center' alignItems='center'>
            <Box
            width={{base:'0px', md:'', lg:"60px"}}
            height={{base:'0px', md:'', lg:"60px"}}
            borderRadius={{base:'0%',md:'',lg:"50%"}}
            bg={"linear-gradient(196.94deg, #158AFF 15.45%, #1F4CC8 45.29%, #6100D0 88.33%)"}>

            </Box>

            <Box
           w={{base:'0px', md:'', lg:'90px'}} h={{base:'0px', md:'', lg:'1px'}}bg='white'>
                
            </Box>
            <Flex  textDecoration={{base:'underline', md:'',lg:'none'}} color='white' mt={{base:"12rem", md:'', lg:0}} transform={{base:'0', md:'', lg:'rotate(269deg)'}}  ml={{base:"110%", md:'', lg:0}} >
                <Text color="#FFFFFF" className="partners  Redgate" fontWeight="100" fontSize={{base:'2xl', md:'23px', xl:'22px'}}>Redgate</Text>
            </Flex>
            </Box>

           

            <Box position = "absolute" top="30%" left='40%'  transform={{base:'0', md:'', lg:'rotate(90deg) translate(-50%, 50%)'}} display='flex' justifyContent='center' alignItems='center'>
            <Box
            width={{base:'0px', md:'', lg:"80px"}}
            height={{base:'0px', md:'', lg:"80px"}}
            borderRadius={{base:'0%',md:'',lg:"50%"}}
            bg={"linear-gradient(196.94deg, #158AFF 15.45%, #1F4CC8 45.29%, #6100D0 88.33%)"}>

            </Box>

            <Box
            w={{base:'0px', md:'', lg:'90px'}} h={{base:'0px', md:'', lg:'1px'}}bg='white'>
                
            </Box>
            <Flex textDecoration={{base:'underline', md:'',lg:'none'}} color='white' mt={{base:"15rem", md:'', lg:0}} transform={{base:'0', md:'', lg:'rotate(269deg)'}}  mr={{base:"90%", md:'', lg:0}}>
                <Text color="#FFFFFF" className="partners  Sonarqube" fontWeight="100" fontSize={{base:'2xl', md:'23px', xl:'22px'}}>Sonarqube</Text>
            </Flex>
            </Box>

            <Box position = "absolute" top="43%" left='77%'  transform={{base:'0',md:'',lg:'rotate(90deg) translate(-50%, 50%)'}} display='flex' justifyContent='center' alignItems='center'>
            <Box
            width={{base:'0px', md:'', lg:"60px"}}
            height={{base:'0px', md:'', lg:"60px"}}
            borderRadius={{base:'0%',md:'',lg:"50%"}}
            bg={"linear-gradient(196.94deg, #158AFF 15.45%, #1F4CC8 45.29%, #6100D0 88.33%)"}>

            </Box>

            <Box
            w={{base:'0px', md:'', lg:'90px'}} h={{base:'0px', md:'', lg:'1px'}}bg='white'>
                
            </Box>
            <Flex  textDecoration={{base:'underline', md:'',lg:'none'}} color='white' transform={{base:'0', md:'', lg:'rotate(269deg)'}} mt={{base:"18rem", md:'', lg:0}}  mr={{base:"90%", md:'', lg:0}}>
            <Text color="#FFFFFF"  className="partners  Testrail" fontWeight="100" fontSize={{base:'2xl', md:'23px', xl:'22px'}}>Testrail</Text>
            </Flex>
           
            </Box>
        </Box>

        

      
        

    </Box>




    </Flex>
    

    </>
  )
}

export default React.memo(TrustedPartners)
