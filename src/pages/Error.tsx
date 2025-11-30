import Box from "@/components/motion/Box";
import Heading from "@/components/motion/Heading";
import Text from "@/components/motion/Text";
import {useRouteError} from "react-router-dom";
const Error = ()=>{
    
    const error:any = useRouteError();
    return (
        
        <Box bg={"accent.200"} w={"full"} h={"100dvh"} display={"flex"} alignItems={"center"} justifyContent={"center"} flexDirection={"column"} gap={6}>

            <Heading textAlign={"center"} size={{base:"4xl", lg:"5xl"}} color={"red.600"}>Oops</Heading>
            <Text color={"GrayText"}>{`${error.status} | ${error.statusText}`}</Text>

        </Box>
    )
}


export default Error;