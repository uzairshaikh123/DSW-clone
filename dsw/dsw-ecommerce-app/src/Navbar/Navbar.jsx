import { ReactNode } from 'react';
import {
  Box,
  Flex,
  Avatar,
  HStack,
  Link,
  IconButton,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  useDisclosure,
  useColorModeValue,
  Stack,
  Text,Input
} from '@chakra-ui/react';
import {Link as RLink} from 'react-router-dom'
// import hello from '../../img/hello';
import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons';
import { PhoneIcon, AddIcon, WarningIcon,Search2Icon } from '@chakra-ui/icons'
import 'font-awesome/css/font-awesome.min.css'
// import { HiOutlineUserCircle } from 'react-icons/fa';
// import { HiOutlineUserCircle } from 'react-icons/bi';
import hello from '../img/hello';
//HiOutlineUserCircle
import logo from '../img/logo.png'
 import { FaUser,FaMapMarkerAlt,FaCartPlus } from "react-icons/fa";
//  import {FontAwesomeIcon} from '@fortawesome/free-solid-svg-icons'
//  import { faAddressBook } from '@fortawesome/free-solid-svg-icons'
// import { faCircle } from '@fortawesome/free-regular-svg-icons'
// import { faFacebookF } from '@fortawesome/free-brands-svg-icons'
// import { faFreebsd } from '@fortawesome/free-brands-svg-icons'


const NavLink = ({ children }: { children: ReactNode }) => (
  <Link
    px={2}
    py={1}
    rounded={'md'}
    _hover={{
      textDecoration: 'none',
      bg: useColorModeValue('gray.200', 'gray.700'),
    }}
    href={'#'}>
    {children}
  </Link>
);

export default function Navbar() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Box bg={useColorModeValue('white', 'gray.900')}  px={6} >
        <Flex h={32}   alignItems={'center'} justifyContent={'space-between'}>
          <IconButton
            size={'md'}
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            aria-label={'Open Menu'}
            display={{ md: 'none' }}
            onClick={isOpen ? onClose : onOpen}
          />
          <HStack spacing={8} width="65%" alignItems={'center'} >
            <Box>
            <RLink to="/" >
           <img width="100px" src={logo} />
           </RLink>

            </Box>
            <HStack
              as={'nav'}
              spacing={4}
              display={{ base: 'none', md: 'flex' }}>
              {/* {Links.map((link) => (
                <NavLink key={link}>{link}</NavLink>
              ))} */}
            
              <Flex width="450px" h={"55px"} border="2px solid gray"  alignItems={'center'} flexDirection={"row"} justifyContent={'space-around'}>

              <Text>Search DSW</Text> 
              <Input type="text"  variant='flushed'  width="350px" placeholder= 'search styles,brands and more' border={"none"}/>
              
              
              </Flex>
              <Button>  
                

                <Search2Icon />
              
                </Button>
              
            </HStack>
            
          </HStack>
          
          {/* <Flex h={36} alignItems={'center'} justifyContent={'space-between'}>
           
            </Flex> */}
            <Flex width="500px" justifyContent={'space-around'}>
              <RLink to="/signin">
              <FaUser/> <span>Sign In</span>
              </RLink >
              <RLink to="/store">
                <Text>
              <FaMapMarkerAlt />  Find a store</Text>
              </RLink>
            {/* <FontAwesomeIcon icon="fa-solid fa-cart-shopping" /> */}
           <RLink to="/cart"> 
          <span>
          <FaCartPlus/>
           
              </span>
          <span>
           Bag
           
              </span>

           </RLink>
              </Flex>
          <Flex alignItems={'center'} justifyContent={"space-around"}>
            
         
            <Menu>
              <MenuButton
                as={Button}
                rounded={'full'}
                variant={'link'}
                cursor={'pointer'}
                minW={0}>
                <Avatar
                  size={'sm'}
                  src={
                    'https://images.unsplash.com/photo-1493666438817-866a91353ca9?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&s=b616b2c5b373a80ffc9636ba24f7a4a9'
                  } width="50px"
                  height="50pxpx"
                />
              </MenuButton>
              <MenuList>
                <MenuItem>Username</MenuItem>
                <MenuItem>Email</MenuItem>
               <RLink to="/adminlogin" > <MenuItem>Admin Login</MenuItem></RLink>
               <RLink to="/adminregister" > <MenuItem>Admin Register</MenuItem></RLink>
                
                <MenuDivider />
                <MenuItem>Logout</MenuItem>
              </MenuList>
            </Menu>
          </Flex>
        </Flex>

        {isOpen ? (
          <Box pb={4} display={{ md: 'none' }}>
            <Stack as={'nav'} spacing={4}>
              {/* {Links.map((link) => (
                <NavLink key={link}>{link}</NavLink>
              ))} */}
            </Stack>
          </Box>
        ) : null}
      </Box>
      </>
  );
}