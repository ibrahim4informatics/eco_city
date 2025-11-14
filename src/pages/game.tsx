import Box from "@/components/motion/Box";
import Button from "@/components/motion/Button";
import { Heading, Link } from "@chakra-ui/react";

const Game = () => {
    return (
        <>
            <Box display={"flex"} alignItems={"center"} p={4} gap={2}>
                <Heading color={"accent.600"} size={"5xl"} my={4} flex={1} textAlign={"center"}>Play Filter Game</Heading>
                <Button colorPalette={"red"}  size={"lg"} rounded={"full"} asChild>
                    <Link href="/">Exit</Link>
                </Button>
            </Box>
        </>
    )
}


export default Game;