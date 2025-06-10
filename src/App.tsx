// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'
import { Box, Flex, Heading, Image } from '@chakra-ui/react'
import logo from "../assets/images/logo-mark.svg";

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <Box>
        <Flex>
          <Image src={logo}/>
          <Heading>hola</Heading>
        </Flex>
      </Box>
    </>
  )
}

export default App
