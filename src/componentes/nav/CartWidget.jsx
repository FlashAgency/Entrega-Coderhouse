import { Box, IconButton, Text, useDisclosure } from "@chakra-ui/react"
import React, { useContext } from "react"
import { AiOutlineShopping } from "react-icons/ai"
import { CartContext } from "../../context/ShoppingCartContext"
import Cart from "./Cart"

const CartWidget = () => {
  const { cartCount, cartItems, clearCart } = useContext(CartContext)
  const { isOpen, onOpen, onClose } = useDisclosure()
  const btnRef = React.useRef()

  return (
    <Box pos='relative'>
      <IconButton 
      onClick={onOpen}
      ref={btnRef}
      aria-label='Cart' 
      variant='ghost'
      size='sm' 
      color='white' 
      cursor='pointer'
      left='5'
      as={AiOutlineShopping}
      _hover={{ bg: '#2c577a', border: 'none', color: 'gray.200' }} 
      _active={{ bg: '#2c577a', border: 'none'}}
      />
      <Text borderRadius="full" justify='center' align='center' bg='white' 
      style={{ 
        color: "#2c577a",
        width: "1.5rem",
        height: "1.5rem",
        position: "absolute",
        top: -10,
        right: -5,
        left: 5,
        transform: "translate(25%, 25%)"}}>
        {cartCount}
      </Text>
      <Cart isOpen={isOpen} btnRef={btnRef} onClose={onClose} cartItems={cartItems} clearCart={clearCart}/>
    </Box>
  )                                  
}

export default CartWidget