import {
    Box,
    chakra,
    Container,
    Stack,
    Text,
    Image,
    Flex,
    VStack,
    Button,
    Heading,
    SimpleGrid,
    StackDivider,
    useColorModeValue,
    VisuallyHidden,
    List,
    ListItem,
  } from '@chakra-ui/react';
import { useEffect ,useState} from 'react';
import { useParams } from 'react-router-dom';
  import { FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa';
import MoreInfo from './MoreInfo';
import Footer from '../Components/Pages/Footer';
import Ratingsfun from '../Ratings/Ratingfun';
import Modalfun from './Modal';
import { useContext } from 'react';
import { AuthContext } from '../AuthContext/Data';

  export default function Simple() {
    const [arr,setarr] = useState({})
    let { id } = useParams();
    let Authobj= useContext(AuthContext)

    let {data} = Authobj
    
    useEffect(()=>{
      
      
    let ndata = data.filter((item)=>{
        return item.id==id
    })
    setarr({...ndata[0]})




    },[])
    console.log(arr)

    return (
        <Box>
      <Container maxW={'7xl'}>
        <SimpleGrid
          columns={{ base: 1, lg: 2 }}
          spacing={{ base: 8, md: 10 }}
          py={{ base: 18, md: 24 }}>
          <Flex>
            <Image
              rounded={'md'}
              alt={'product image'}
             src={arr.img}
              fit={'cover'}
              align={'center'}
              w={'100%'}
              h={{ base: '100%', sm: '400px', lg: '500px' }}
            />
          </Flex>
          <Stack spacing={{ base: 6, md: 10 }}>
            <Box as={'header'}>
              <Heading
                lineHeight={1.1}
                fontWeight={600}
                fontSize={{ base: '2xl', sm: '4xl', lg: '5xl' }}>
               {data.name}
              </Heading>
              <Text
                color={useColorModeValue('gray.900', 'gray.400')}
                fontWeight={300}
                fontSize={'2xl'}>
                ${arr.price}
            
              </Text>
              <img width={"90px"} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRauOGLtNzVAWhLL34f14v15aXnVwFTVJM-qw&usqp=CAU" alt="" />

            </Box>
  
            <Stack
              spacing={{ base: 4, sm: 6 }}
              direction={'column'}
              divider={
                <StackDivider
                  borderColor={useColorModeValue('gray.200', 'gray.600')}
                />
              }>
              <VStack spacing={{ base: 4, sm: 6 }}>
                <Text
                  color={useColorModeValue('gray.500', 'gray.400')}
                  fontSize={'2xl'}
                  fontWeight={'300'}>
             {arr.desc}
                </Text>
                <Text fontSize={'lg'}>
                Shoes are not luxury items they are necessities we ensure that you get them according to your choice.
                Want best quality shoes at reasonable price do visit our store.
                Reasonable price and stunning style that’s what our shoes are known for.
                </Text>
              </VStack>
              <Box>
                <Text
                  fontSize={{ base: '16px', lg: '18px' }}
                  color={useColorModeValue('yellow.500', 'yellow.300')}
                  fontWeight={'500'}
                  textTransform={'uppercase'}
                  mb={'4'}>
                  Features
                </Text>
  
                <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
                  <List spacing={2}>
                    <ListItem> Size 12 is available in Black and Brown</ListItem>
                    <ListItem>Order a half size larger, as these oxfords generally runs narrow</ListItem>{' '}
                    <ListItem>Made in the USA</ListItem>
                  </List>
                  <List spacing={2}>
                    <ListItem>Give yourself a comfortable step with our comfortable shoesc</ListItem>
                    <ListItem>We understand the need of your feet we are equipped to serve you with the best shoes.</ListItem>
                    <ListItem>Life is not walking on the moon…you need to walk on unfriendly tracks….your shoes can be your best mates.</ListItem>
                  </List>
                </SimpleGrid>
              </Box>
              <Box>
                <Text
                  fontSize={{ base: '16px', lg: '18px' }}
                  color={useColorModeValue('yellow.500', 'yellow.300')}
                  fontWeight={'500'}
                  textTransform={'uppercase'}
                  mb={'4'}>
                  Product Details
                </Text>
  
                <List spacing={2}>
                  <ListItem>
                    <Text as={'span'} fontWeight={'bold'}>
                      Soul Width:
                    </Text>{' '}
                    20 mm
                  </ListItem>
                  <ListItem>
                    <Text as={'span'} fontWeight={'bold'}>
                      Materail:
                    </Text>{' '}
                    leather strap
                  </ListItem>
                  <ListItem>
                    <Text as={'span'} fontWeight={'bold'}>
                      Case:
                    </Text>{' '}
                   Carbon
                  </ListItem>
                  <ListItem>
                    <Text as={'span'} fontWeight={'bold'}>
                      Soul diameter:
                    </Text>{' '}
                    42 mm
                  </ListItem>
                  <ListItem>
                    <Text as={'span'} fontWeight={'bold'}>
                      Shoe color:
                    </Text>{' '}
                    Gray/Black
                  </ListItem>
                  <ListItem>
                    <Text as={'span'} fontWeight={'bold'}>
                      Crystal:
                    </Text>{' '}
                    Domed, scratch‑resistant sapphire crystal with anti‑reflective
                    treatment inside
                  </ListItem>
                  <ListItem>
                    <Text as={'span'} fontWeight={'bold'}>
                      Water resistance:
                    </Text>{' '}
                    5 bar (50 metres / 167 feet){' '}
                  </ListItem>
                </List>
              </Box>
            </Stack>
  
            <Button
            
              rounded={'none'}
              w={'full'}
              mt={8}
              size={'lg'}
              py={'7'}
              bg={useColorModeValue('gray.900', 'gray.50')}
              color={useColorModeValue('white', 'gray.900')}
              textTransform={'uppercase'}
              _hover={{
                transform: 'translateY(2px)',
                boxShadow: 'lg',
              }}>
              <Modalfun key={data.id} id={data.id} name={data.name} img={data.img} desc={data.desc} price={data.price}/>
            </Button>
  
            <Stack direction="row" alignItems="center" justifyContent={'center'}>
             
              <Text>2-3 business days delivery</Text>
            </Stack>
          </Stack>
        </SimpleGrid>
      </Container>
      {<MoreInfo />}
      {<Ratingsfun />}
      {<Footer />}
      </Box>
    );
  }


  

