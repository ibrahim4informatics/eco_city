import { Button, Link , Box} from "@chakra-ui/react";
import { IoHomeOutline } from "react-icons/io5";

import { Tooltip } from "../ui/tooltip";
import { GiRetroController } from "react-icons/gi";
import { FaBrain } from "react-icons/fa";

const Naviagation = ()=>{
    return (
        <Box opacity={.7} _hover={{opacity:1}} transition={"opacity 300ms linear"} display={"flex"} justifyContent={{base:"center", lg:"auto"}} gap={4} flexDir={{base:"row", lg:"column"}} pos={"fixed"} left={{base:"50%", lg:4}} translate={{base:"-50%", lg:"auto"}}  top={{base:"auto", lg:4}} bottom={{base:4, lg:"auto"}} p={4} rounded={"full"} shadow={"md"} translateY={"-50%"}  bg={"bg.200"} w={{base:"80%", lg:"auto"}}  zIndex={100}>
            <Tooltip content="Go To Learn Page">
                <Button asChild rounded={"full"} bgColor={"accent.400"} _hover={{bgColor:"accent.600"}} transition={"background-color 300ms linear"} p={4}>
                <Link href="/"><IoHomeOutline/></Link>
            </Button>
            </Tooltip>

             <Tooltip content="Play Game!">
                <Button size={"lg"} asChild rounded={"full"} bgColor={"accent.400"} _hover={{bgColor:"accent.600"}} transition={"background-color 300ms linear"} p={4}>
                <Link href="/game"><GiRetroController/></Link>
            </Button>
            </Tooltip>


            
             <Tooltip content="Take a Quizz!">
                <Button size={"lg"} asChild rounded={"full"} bgColor={"accent.400"} _hover={{bgColor:"accent.600"}} transition={"background-color 300ms linear"} p={4}>
                <Link href="/quizz"><FaBrain/></Link>
            </Button>
            </Tooltip>
        </Box>
    )
}

export default Naviagation;