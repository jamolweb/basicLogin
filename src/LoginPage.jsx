import {
  Box,
  Button,
  Container,
  Flex,
  Heading,
  Input,
  Text
} from "@chakra-ui/react";
import { Link } from 'react-router-dom'
import { useRef } from "react";

function LoginPage() {

  const emailRef = useRef('')

  return (
    <Container maxW={'container.xl'}>
      <Heading textAlign={'center'}>
        Login page
      </Heading>
      <Box w={'50%'} m={'0 auto'} mt={'30px'}>
        <Input
          placeholder="enter your email"
          ref={emailRef}
        />
        <Input my={'20px'} placeholder="enter your password" />
        <Box flexDirection={'column'}>
          <Button w={'100%'} colorScheme="facebook" >Log in</Button>
          <Text color={'blue'}>
            <Link to='/regester'>or register</Link>
          </Text>
        </Box>
      </Box>
    </Container>
  )
}

export default LoginPage;