import {
    Box,
    Container,
    Link,
    SimpleGrid,
    Stack,
    Text,
    Flex,
    Tag,
    Image,
    useColorModeValue,
  } from '@chakra-ui/react';
  import { ReactNode } from 'react';
  import logo from "../assets/Analytikus - Horizontal Logo (White) (100x100px)-01.png"
  
  const Logo = () => {
    return (
      <Image
      w="290px"
       objectFit='cover'
       src={logo}
       alt='Dan Abramov'
     />
    );
  };
  
  const ListHeader = ({ children }) => {
    return (
      <Text fontWeight={'500'} fontSize={'lg'} mb={21}>
        {children}
      </Text>
    );
  };
  
  export default function LargeWithLogoCentered() {
    return (
      <Box
      className='aboutGrid'
        bg="#140e2e"
        color="#fafafa"
        align={'flex-end'}>
        <Container as={Stack}  flexDirection='column' alignContent='center' maxW={'6xl'} py={10} pt={222}>
          <SimpleGrid columns={{ base: 1, sm: 2, md: 4 }} spacing={8}>
            <Stack align={'flex-start'} >
              <ListHeader fontSize={12} fontWeight="400">Why Analytikus</ListHeader>
              {/* <Link href={'#'}>How we work</Link> */}
              <Stack direction={'row'} align={'center'} spacing={2}>
                <Link href={'/Offer'}>How We Work</Link>
                {/* <Tag
                  size={'sm'}
                  bg={useColorModeValue('green.300', 'green.800')}
                  ml={2}
                  color={'white'}>
                  New
                </Tag> */}
              </Stack>
              {/* <Link href={'#'}>Tutorials</Link>
              <Link href={'#'}>Pricing</Link>
              <Link href={'#'}>Releases</Link> */}
            </Stack>
            <Stack align={'flex-start'}>
              <ListHeader fontSize="33px" fontWeight="400">Company</ListHeader>
              <Link href={'/About'}>About Us</Link>
          
              <Link href={'/Contact-Us'}>Contact Us</Link>
             
            </Stack>
            
            <Stack align={'flex-start'} >
              <ListHeader fontSize="33px" fontWeight="400">Follow Us</ListHeader>
              <Link href={'#'}>Facebook</Link>
              <Link href={'#'}>Instagram</Link>
              {/* <Link href={'#'}>LinkedIn</Link> */}
            </Stack>
          </SimpleGrid>
        </Container>
        <Box py={10}>
          <Flex
            align={'center'}
            _before={{
              content: '""',
              borderBottom: '1px solid',
              borderColor: useColorModeValue('gray.200', 'gray.700'),
              flexGrow: 1,
              mr: 8,
            }}
            _after={{
              content: '""',
              borderBottom: '1px solid',
              borderColor: useColorModeValue('gray.200', 'gray.700'),
              flexGrow: 1,
              ml: 8,
            }}>
            <Logo />
          </Flex>
          <Text pt={6} fontSize={'sm'} textAlign={'center'}>
            © 2022 Analytikus. All rights reserved
          </Text>
        </Box>
      </Box>
    );
  }