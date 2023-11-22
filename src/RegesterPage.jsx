import {
    Box,
    Button,
    Container,
    Heading,
    Input
} from "@chakra-ui/react";
import { useRef } from "react";
import axios from 'axios'

function RgesterPage() {

    const emailRef = useRef('');
    const psRef = useRef('');

    let auth = async()=>{
        try {
            let res = await axios.put('http://localhost:5005/auth/register', {
                username:emailRef.current.value,
                password:psRef.current.value,
            })
            console.log(res.data);
        } catch (error) {
            console.log(error.response.data.message);
        }
    }

    const register = () => {
        auth()
    }

    return (
        <Container maxW={'container.xl'}>
            <Heading textAlign={'center'}>
                Register page
            </Heading>
            <Box w={'50%'} m={'0 auto'} mt={'30px'}>
                <Input
                    placeholder="enter your email"
                    ref={emailRef}
                />
                <Input
                    ref={psRef}
                    my={'20px'}
                    placeholder="enter your password"
                />
                <Button onClick={register} colorScheme="facebook">Register</Button>
            </Box>
        </Container>
    )
}

export default RgesterPage;