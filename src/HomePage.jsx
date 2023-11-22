import { Box, Container } from "@chakra-ui/react"

let somethingArr = [
    1,
    2,
    3,
    4,
    5,
    6,
    7,
    8,
    9,
    10,
]

const HomePage = () => {
  return (
    <>
        <Container maxW={'container.xl'} gap={'20px'} flexWrap={'wrap'} display={'flex'}>
            {
                somethingArr.map((card, i)=>(
                    <Box key={i} w={'20%'} h={'250px'} textAlign={'center'} bg={'red'} >
                        {
                            card
                        }
                    </Box>
                ))
            }
        </Container>
    </>
  )
}

export default HomePage