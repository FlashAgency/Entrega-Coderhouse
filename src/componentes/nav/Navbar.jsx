import './NavbarStyle.css';
import Brand from "./Brand";
import CartWiget from "./CartWiget";
import ContainerItemList from "./ContainerItemList";
import SearchBar from './SearchBar';
import { Link, List, ListItem, Text, Flex } from "@chakra-ui/react"


function Navbar() {
  return (
    <header>

      <div className='containerBrand'>
        <Brand />

      </div>

      <nav className='containerItemList'>
        <ContainerItemList />

      </nav>
      <Flex align='center'>
            <SearchBar />
          
      </Flex>
      <div className='containerCart'>
        <CartWiget />
      </div>


  
    </header>
  );
}

export default Navbar;