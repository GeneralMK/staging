import React, { useRef, useState, useEffect } from "react";
import JamesPic from '../assets/images/James.png';
import Linda from '../assets/images/Linda nobg.png'
import Phathutshedzo from '../assets/images/Muriel.png'
import Tsiko from '../assets/images/Tsiko.png'
import Tshenolo from '../assets/images/Tshenolo.png'
import jb from '../assets/images/Njabulo.png'
import Lunga from '../assets/images/Lunga.png'
import Thandiwe from '../assets/images/Thandiwe.png'
import Masixole from '../assets/images/Masixole.png'
import Shudu from '../assets/images/Shudu.png'
import Phindile from '../assets/images/Phindile 2.png'
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import {
    useDisclosure,
    Image,
    Heading,
    Text,
    Stack,
    Box,
    Drawer,
    DrawerBody,
    DrawerFooter,
    DrawerHeader,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
    Link,
    Flex,
    Grid, GridItem,
  } from '@chakra-ui/react';
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";


// import required modules
import { Pagination, Navigation } from "swiper";


export default function App() {

  const { isOpen, onOpen, onClose } = useDisclosure()
  const btnRef = React.useRef()
  let [selectedProfile, setSelectedProfile] = useState({})
 

 
        const handleInputChange = (index) =>{
       

        let object = profiles[index];


        setSelectedProfile({...object})
        
        onOpen()
      }

    
      

    const profiles=[
      {
        id:1,
        name:"Phindile R",
        title: "HEAD NERD",
        officail:"CEO",
        imageLink: Phindile,
        bio:"Founder and CEO of Analytikus Group. He brings 18 years of experience in Technology and Innovation with a focus on Robotics and Artificial intelligence where he plays a key influence in the ROS (Robotics Operating System) community. He has led teams both in Management and Executive roles in some of the most reputable companies on the globe in which he is a board member. Under his leadership, Analytikus has over 28 patents in various technologies.A nerd at heart, lover of anime, cars and timepieces.",
        songLink:"https://embed.music.apple.com/us/album/free-enterprise-feat-john-legend/1440836241?i=1440836251"
    },
    {
        id:2,
        name:"Muriel M",
        title: "Boss lady",
        officail:"Head Of Projects",
        imageLink: Phathutshedzo,
        bio:"As head of operations Muriel has over 18 years’ experience in leadership and managerial roles in the private sector and impactful civil society organizations such ActionAid and Southern African AIDS Trust. Under her leadership the operations and strategic goals of Analytikus are archived with triumph. Before joining Analytikus her passion for social change prompted Muriel to cofound an Internet Service Provider company, that provided WIFI to rural areas. She currently is a board member of a Proposed Cooperative Bank where she holds the position of Deputy Secretary and a member of MICT SETA Policy Advisory Committee. In her down time, she enjoys hosting to show off her cooking skills and is a lover of good music.",
        songLink:"https://embed.music.apple.com/us/album/promises-feat-joe-l-barnes-naomi-raine/1571839845?i=1571840194"
    },

    {
        id:3,
        name:"Linda J",
        title: "Strategic Officer",
        officail:"Strategic Officer",
        imageLink:Linda,
        bio:"With 25 Years experience in the Telco/ICT space – ranging from System/Equipment compliance, Network Planning/Deployment, Project Management, Product Development, Sales and Stakeholder Management. He is driven by how Analytikus  influence Innovation and the future of the workplace. Position Analytikus to its customers to enhance their business through Innovation, thus being more competitive in their areas of business. Building relationships and creating Win-Win Value Proposition to enhance the customer’s shareholder value. Linda spends time reading/debating/brainstorming and playing golf when not with the family.",
        songLink:""
      
    },

    {
        id: 3,
        name:"James P",
        title: "PROJECTS",
        imageLink:JamesPic,
        bio:"As a research and development specialist james has over 5 years experience in leading teams across various industries including technology. With history in project management at Analytikus he now focuses in supporting the technical team with innovative ideas and development concepts to ensure that our projects are well executedJames' zeal in career growth has resulted in him pursuing in project management, information technology and is currently pursuing Amazon web services cloud development, Amazon web services solution architecture and various soft skills that grow him as an individual and as a valuable asset to Analytikus. James like watching football",
        songLink:"https://embed.music.apple.com/us/album/running-the-streets-feat-a-boogie-wit-da-hoodie-denzel-curry/1473864777?i=1473864901"
    },
   

    {
      id: 4,
      name:"Njabulo S",
      title: "SUPPORT",
      imageLink: jb,
      bio:"With his previous work experience in various industries including engineering, Njabulo is a technical assistant that supports the Analytikus engineering team with its daily administration and play an active role in operations running smoothly. his research and development assistance enables the engineering team to thrive under pressure. While being at Analytikus he has extended his passion for technology and is now furthering his studies in software programming.In his down time you will find Njabulo being a braai master while indulging in deep house music.",
      songLink:""
    },

  

    {
      id: 5,
      name:"Lunga P",
      title: "All Things Network",
      imageLink:Lunga,
      bio:"Lunga is a striving young network engineer at Analytikus who handles all the connectivity requiredat Analytikus, whether its for clients or in house troubleshooting and is not hesitant in getting his hands dirty in the mess. From Shandong Jiatong University in China for his BSc in Computer Sciences, he is currently working on his LPI certifications to become a qualified Linux Professional,as-well as his AWS Data Analytics certifications adding more skills to his arsenal. Lunga is always in constant motion in his developments, as he is only limited by his ambition, which much like Analytikus, knows no boundaries",
      songLink:"https://embed.music.apple.com/us/album/power/1440742903?i=1440742907"
    },

    

    // {
    //   id:7,
    //   name:"Tshenolo L",
    //   title: "DEVELOPMENT",
    //   imageLink:Tshenolo,
    //   bio:"Hi I am Linda J",
    //   songLink:""
    // },

    

    // {
    //   id:8,
    //   name:"Masixole K",
    //   title: "DEVELOPMENT",
    //   imageLink:Masixole,
    //   bio:"Hi I am Linda J",
    //   songLink:"https://embed.music.apple.com/us/album/n12-jazz/969812803?i=969812808"
    // },

    {
      id: 6,
      name:"Thandiwe M",
      title: "Graphics Designer",
      imageLink:Thandiwe,
      bio:"Hi I am Thandiwe J",
      songLink:"https://embed.music.apple.com/us/album/come-over-feat-popcaan/1516976490?i=1516976494"
      
    },
  
  ]


  return (

    <>
    <Grid className='aboutGrid' templateColumns='100%' background="#140e2e" h="60vh" p={30}>
    <GridItem background="#140e2e" display="center" justifyContent="center"
            alignItems="center" flexDirection="column"  >
    
    
    <Flex flexDirection="column" mt='15rem' justifyContent="center" alignItems="center" gap={36}>
    <Text color="white" 
    fontSize={{
      base: '3xl', // 0-48em
      md: '2xl', // 48em-80em,
      xl: '5xl'
    }}>Meet Our Team</Text>
  
    
    </Flex>
    
    
    </GridItem>
    

    </Grid>
   
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
          <DrawerHeader color='#FAFAFA'>{selectedProfile.id} 

          <Text fontSize='3xl'>Profile</Text>

          <Box border="1px solid  #FFFFFF"
      w={{
        base: '100rem', // 0-48em
        md: '30rem', // 48em-80em,
        xl: '53rem',
        
      }}

      borderBottom={0}
      borderLeft={0}
      borderRight={0}

      />

       
          
          </DrawerHeader>

          <DrawerBody color='white'>
            <Box>
            <Grid templateColumns='30% 70%'className='aboutGrid' gap={6}>
  <GridItem  w='100%' h='100%' bg={"linear-gradient(150.2deg, #001545 -15.61%, #158AFF 98.66%)"}>
    
  <Image borderRadius="10%"  src={selectedProfile.imageLink} 
                            />

  </GridItem>
  <GridItem w='100%' h='100%'  >
    <Stack color='#FAFAFA'>

      <Box>
        <Text fontSize={{base:'14px',md:'', lg:'4xl'}}>{selectedProfile.name}</Text>
        <Text fontSize={{base:'10px',md:'', lg:'2xl'}}>{selectedProfile.title}</Text>
      </Box>

      {/* <Box >
        <Text>Get to know me through music:</Text>
         <Flex>
          <iframe allow="autoplay *; encrypted-media *; fullscreen *" frameborder="0" height="150" style="width:100%;max-width:660px;overflow:hidden;background:transparent;" sandbox="allow-forms allow-popups allow-same-origin allow-scripts allow-storage-access-by-user-activation allow-top-navigation-by-user-activation" src="https://embed.music.apple.com/us/album/free-enterprise-feat-john-legend/1440836241?i=1440836251"></iframe>
        </Flex> 
       
      </Box> */}

    </Stack>

  </GridItem>
  
</Grid>
            </Box>
            <Box p={23} flexDirection='column' fontSize='normal'>
              <Text fontSize={{base:'10px', md:'', lg:'22px'}} >
              {selectedProfile.bio}
              </Text>
            
            </Box>
            
          </DrawerBody >
            
          <Box border="1px solid  #FFFFFF"
      w={{
        base: '100rem', // 0-48em
        md: '30rem', // 48em-80em,
        xl: '53rem',
        
      }}

      borderBottom={0}
      borderLeft={0}
      borderRight={0}

      />
          <DrawerFooter color="#FAFAFA">

         
           
            <Flex justifyContent="left" display="center" alignItems="center" p={4} >
                <Box border="10px solid white" borderRadius="50%" p={3}>

                </Box>
                <Box
                border="8px solid white"
                borderTop={0}
                borderLeft={0}
                borderRight={0} display="flex"
                justifyContent="center" alignItems="center"
                borderRightRadius="25%"
                ml="-3"
                
                >
                <Link color="white" onClick={onClose}
                pl="20px" textDecoration="none">
                close
                </Link>


                </Box>
                </Flex>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>

      <Swiper
        slidesPerView={2.5}
        spaceBetween={30}
        loop={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        
        < >
          {
            

            
            profiles.map((profile, index)=>{
              
           
                return(
                  <>         
                    
                      <SwiperSlide >
                        <Box w='200%' h='100%'  >
                            <Image className='team_img'   borderRadius='5%'   ref={btnRef} colorScheme='teal'  onClick={()=>handleInputChange(index)}
                            objectFit="cover" 
                            
                            src={profile.imageLink}
                            />
                            <Box pl={6} pt={4} textAlign="left" borderLeft="1px solid white" color='white'>
                                <Heading fontSize={{base:'14px', md:'', lg:'2xl'}} mb={2}>{profile.name}</Heading>
                                <Text fontSize={{base:'10px', md:'', lg:'2xl'}}>{profile.title}</Text>
                            </Box>
                        </Box>
                        
                      </SwiperSlide>
                      

                      
                  </>
                  
                  
                  
                 

              )
              

              

              
            })

            
          }




            
     
            
        </>
       
      </Swiper>
      
      
    </>
  );
}
