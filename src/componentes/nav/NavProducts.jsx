import { Menu, MenuButton, MenuList, MenuItem, Button, Text, MenuGroup} from "@chakra-ui/react"
import { BiChevronDown } from "react-icons/bi";
import { Link as ReactRouterLink } from 'react-router-dom'
import { Link as ChakraLink } from '@chakra-ui/react'
const NavProducts = () => {
  return(
    <Menu>
        <MenuButton
          variant='ghost' 
          as={Button} 
          rightIcon={<BiChevronDown color="white" />}
          _hover={{ bg: '#2c577a', border: 'none' }} 
          _active={{ bg: '#2c577a', border: 'none'}}
        >
          <Text fontSize='lg' color='white'>Productos</Text>
        </MenuButton>
        <MenuList display='flex' flexWrap='wrap' gap='6'>
          <MenuGroup title='Fantasia'>
          <ChakraLink as={ReactRouterLink} reloadDocument to='/category/pulseras'>
            <MenuItem>Pulseras</MenuItem>
          </ChakraLink>
          <ChakraLink as={ReactRouterLink} reloadDocument to='/category/aros'>
            <MenuItem>Aros</MenuItem>
          </ChakraLink>
          <ChakraLink as={ReactRouterLink} reloadDocument to='/category/collares'>
            <MenuItem>Collares</MenuItem>
          </ChakraLink>
          
          </MenuGroup>
        </MenuList>
      </Menu>
  )
}

export default NavProducts