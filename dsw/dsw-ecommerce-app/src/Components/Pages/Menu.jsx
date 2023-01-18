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

function  Menubar(){

 
  
  return<Box border={"1px solid gray"} >
    <Flex width="80%"margin={"auto"} justifyContent={"space-around"}>

    
<Menu>
  <MenuButton as={Button} rightIcon={<ChevronDownIcon />}>
    Women
  </MenuButton>
  <MenuList>
    <MenuItem>Download</MenuItem>
    <MenuItem>Create a Copy</MenuItem>
    <MenuItem>Mark as Draft</MenuItem>
    <MenuItem>Delete</MenuItem>
    <MenuItem>Attend a Workshop</MenuItem>
  </MenuList>
</Menu>
<Menu>
  <MenuButton as={Button} rightIcon={<ChevronDownIcon />}>
    Mens
  </MenuButton>
  <MenuList>
    <MenuItem>Download</MenuItem>
    <MenuItem>Create a Copy</MenuItem>
    <MenuItem>Mark as Draft</MenuItem>
    <MenuItem>Delete</MenuItem>
    <MenuItem>Attend a Workshop</MenuItem>
  </MenuList>
</Menu>
<Menu>
  <MenuButton as={Button} rightIcon={<ChevronDownIcon />}>
    Kids
  </MenuButton>
  <MenuList>
    <MenuItem>Download</MenuItem>
    <MenuItem>Create a Copy</MenuItem>
    <MenuItem>Mark as Draft</MenuItem>
    <MenuItem>Delete</MenuItem>
    <MenuItem>Attend a Workshop</MenuItem>
  </MenuList>
</Menu>
<Menu>
  <MenuButton as={Button} rightIcon={<ChevronDownIcon />}>
    Accessories & clothing
  </MenuButton>
  <MenuList>
    <MenuItem>Download</MenuItem>
    <MenuItem>Create a Copy</MenuItem>
    <MenuItem>Mark as Draft</MenuItem>
    <MenuItem>Delete</MenuItem>
    <MenuItem>Attend a Workshop</MenuItem>
  </MenuList>
</Menu>
<Menu>
  <MenuButton as={Button} rightIcon={<ChevronDownIcon />}>
    Atheletic & Sneakers
  </MenuButton>
  <MenuList>
    <MenuItem>Download</MenuItem>
    <MenuItem>Create a Copy</MenuItem>
    <MenuItem>Mark as Draft</MenuItem>
    <MenuItem>Delete</MenuItem>
    <MenuItem>Attend a Workshop</MenuItem>
  </MenuList>
</Menu>
<Menu>
  <MenuButton as={Button} rightIcon={<ChevronDownIcon />}>
   Brands
  </MenuButton>
  <MenuList>
    <MenuItem>Download</MenuItem>
    <MenuItem>Create a Copy</MenuItem>
    <MenuItem>Mark as Draft</MenuItem>
    <MenuItem>Delete</MenuItem>
    <MenuItem>Attend a Workshop</MenuItem>
  </MenuList>
</Menu>
<Menu>
  <MenuButton as={Button} rightIcon={<ChevronDownIcon />}>
    Clearence
  </MenuButton>
  <MenuList>
    <MenuItem>Download</MenuItem>
    <MenuItem>Create a Copy</MenuItem>
    <MenuItem>Mark as Draft</MenuItem>
    <MenuItem>Delete</MenuItem>
    <MenuItem>Attend a Workshop</MenuItem>
  </MenuList>
</Menu>
<Menu>
  <MenuButton as={Button} rightIcon={<ChevronDownIcon />}>
    Atheletic & Sneakers
  </MenuButton>
  <MenuList>
    <MenuItem>Download</MenuItem>
    <MenuItem>Create a Copy</MenuItem>
    <MenuItem>Mark as Draft</MenuItem>
    <MenuItem>Delete</MenuItem>
    <MenuItem>Attend a Workshop</MenuItem>
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