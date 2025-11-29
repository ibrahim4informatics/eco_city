import { Box, Text } from "@chakra-ui/react"

const Footer = ()=>{
    return (
        <Box bg={"bg.300"} p={6} display={"flex"} alignItems={"center"} justifyContent={"center"}>
            <Text fontWeight={"bold"} fontSize={20}>Made By Ibrahim&Aziz 2025-2026</Text>
        </Box>
    )
}

export default Footer;