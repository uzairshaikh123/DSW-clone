import { ReactNode } from 'react';
import {
  Box,
  Flex,
  Avatar,
  Link,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  useDisclosure,
  useColorModeValue,
  Stack,
  useColorMode,
  Center,
  Text,
} from '@chakra-ui/react';
import logo from '../img/logo.png';
import { MoonIcon, SunIcon } from '@chakra-ui/icons';
import {Link as RLink} from 'react-router-dom'
import { useContext } from 'react';
import { AuthContext } from '../AuthContext/Data';
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






export default function Nav() {
const { colorMode, toggleColorMode } = useColorMode();
  const { isOpen, onOpen, onClose } = useDisclosure();
  let Authobj = useContext(AuthContext)
let {Homepage} = Authobj
const handleadmin=()=>{

  Homepage()

}


  return (
    <>
      <Box bg={useColorModeValue('gray.100', 'gray.900')} px={4}>
        <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
          <Box>
            <RLink to="/">
                <img width={"80px"} src={logo} alt="" onClick={handleadmin}/>
                </RLink>
                               </Box>

          <Flex alignItems={'center'}>
          <RLink to="/">

<Button onClick={handleadmin}>HOME</Button>
  </RLink>
            
            <RLink to="/addproduct">

          <Button>ADD PRODUCT</Button>
            </RLink>
          <RLink to="/delproduct">

          <Button>UPDATE PRODUCT</Button>
          </RLink>
          <RLink to="/trackthehistory">

          <Button>TRACK PRODUCTS</Button>
          </RLink>
          <RLink to="/trackfeedback">

          <Button>TRACK FEEDBACK</Button>
          </RLink>

            <Stack direction={'row'} spacing={7}>
              <Button onClick={toggleColorMode}>
                {colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
              </Button>

              <Menu>
                <MenuButton
                  as={Button}
                  rounded={'full'}
                  variant={'link'}
                  cursor={'pointer'}
                  minW={0}>
                  <Avatar
                    size={'sm'}
                    src={'https://avatars.dicebear.com/api/male/username.svg'}
                  />
                </MenuButton>
                <MenuList alignItems={'center'}>
                  <br />
                  <Center>
                    <Avatar
                      size={'2xl'}
                      src={'https://avatars.dicebear.com/api/male/username.svg'}
                    />
                  </Center>
                  <br />
                  <Center>
                    <p>Username</p>
                  </Center>
                  <br />
                  <MenuDivider />
                  <MenuItem>Your Servers</MenuItem>
                  <MenuItem>Account Settings</MenuItem>
                  <MenuItem>Logout</MenuItem>
                </MenuList>
              </Menu>
            </Stack>
          </Flex>
        </Flex>
      </Box>
    </>
  );
}