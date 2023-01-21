import {
    Flex,
    Box,
    FormControl,
    FormLabel,
    Input,
    InputGroup,
    HStack,
    InputRightElement,
    Stack,
    Button,
    Heading,
    Text,
    useColorModeValue,
    Link,
    Alert,
  } from '@chakra-ui/react';
import { useState } from 'react'
  import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons';
import { useNavigate } from 'react-router-dom';
import { useRef } from 'react';
import Alerts from './Alerts';
import Error from './Error';
import { useContext } from 'react';
import { AuthContext } from '../AuthContext/Data';
  
  export default function Register() {
    const [showPassword, setShowPassword] = useState(false);
    const navigate = useNavigate();
    const [alerts,setalerts] = useState(false)
    const dref = useRef({})
    let arr=JSON.parse(localStorage.getItem('data')) || []
    const Authobj = useContext(AuthContext)
    let {storeuser} = Authobj
const handlesubmit=(e)=>{

let first =(dref.current['name'].value)
let last=(dref.current['lastname'].value)
let email=(dref.current['email'].value)
let password=(dref.current['password'].value)
let obj ={
  "name":first+" " +last,
  "email": email,
  "password": password
}

if(obj.name=="" || obj.email=="" || obj.password==""){

 setalerts(false)
// setTimeout(()=>{
// navigate("/register")
// },1500)
}else{

  arr.push(obj)
  localStorage.setItem("data",JSON.stringify(arr))
  storeuser(obj.name,obj.email)
  // console.log(JSON.parse(localStorage.getItem('data')))
setalerts(true)
setTimeout(()=>{
navigate("/signin")
},1500)

  
}





}



  const handlelogin=()=>{
    navigate("/signin")
  }
    return (
      alerts?<Alerts />:<Flex
        minH={'100vh'}
        align={'center'}
        justify={'center'}
        // bg={useColorModeValue('gray.50', 'gray.800')}
        >
        <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6}>
          <Stack align={'center'}>
            <Heading fontSize={'4xl'} textAlign={'center'}>
              Sgn up
            </Heading>
            <Text fontSize={'lg'} color={'gray.600'}>
              to enjoy all of our cool features ✌️
            </Text>
          </Stack>
          <form action="" onSubmit={handlesubmit}>
          <Box
            rounded={'lg'}
            // bg={useColorModeValue('white', 'gray.700')}
            boxShadow={'lg'}
            p={8}>
              
            <Stack spacing={4}>
              <HStack>
                <Box>
                  <FormControl id="firstName" isRequired>
                    <FormLabel>First Name</FormLabel>
                    <Input type="text"  ref={e=>dref.current['name']=e}/>
                  </FormControl>
                </Box>
                <Box>
                  <FormControl id="lastName">
                    <FormLabel>Last Name</FormLabel>
                    <Input type="text" ref={e=>dref.current['lastname']=e}/>
                  </FormControl>
                </Box>
              </HStack>
              <FormControl id="email" isRequired>
                <FormLabel>Email address</FormLabel>
                <Input type="email" ref={e=>dref.current['email']=e} />
              </FormControl>
              <FormControl id="password" isRequired>
                <FormLabel>Password</FormLabel>
                <InputGroup>
                  <Input type={showPassword ? 'text' : 'password'} ref={e=>dref.current['password']=e} />
                  <InputRightElement h={'full'}>
                    <Button
                      variant={'ghost'}
                      onClick={() =>
                        setShowPassword((showPassword) => !showPassword)
                      }>
                      {showPassword ? <ViewIcon /> : <ViewOffIcon />}
                    </Button>
                  </InputRightElement>
                </InputGroup>
              </FormControl>
              <Stack spacing={10} pt={2}>
                <Button
                  loadingText="Submitting"
                  size="lg"
                  bg={'gray.400'}
                  color={'white'}
                  _hover={{
                    bg: 'black.500',
                  }} onClick={handlesubmit}>
                  Sign up
                </Button>
             
              </Stack>
              <Stack pt={6}>
                <Text align={'center'}>
                  Already a user? <span style={{color:"blue"}} onClick={handlelogin}>Login</span>
                </Text>
              </Stack>
            </Stack>
          </Box>
          </form>
        </Stack>
      </Flex>
    );
  }