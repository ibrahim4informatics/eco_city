import GameContainer from "@/components/game/GameContainer";
import Box from "@/components/motion/Box";
import Button from "@/components/motion/Button";
import { Badge, Link, List } from "@chakra-ui/react";
import { gameBins } from "@/utils/gameConstants";
import Trash from "@/components/game/Trash";
import Bin from "@/components/game/Bin";
import { FaCheck, FaHeart, FaPlay, FaQuestion } from "react-icons/fa";
import { useAppSelector } from "@/hooks/useAppSelector";
import Text from "@/components/motion/Text";
import Heading from "@/components/motion/Heading";
import { AnimatePresence } from "motion/react";
import { FaArrowsRotate, FaX } from "react-icons/fa6";
import { useAppDispatch } from "@/hooks/useAppDispatch";
import { reset, setShowCorrectFeedback, setShowWrongFeedback } from "@/store/slices/gameSlice";
import DragableItem from "@/components/game/DraggableItem";
import bgAudio from "@/assets/audio/audio_bg2.mp3"
import { useEffect, useRef, useState } from "react";
import { IoIosClose } from "react-icons/io";
import { Tooltip } from "@/components/ui/tooltip";



const Game = () => {

    const [gameState, setGameState] = useState<"idle" | "playing">("idle")
    const shownTrash = useAppSelector(state => state.game.shownTrash)
    const bgAudioRef = useRef<HTMLAudioElement | null>(null);
    const showCorrectFeedback = useAppSelector(state => state.game.showCorrectFeedback);
    const showWrongFeedback = useAppSelector(state => state.game.showWrongFeedback);
    const [showHowToPlay, setShowHowToPlay] = useState(false);

    const lives = useAppSelector(state => state.game.lives);
    const score = useAppSelector(state => state.game.score);
    const dispatch = useAppDispatch();


    useEffect(() => {
        if (showCorrectFeedback) {
            const timeout = setTimeout(() => {
                dispatch(setShowCorrectFeedback(false))
            }, 500)


            return () => {
                clearTimeout(timeout)
            }
        }
    }, [showCorrectFeedback])


    useEffect(() => {
        if (showWrongFeedback) {

            const timeout = setTimeout(() => {
                dispatch(setShowWrongFeedback(false))
            }, 500)
            return () => {
                clearTimeout(timeout)
            }

        }
    }, [showWrongFeedback])

    useEffect(() => {
        const audio = bgAudioRef.current;

        if (!audio) return;
        audio.volume = 0.75
        audio.play()
        const unlockAudio = () => {
            audio.play();
            window.removeEventListener("click", unlockAudio);
            window.removeEventListener("touchstart", unlockAudio);
        }

        window.addEventListener("click", unlockAudio);
        window.addEventListener("touchstart", unlockAudio);

        return () => {

            window.removeEventListener("click", unlockAudio);
            window.removeEventListener("touchstart", unlockAudio);

        }

    }, [])
    return (
        <>

            <audio ref={bgAudioRef} playsInline loop src={bgAudio} />

            <AnimatePresence>

                {
                    showWrongFeedback && (
                        <Box w={"full"} h={"100dvh"} color={"red.600"} display={"flex"} alignItems={"center"} justifyContent={"center"} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} key={4} pos={"fixed"} top={0} left={0}>
                            <FaX size={120} />
                        </Box>
                    )
                }

                {

                    showCorrectFeedback && (
                        <Box w={"full"} h={"100dvh"} color={"primary.600"} display={"flex"} alignItems={"center"} justifyContent={"center"} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} key={4} pos={"fixed"} top={0} left={0}>
                            <FaCheck size={120} />
                        </Box>
                    )
                }
                {
                    gameState === "idle" && <Box initial={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0 }} bg={"rgba(0,0,0,.6)"} w={"full"} h={"100dvh"} pos={"fixed"} top={0} left={0} display={"flex"} alignItems={"center"} justifyContent={"center"}>

                        <Button onClick={() => { setGameState("playing") }} rounded={"full"} size={"2xl"} bg={"accent.600"} _hover={{ bg: "accent.400" }}><FaPlay />Play</Button>
                        <Button size={"2xl"} onClick={() => { setShowHowToPlay(true) }} backgroundColor={"primary.600"} mx={2} rounded={"full"} _hover={{ bg: "primary.400", transition: "background 300ms linear" }}><FaQuestion /> How To Play</Button>
                    </Box>
                }

                {
                    showHowToPlay && (
                        <Box key={2} zIndex={99999} initial={{ scale: 0, opacity: 0 }} animate={{ opacity: 1, scale: 1 }} exit={{ scale: 0, opacity: 0 }} w={"full"} h={"100dvh"} bg={"rgba(0,0,0,.6)"} pos={"fixed"} top={0} left={0} display={"flex"} alignItems={"center"} justifyContent={"center"}>
                            <Box pos={"relative"} rounded={"md"} w={"full"} maxW={600} bg={"white"} h={{ base: "100dvh", lg: "auto" }} maxH={{ base: "100dvh", lg: "calc(100vh - 40px)" }} overflowY={"auto"}>
                                <Box pos={"sticky"} bg={"white"} top={0} left={0} w={"full"} p={6} display={"flex"} alignItems={"center"}>
                                    <Heading flex={1}>❓ How to Play the Recycling Game!</Heading>
                                    <Button onClick={() => { setShowHowToPlay(false) }} variant={"subtle"} rounded={"full"} colorPalette={"red"}><IoIosClose /></Button>
                                </Box>

                                <Box my={4} p={6}>
                                    <Text>You have 4 bins with different colors each bin is for a waste type</Text>
                                    <List.Root p={6} as={"ol"}>
                                        <List.Item>
                                            <Text fontWeight={"bold"}>Look at the waste items shown in the screen</Text>

                                            <Text>
                                                a set of trash items will appear on the screen.
                                                It could be <strong>plastic</strong>, <strong>paper</strong>, <strong>glass</strong>, or <strong>organic</strong> waste.
                                            </Text>
                                        </List.Item>
                                        <List.Item mt={3}>

                                            <Text fontWeight={"bold"}>Think about what type it is(each item)</Text>
                                            <Text>
                                                Is it a bottle? A banana peel? A newspaper?
                                                Each item belongs to one of the <strong>4 bins</strong>.
                                            </Text>
                                        </List.Item>

                                        <List.Item mt={3}>

                                            <Text fontWeight={"bold"}>Drag the waste to the correct bin</Text>
                                            <Text display={{ base: "none", lg: "block" }}>
                                                👉 Drag the waste from the left to the right bin.
                                            </Text>
                                            <Text display={{ base: "block", lg: "none" }}>
                                                👉 Drag the waste from the top to the bottom bin.
                                            </Text>
                                        </List.Item>


                                        <List.Item mt={3}>

                                            <Text fontWeight={"bold"}>Match it with the right color/bin</Text>
                                            <List.Root pl={8} pt={2} as={"ul"}>
                                                <List.Item>
                                                    Plastic ➜ Yellow bin
                                                </List.Item>

                                                <List.Item>
                                                    Glass ➜ Green bin
                                                </List.Item>

                                                <List.Item>
                                                    Paper ➜ Blue bin
                                                </List.Item>

                                                <List.Item>
                                                    Organic ➜ Brown bin
                                                </List.Item>
                                            </List.Root>
                                        </List.Item>

                                        <List.Item mt={3}>

                                            <Text fontWeight={"bold"}>Drop it in!</Text>
                                            <Text>
                                                If you choose the correct bin, you score points! 🎉
                                                If not, try again — learning is part of the fun!
                                            </Text>
                                        </List.Item>


                                        <List.Item mt={3}>

                                            <Text fontWeight={"bold"}>Keep going!</Text>
                                            <Text>
                                                New waste items will appear.
                                                Sort as many as you can and become a recycling hero! ♻️✨
                                            </Text>
                                        </List.Item>
                                    </List.Root>
                                </Box>
                            </Box>
                        </Box>
                    )
                }
            </AnimatePresence>

            <DragableItem />

            <GameContainer>
                <Box display={"flex"} flexWrap={"wrap"} alignItems={"center"} p={2} gap={2}>
                    <Heading color={"accent.600"} size={"2xl"} my={4} textAlign={"center"}>Recycle Game</Heading>

                    <Box display={"flex"} px={6} alignItems={"center"} gap={4} mx={"auto"} >

                        <Badge size={"lg"} colorPalette={"red"}>Lives<FaHeart></FaHeart>: {lives}</Badge>
                        <Badge size={"lg"} colorPalette={"yellow"}>Score: {score}</Badge>

                    </Box>

                    <Tooltip content="How to play">
                        <Button size={"lg"} onClick={() => { setShowHowToPlay(true) }} backgroundColor={"primary.600"} mx={2} rounded={"full"} _hover={{ bg: "primary.400", transition: "background 300ms linear" }}><FaQuestion /></Button>
                    </Tooltip>
                    <Button colorPalette={"red"} size={"lg"} rounded={"full"} asChild>
                        <Link href="/">Exit</Link>
                    </Button>
                </Box>
                <Box w={"full"} h={"full"} display={"flex"} flexDirection={{ base: "column", lg: "row" }} py={12}>
                    <Box flex={1} display={"flex"} flexDir={{ base: "row", lg: "column" }} alignItems={{ base: "center", lg: "flex-start" }} justifyContent={"center"}>

                        {
                            shownTrash.map((trash, index) => <Trash key={`${trash.id}-${trash.name}-${index}`} id={trash.id} src={trash.src} name={trash.name} type={trash.type} />)
                        }


                    </Box>
                    <Box h={"full"} flexWrap={{ base: "nowrap", md: "wrap" }} w={{ base: "full", lg: "240px" }} display={"flex"} flexDir={{ base: "row", lg: "column" }} alignItems={"center"} justifyContent={{ base: "space-between", lg: "center" }}>
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
                                <Heading size={{ base: "2xl", lg: "4xl" }} textAlign={"center"} color={"accent.600"}>Game Over</Heading>
                                <Text fontSize={64} fontWeight={"bold"} color={"primary.600"}>Score</Text>
                                <Text fontSize={72} fontWeight={"bold"} color={"primary.600"}>{score}</Text>
                                <Text fontSize={20}>We Expect More Next Time!</Text>
                                <Box w={"full"} display={"flex"} alignItems={"center"} justifyContent={"center"} gap={4} flexWrap={"wrap"}>
                                    <Button onClick={() => { dispatch(reset()) }} bg={"accent.400"} _hover={{ bg: "accent.600" }} style={{ transition: "background 300ms linear" }} rounded={"full"} size={"2xl"}><FaArrowsRotate /> Try Again</Button>
                                    <Button colorPalette={"red"} asChild rounded={"full"} size={"2xl"}>
                                        <Link href="/">Exit</Link>
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