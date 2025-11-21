import GameContainer from "@/components/game/GameContainer";
import Box from "@/components/motion/Box";
import Button from "@/components/motion/Button";
import { Badge, Link } from "@chakra-ui/react";
import { gameBins } from "@/utils/gameConstants";
import Trash from "@/components/game/Trash";
import Bin from "@/components/game/Bin";
import { FaHeart } from "react-icons/fa";
import { useAppSelector } from "@/hooks/useAppSelector";
import Text from "@/components/motion/Text";
import Heading from "@/components/motion/Heading";
import { AnimatePresence } from "motion/react";
import { FaArrowsRotate } from "react-icons/fa6";
import { useAppDispatch } from "@/hooks/useAppDispatch";
import { reset } from "@/store/slices/gameSlice";
import DragableItem from "@/components/game/DraggableItem";



const Game = () => {

    const shownTrash = useAppSelector(state => state.game.shownTrash)

    const lives = useAppSelector(state => state.game.lives);
    const score = useAppSelector(state => state.game.score);
    const dispatch = useAppDispatch();
    return (
        <>

            <DragableItem />
            <Box display={"flex"} alignItems={"center"} p={4} gap={2}>
                <Heading color={"accent.600"} size={{ base: "2xl", lg: "5xl" }} my={4} flex={1} textAlign={"center"}>Play Filter Game</Heading>
                <Button colorPalette={"red"} size={"lg"} rounded={"full"} asChild>
                    <Link href="/">Exit</Link>
                </Button>
            </Box>



            <GameContainer>
                <Box display={"flex"} px={6} alignItems={"center"} gap={4} >

                    <Badge size={"lg"} colorPalette={"red"}>Lives<FaHeart></FaHeart>: {lives}</Badge>
                    <Badge size={"lg"} colorPalette={"yellow"}>Score: {score}</Badge>

                </Box>
                <Box w={"full"} h={"full"} display={"flex"} flexDirection={{ base: "column", lg: "row" }} py={12}>
                    <Box flex={1} display={"flex"} flexDir={{ base: "row", lg: "column" }} gap={8} alignItems={{ base: "center", lg: "flex-start" }} justifyContent={"space-between"}>

                        {
                            shownTrash.map((trash, index) => <Trash key={`${trash.id}-${trash.name}-${index}`} id={trash.id} src={trash.src} name={trash.name} type={trash.type} />)
                        }


                    </Box>
                    <Box w={{ base: "full", lg: "120px" }} p={4} display={"flex"} flexDir={{ base: "row", lg: "column" }} alignItems={"center"} justifyContent={"space-between"}>
                        {
                            gameBins.map(bin => <Bin key={bin.type} type={bin.type} src={bin.src} />)

                        }
                    </Box>

                </Box>
            </GameContainer>

            <AnimatePresence>
                {

                    lives === 0 && (
                        <Box initial={{ scale: 0, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} exit={{ scale: 0, opacity: 0 }} pos={"fixed"} bg={"rgba(0,0,0,.6)"} w={"100%"} h={"100dvh"} top={0} left={0} display={"flex"} alignItems={"center"} justifyContent={"center"}>
                            <Box w={"full"} maxW={720} bg={"bg.200"} opacity={0.75} shadow={"md"} rounded={"md"} h={{ base: "100dvh", lg: "auto" }} p={6} display={"flex"} alignItems={"center"} justifyContent={"center"} gap={6} flexDirection={"column"}>
                                <Heading size={{ base: "2xl", lg: "4xl" }} textAlign={"center"} color={"accent.600"}>You Loose</Heading>
                                <Text fontSize={64} fontWeight={"bold"} color={"primary.600"}>Score</Text>
                                <Text fontSize={72} fontWeight={"bold"} color={"primary.600"}>{score}</Text>
                                <Text fontSize={20}>We Expect More Next Time!</Text>
                                <Box w={"full"} display={"flex"} alignItems={"center"} justifyContent={"center"} gap={4} flexWrap={"wrap"}>
                                    <Button onClick={() => { dispatch(reset()) }} bg={"accent.400"} _hover={{ bg: "accent.600" }} style={{ transition: "background 300ms linear" }} rounded={"full"} size={"2xl"}><FaArrowsRotate /> Try Again</Button>
                                    <Button colorPalette={"red"} asChild rounded={"full"} size={"2xl"}>
                                        <Link href="/"><FaArrowsRotate /> Exit</Link>
                                    </Button>
                                </Box>
                            </Box>
                        </Box>
                    )
                }
            </AnimatePresence>
        </>
    )
}


export default Game;