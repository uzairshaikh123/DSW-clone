import { ChevronDownIcon } from '@chakra-ui/icons'
import {
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    MenuItemOption,
    MenuGroup,
    MenuOptionGroup,
    MenuDivider,
    Button,Box, Flex,Text
  } from '@chakra-ui/react'
  import {Link as RLink} from 'react-router-dom'

function  Menubar(){

 
  
  return<Box border={"1px solid gray"} >
    <Flex width="80%"margin={"auto"} justifyContent={"space-around"}>

    
<Menu style={ {border:"2px solid red"}}>
  <MenuButton as={Button} rightIcon={<ChevronDownIcon />}>
    Women
  </MenuButton>
  <MenuList>
    <RLink to="/products">

    </RLink>
    <MenuItem>Shoes</MenuItem>
    <RLink to="/products">

    <MenuItem>Sandals</MenuItem>
</RLink>
<RLink to="/products">

    <MenuItem>Sandals</MenuItem>
</RLink><RLink to="/products">

<MenuItem>Specific footwear</MenuItem>
</RLink><RLink to="/products">

<MenuItem>Traditional footwear</MenuItem>
</RLink>
  </MenuList>
</Menu>
<Menu>
  <MenuButton as={Button} rightIcon={<ChevronDownIcon />}>
    Mens
  </MenuButton>
  <MenuList>
  <RLink to="/products">

 
    <MenuItem>Sneakers</MenuItem>
    </RLink>
    <RLink to="/products">

 
    <MenuItem>Brogues</MenuItem>
    </RLink>
    <RLink to="/products">

 
    <MenuItem>Chelsea boots</MenuItem>
    </RLink>
    <RLink to="/products">

 
    <MenuItem>Espadrilles</MenuItem>
    </RLink>
    <RLink to="/products">

 
    <MenuItem>Loafers</MenuItem>
    </RLink>
    
  </MenuList>
</Menu>
<Menu>
  <MenuButton as={Button} rightIcon={<ChevronDownIcon />}>
    Kids
  </MenuButton>
  <MenuList>
    <MenuItem>Athletic Shoes</MenuItem>
    <MenuItem>School Shoes</MenuItem>
    <MenuItem>Slip On Shoe</MenuItem>
    <MenuItem>Pre-Walking Shoe</MenuItem>
    <MenuItem>Toddler Shoe</MenuItem>
  </MenuList>
</Menu>
<Menu>
  <MenuButton as={Button} rightIcon={<ChevronDownIcon />}>
    Accessories & clothing
  </MenuButton>
  <MenuList>
    <MenuItem>Hats & caps for men</MenuItem>
    <MenuItem>Necklace Designs For Women</MenuItem>
    <MenuItem>Bracelets for men</MenuItem>
    <MenuItem>Cufflinks</MenuItem>
    <MenuItem>Scarves & mufflers for guys</MenuItem>
  </MenuList>
</Menu>
<Menu>
  <MenuButton as={Button} rightIcon={<ChevronDownIcon />}>
    Atheletic & Sneakers
  </MenuButton>
  <MenuList>
    <MenuItem>Jogging</MenuItem>
    <MenuItem>Racquetball</MenuItem>
    <MenuItem>Aerobic dancing</MenuItem>
    <MenuItem>Recreational </MenuItem>
    <MenuItem>Exercising</MenuItem>
  </MenuList>
</Menu>
<Menu>
  <MenuButton as={Button} rightIcon={<ChevronDownIcon />}>
   Brands
  </MenuButton>
  <MenuList>
    <MenuItem>Reebok</MenuItem>
    <MenuItem>Adidas a Copy</MenuItem>
    <MenuItem>Puma</MenuItem>
    <MenuItem>ASICS</MenuItem>
    <MenuItem>New Balance</MenuItem>
  </MenuList>
</Menu>
<Menu>
  <MenuButton as={Button} rightIcon={<ChevronDownIcon />}>
    Clearence
  </MenuButton>
  <MenuList>
    <MenuItem>Clearence</MenuItem>
    <MenuItem>New Balance</MenuItem>
    <MenuItem>Puma</MenuItem>
    <MenuItem>ASICS</MenuItem>
    <MenuItem>New Balance</MenuItem>
  </MenuList>
</Menu>
<Menu>
  <MenuButton as={Button} rightIcon={<ChevronDownIcon />}>
    Atheletic & Sneakers
  </MenuButton>
  <MenuList>
  <MenuItem>Jogging</MenuItem>
    <MenuItem>Racquetball</MenuItem>
    <MenuItem>Aerobic dancing</MenuItem>
    <MenuItem>Recreational </MenuItem>
    <MenuItem>Exercising</MenuItem>
  </MenuList>
</Menu>
<Button>Deals</Button>
</Flex>
</Box>
}
export default Menubar

//import { Fade, ScaleFade, Slide, SlideFade } from '@chakra-ui/react'

// function CollapseEx() {
//   const { isOpen, onToggle } = useDisclosure()

//   return (
//     <>
//       <Button onClick={onToggle}>Click Me</Button>
//       <Collapse in={isOpen} animateOpacity>
//         <Box
//           p='40px'
//           color='white'
//           mt='4'
//           bg='teal.500'
//           rounded='md'
//           shadow='md'
//         >
//           <Lorem count={1} />
//         </Box>
//       </Collapse>
//     </>
//   )
// }