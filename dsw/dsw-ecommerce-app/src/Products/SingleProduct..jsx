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

  export default function Simple() {
    const [data,setdata] = useState({})
    let { id } = useParams();
    let arr = [
        {
            id: 1,
            name: "adidas",
            img: "https://images.dsw.com/is/image/DSWShoes/530395_100_ss_01?impolicy=colpg&imwidth=400&imdensity=1",
            price: 109.99,
            desc: "Alphabounce 1 Running Shoe - Men's"
        },
        {
            id: 2,
            name: "Puma",
            price: 59.99,
            img: "https://images.dsw.com/is/image/DSWShoes/530447_100_ss_01?impolicy=colpg&imwidth=400&imdensity=1",
            desc: "Ever FS Sneaker - Men's"
        },
        {
            id: 3,
            name: "adidas",
            price: 59.99,
            img: "https://images.dsw.com/is/image/DSWShoes/530396_100_ss_01?impolicy=colpg&imwidth=400&imdensity=1",
            desc: "Grand Court 2.0 Sneaker - Men's"
        },
        {
            id: 4,
            name: "adidas",
            price: 79.99,
            img: "https://images.dsw.com/is/image/DSWShoes/530530_100_ss_01?impolicy=colpg&imwidth=400&imdensity=1",
            desc: "Lite Racer Adapt 5.0 Sneaker - Men's"
        },
        {
            id: 5,
            name: "Crown Vintage",
            price: 79.99,
            img: "https://images.dsw.com/is/image/DSWShoes/523902_240_ss_01?impolicy=colpg&imwidth=400&imdensity=1",
            desc: "Edsul Sneaker"
        },
        {
            id: 6,
            name: "New Balance",
            price: 79.99,
            img: "https://images.dsw.com/is/image/DSWShoes/501697_001_ss_01?impolicy=colpg&imwidth=400&imdensity=1",
            desc: "Kaptir 2.0 Sneaker - Men's"
        },
        {
            id: 7,
            name: "adidas",
            price: 109.99,
            img: "https://images.dsw.com/is/image/DSWShoes/505491_030_ss_01?impolicy=colpg&imwidth=400&imdensity=1",
            desc: "Fresh Foam Roav Sneaker - Men's"
        },
        {
            id: 8,
            name: "Puma",
            price: 59.99,
            img: "https://images.dsw.com/is/image/DSWShoes/531546_060_ss_01?impolicy=colpg&imwidth=400&imdensity=1",
            desc: "Softride One4All Sneaker - Men's"
        },
        {
            id: 9,
            name: "Puma",
            price: 109.99,
            img: "https://images.dsw.com/is/image/DSWShoes/520072_100_ss_01?impolicy=colpg&imwidth=400&imdensity=1",
            desc: "Ever FS Sneaker"
        },
        {
            id: 10,
            name: "Crown Vintage",
            price: 79.99,
            img: "https://images.dsw.com/is/image/DSWShoes/528805_060_ss_01?impolicy=colpg&imwidth=400&imdensity=1",
            desc: "Ebben Sneaker"
        },
        {
            id: 11,
            name: "Vans",
            price: 129.99,
            img: "https://images.dsw.com/is/image/DSWShoes/515160_400_ss_01?impolicy=colpg&imwidth=400&imdensity=1",
            desc: "Runfalcon 2.0 Running Shoe - Men's"
        },
        {
            id: 12,
            name: "adidas",
            price: 59.99,
            img: "https://images.dsw.com/is/image/DSWShoes/293308_001_ss_01?impolicy=colpg&imwidth=400&imdensity=1",
            desc: "Asher Slip-On Sneaker - Men's"
        },
        {
            id: 13,
            name: "adidas",
            price: 109.99,
            img: "https://images.dsw.com/is/image/DSWShoes/508630_026_ss_01?impolicy=colpg&imwidth=400&imdensity=1",
            desc: "Ward Sneaker - Men's"
        },
        {
            id: 14,
            name: "adidas",
            price: 79.99,
            img: "https://images.dsw.com/is/image/DSWShoes/524235_410_ss_01?impolicy=colpg&imwidth=400&imdensity=1",
            desc: "Lite Racer BYD 2.0 Sneaker - Mens"
        },
        {
            id: 15,
            name: "Reebok",
            price: 59.99,
            img: "https://images.dsw.com/is/image/DSWShoes/530825_001_ss_01?impolicy=colpg&imwidth=400&imdensity=1",
            desc: "Hoops 3.0 Mid High-Top Sneaker - Men's"
        },
        {
            id: 16,
            name: "Vans",
            price: 129.99,
            img: "https://images.dsw.com/is/image/DSWShoes/533207_102_ss_01?impolicy=colpg&imwidth=400&imdensity=1",
            desc: "237 Sneaker - Men's"
        },
        {
            id: 17,
            name: "ASICS",
            price: 109.99,
            img: "https://images.dsw.com/is/image/DSWShoes/508055_037_ss_01?impolicy=colpg&imwidth=400&imdensity=1",
            desc: "Fresh Foam 680 v7 Running Shoe - Men's"
        },
        {
            id: 18,
            name: "ASICS",
            price: 59.99,
            img: "https://images.dsw.com/is/image/DSWShoes/530441_001_ss_01?impolicy=colpg&imwidth=400&imdensity=1",
            desc: "Run '70s Running Shoe - Men's"
        },
        {
            id: 19,
            name: "Vans",
            price: 129.99,
            img: "https://images.dsw.com/is/image/DSWShoes/512327_001_ss_01?impolicy=colpg&imwidth=400&imdensity=1",
            desc: "GEL-Venture 8 Running Shoe - Men's"
        },
        {
            id: 20,
            name: "ASICS",
            price: 109.99,
            img: "https://images.dsw.com/is/image/DSWShoes/531790_060_ss_01?impolicy=colpg&imwidth=400&imdensity=1",
            desc: "515 Sneaker - Men's"
        },
        {
            id: 21,
            name: "Reebok",
            price: 79.99,
            img: "https://images.dsw.com/is/image/DSWShoes/523614_061_ss_01?impolicy=colpg&imwidth=400&imdensity=1",
            desc: "Kaptir 2.0 Running Shoe - Men's"
        },
        {
            id: 22,
            name: "Vans",
            price: 79.99,
            img: "https://images.dsw.com/is/image/DSWShoes/474330_048_ss_01?impolicy=colpg&imwidth=400&imdensity=1",
            desc: "840 v5 Running Shoe - Men's"
        },
        {
            id: 23,
            name: "Brooks",
            price: 129.99,
            img: "https://images.dsw.com/is/image/DSWShoes/520084_300_ss_01?impolicy=colpg&imwidth=400&imdensity=1",
            desc: "GT-1000 11 Running Shoe - Men's"
        },
        {
            id: 24,
            name: "Reebok",
            price: 79.99,
            img: "https://images.dsw.com/is/image/DSWShoes/448007_001_ss_01?impolicy=colpg&imwidth=400&imdensity=1",
            desc: "Rebound Rugged Sneaker - Men's"
        },
        {
            id: 25,
            name: "Reebok",
            price: 129.99,
            img: "https://images.dsw.com/is/image/DSWShoes/449960_001_ss_01?impolicy=colpg&imwidth=400&imdensity=1",
            desc: "Range High-Top Sneaker - Men's"
        }, {
            id: 26,
            name: "ASICS",
            price: 59.99,
            img: "https://images.dsw.com/is/image/DSWShoes/518607_001_ss_01?impolicy=colpg&imwidth=400&imdensity=1",
            desc: "Pacer Future Street Plus Running Shoe - Men's"
        },
        {
            id: 27,
            name: "Brooks",
            price: 109.99,
            img: "https://images.dsw.com/is/image/DSWShoes/516732_000_ss_01?impolicy=colpg&imwidth=400&imdensity=1",
            desc: "Fresh Foam 680 v7 Running Shoe - Men's"
        },
        {
            id: 28,
            name: "Skechers",
            price: 79.99,
            img: "https://images.dsw.com/is/image/DSWShoes/506302_774_ss_01?impolicy=colpg&imwidth=400&imdensity=1",
            desc: "Fresh Foam Roav Running Shoe - Men's"
        },
        {
            id: 29,
            name: "Skechers",
            price: 79.99,
            img: "https://images.dsw.com/is/image/DSWShoes/544445_600_ss_01?impolicy=colpg&imwidth=400&imdensity=1",
            desc: "Daily 3.0 Sneaker - Men's"
        },
        {
            id: 30,
            name: "Brooks",
            price: 109.99,
            img: "https://images.dsw.com/is/image/DSWShoes/505853_241_ss_01?impolicy=colpg&imwidth=400&imdensity=1",
            desc: "Atwood Deluxe Sneaker - Men's"
        },
        {
            id:31,
            name:"",
            price:100.99,
            img:"https://images.dsw.com/is/image/DSWShoes/534700_360_ss_01?impolicy=qlt-medium&imwidth=800&imdensity=1",
            desc: "Atwood Deluxe Sneaker - Men's"

        },
        {
            id:32,
            name:"",
            price:100.99,
            img:"https://images.dsw.com/is/image/DSWShoes/531252_701_ss_01?impolicy=qlt-medium&imwidth=800&imdensity=1",
            desc: "Atwood Deluxe Sneaker - Men's"

        }
    ]

// useEffect(()=>{

// arr.filter((item)=>{
//     return item.id==id
// })
// setdata([...arr])
// },[data])
useEffect(()=>{

    let ndata = arr.filter((item)=>{
        return item.id==id
    })
    setdata({...ndata[0]})
    },[])
    

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
             src={data.img}
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
                ${data.price}
            
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
             {data.desc}
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
              Add to cart
            </Button>
  
            <Stack direction="row" alignItems="center" justifyContent={'center'}>
             
              <Text>2-3 business days delivery</Text>
            </Stack>
          </Stack>
        </SimpleGrid>
      </Container>
      {<MoreInfo />}
      {<Footer />}
      </Box>
    );
  }


  

