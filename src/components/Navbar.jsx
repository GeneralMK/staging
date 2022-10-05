import {
  Box,
 
  Flex,
  Text,
  IconButton,
  
  Stack,
  Collapse,
  Icon,
  Link,
  Popover,
  PopoverTrigger,
  PopoverContent,

  useColorModeValue,
  Image,
  useDisclosure,
} from '@chakra-ui/react';
import {
  HamburgerIcon,
  CloseIcon,
 
  ChevronDownIcon,
 
} from '@chakra-ui/icons';
import Logo from "../assets/Analytikus - Vertical Logo (Colour)-01.png"

export default function WithSubnavigation() {
  const { isOpen, onToggle } = useDisclosure();

  return (
    <Box>
      <Flex
 background="#140e2e"
 position="relative"

 z-index={999}

        color="#fafafa"
        minH={'60px'}
        py={{ base: 2 }}
        px={{ base: 4 }}
        borderBottom={1}
        // borderStyle={'solid'}
         borderColor={useColorModeValue('white.200', 'white.900')}
        align={'center'}>
        <Flex
          flex={{ base: 1, md: 'auto' }}
          ml={{ base: -2 }}
          display={{ base: 'flex', md: 'none' }}>
          <IconButton
            onClick={onToggle}
            icon={
              isOpen ? <CloseIcon w={3} h={3} /> : <HamburgerIcon w={5} h={5} />
            }
            variant={'ghost'}
            aria-label={'Toggle Navigation'}
          />
        </Flex>
        <Flex flex={{ base: 1 }} justify={{ base: 'center', md: 'start' }} alignItems="center">
        <Image
        pl="110px"
        w="15%"

  objectFit='cover'
  src={Logo}
  alt='Dan Abramov'
/>

          <Flex display={{ base: 'none', md: 'flex' }} ml={10}>
            <DesktopNav />
          </Flex>
        </Flex>

        <Stack
          flex={{ base: 1, md: 0 }}
          justify={'flex-end'}
          direction={'row'}
          spacing={6}>
            
              
            
          {/* <Button
          color="#fafafa"
            as={'a'}
            fontSize={'sm'}
            fontWeight={400}
            variant={'link'}
            href={'#'}>
            Sign In
          </Button>
          <Button
            display={{ base: 'none', md: 'inline-flex' }}
            fontSize={'sm'}
            fontWeight={600}
            color={'navy'}
            bg={'#C6E912'}
             href={'#'}
            _hover={{
              bg: 'pink.300',
            }}>
            Get In Touch
          </Button> */}
        </Stack>
      </Flex>

      <Collapse in={isOpen} animateOpacity>
        <MobileNav />
      </Collapse>
    </Box>
  );
}

const DesktopNav = () => {
  const linkColor = useColorModeValue('white.600', 'white.200');
  const linkHoverColor = useColorModeValue('#158AFF', "#140e2e");
  // const popoverContentBgColor = useColorModeValue("#001545" , 'gray.800');
  
  return (
    <Stack  direction={'row'}  spacing={4} pl="110px"  fontSize= "13px"left="38.52%"
    right= "41.87%" w="100%" position="relative" zIndex={9}>
      {NAV_ITEMS.map((navItem) => (
        <Box key={navItem.label}>
          <Popover trigger={'hover'} placement={'bottom-start'}>
            <PopoverTrigger>
              <Link
              isExternal
                p={2}
                href={navItem.href ?? '#'}
                fontSize="27px"
                fontWeight={500}
                color={linkColor}
                _hover={{
                  textDecoration: 'none',
                  color: linkHoverColor,
                }}>
                {navItem.label}
              </Link>
            </PopoverTrigger>

            {navItem.children && (
              <PopoverContent
                border={0}
                boxShadow={'xl'}
                bgGradient='linear(357.96deg, #001545 -9.58%, #158AFF 94.38%)'

                p={4}
                rounded={'xl'}
                minW={'sm'}>
                <Stack>
                  {navItem.children.map((child) => (
                    <DesktopSubNav key={child.label} {...child} />
                  ))}
                </Stack>
              </PopoverContent>
            )}
          </Popover>
        </Box>
      ))}
    </Stack>
  );
};

const DesktopSubNav = ({ label, href, subLabel }) => {
  return (
    <Link
      href={href}
      role={'group'}
      display={'block'}
      p={1}
      borderRadius= "0px 25px 25px 25px"
      rounded={'md'}
      _hover={{ bg: useColorModeValue('blue.50', 'gray.900') }}>
      <Stack direction={'row'}  align={'center'}>
        <Box>
          <Text
            transition={'all .3s ease'}
            _groupHover={{ color: '#158AFF' }}
            fontWeight={500}>
            {label}
          </Text>
          <Text fontSize={'sm'}>{subLabel}</Text>
        </Box>
        <Flex
          transition={'all .3s ease'}
          transform={'translateX(-10px)'}
          opacity={0}
          _groupHover={{ opacity: '100%', transform: 'translateX(0)' }}
          justify={'flex-end'}
          align={'center'}
          flex={1}>
          {/* <Icon color={'pink.400'} w={5} h={5} as={ChevronRightIcon} /> */}
        </Flex>
      </Stack>
    </Link>
  );
};

const MobileNav = () => {
  return (
    <Stack
      bg={useColorModeValue('white', 'white.800')}
      p={4}
      className='aboutGrid'
      display={{ md: '12xl' }}>
      {NAV_ITEMS.map((navItem) => (
        <MobileNavItem key={navItem.label} {...navItem} />
      ))}
    </Stack>
  );
};

const MobileNavItem = ({ label, children, href }) => {
  const { isOpen, onToggle } = useDisclosure();

  return (
    <Stack spacing={5} zIndex={999} onClick={onToggle} className='aboutGrid'>
      <Flex
      className='aboutGrid'
        py={2}
        color="white.400"
        as={Link}
        href={href ?? '#'}
        justify={'space-between'}
        align={'center'}
        _hover={{
          textDecoration: 'none',
        }}>
        <Text
          fontWeight={600}
          color={useColorModeValue('white.600', 'white.200')}>
          {label}
        </Text>
        {children && (
          <Icon
            as={ChevronDownIcon}
            transition={'all .25s ease-in-out'}
            transform={isOpen ? 'rotate(180deg)' : ''}
            color='black'
            w={6}
            h={6}
          />
        )}
      </Flex>

      <Collapse in={isOpen} animateOpacity style={{ marginTop: '0!important' }}>
        <Stack
          mt={2}
          pl={4}
          borderLeft={1}
          borderStyle={'solid'}
          borderColor={useColorModeValue('(357.96deg, #001545 -9.58%, #158AFF 94.38%)')}
          align={'start'}
          zIndex={9}>
          {children &&
            children.map((child) => (
              <Link key={child.label} py={2} href={child.href}>
                {child.label}
              </Link>
            ))}
        </Stack>
      </Collapse>
    </Stack>
  );
  
};

//

const NAV_ITEMS = [
  {
    label: 'COMPANY',
    href: '/Home',
    
    children: [
      {
        
        label: 'ABOUT US',
        href: '/About',
        
      },
      
    ],
  },
  {
    label: 'WHAT WE OFFER',
    href: '/Offer',
   
   
  },
 
  
  {
    label: 'CONTACT US',
    href: '/Contact-Us',
  },
];