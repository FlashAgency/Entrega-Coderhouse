import { Button, Input, InputGroup, InputLeftElement, InputRightAddon } from "@chakra-ui/react";
import { AiOutlineSearch } from "react-icons/ai";


const SearchBar = () => {
  return (
    <>
      <InputGroup justifySelf='center' width={{lg: '3200px', md: '400px'}} borderRadius={5} size="md">
        <InputLeftElement pointerEvents="none">
          <AiOutlineSearch color="#2c577a" />
        </InputLeftElement>
        <Input type="text" placeholder="Buscar..." border='1px solid white' background={"white"}  />
        <InputRightAddon
          p={0}
          border="none"
        >
          <Button bg='#2c577a' color='white' style={{bg: 'white' }}          
          _hover={{ bg: '#2c577a' , border: 'none' }} 
          _active={{ bg: '#2c577a', border: 'none'}} 
          size="md" 
          borderLeftRadius={0} 
          borderRightRadius={3.3} 
          border='1px solid white'>
            Buscar
          </Button>
        </InputRightAddon>
      </InputGroup>
    </>
  );
};

export default SearchBar