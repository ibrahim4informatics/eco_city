import Box from "@/components/motion/Box";
import Heading from "@/components/motion/Heading";
import Text from "@/components/motion/Text";
import Naviagation from "@/components/shared/Navigation";
import { getQuestion } from "@/utils/quizConstants";
import { List, Span, Button, Link } from "@chakra-ui/react";
import correctSfx from "@/assets/audio/correct.m4a";
import wrongSfx from "@/assets/audio/wrong.m4a";
import { playSfx } from "@/utils/gameConstants";
import { useState } from "react";
import { AnimatePresence } from "motion/react";

const Quizz = () => {

    const [question, setQuestion] = useState(getQuestion());
    const [isOver, setIsOver] = useState(false);
    const [score, setScore] = useState(0);
    const [isPlaying, setIsPlaying] = useState(false)

    return (

        <>

            <AnimatePresence>

                {
                    !isPlaying && (
                        <Box key={1} initial={{ opacity: 0, scale: 0 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0 }} transition={{ type: "spring" }} pos={"fixed"} top={0} left={0} w={"full"} h={"100dvh"} p={2} bg={"rgba(0,0,0,.4)"} zIndex={999} display={"flex"} justifyContent={"center"} alignItems={"center"}>
                            <Box w={"full"} p={4} rounded={"md"} bg={"white"} maxW={720}>
                                <Heading size={"2xl"}>Are you ready to take <Span color={"accent.600"}>The Recycling Quizz</Span>?</Heading>
                                <Text my={4}>the quizz is list of question you will answer by choosing one correct answer on each question <br /> each correct question will increase your score but one wrong answer makes you loose</Text>
                                <Box my={2} display={"flex"} alignItems={"center"} gap={2}>
                                    <Button onClick={() => { setIsPlaying(true) }} rounded={"full"} size={"xl"} bg={"primary.600"} _hover={{ bg: "primary.400" }} transition={"background 200ms linear"} >Yes</Button>
                                    <Button rounded={"full"} size={"xl"} asChild colorPalette={"red"} ><Link href="/">No</Link></Button>
                                </Box>
                            </Box>

                        </Box>
                    )
                }

                {
                    isOver && (
                        <Box key={2} initial={{ opacity: 0, scale: 0 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0 }} transition={{ type: "spring" }} pos={"fixed"} top={0} left={0} w={"full"} h={"100dvh"} p={2} bg={"rgba(0,0,0,.4)"} zIndex={999} display={"flex"} justifyContent={"center"} alignItems={"center"}>
                            <Box w={"full"} p={4} rounded={"md"} bg={"white"} maxW={720} h={{ base: "100dvh", lg: "auto" }}>
                                <Heading size={"5xl"} textAlign={"center"} color={"red.600"}>Game Over!</Heading>
                                <Text my={4} fontSize={74} fontWeight={"bold"} textAlign={"center"}>{score}</Text>
                                <Box my={2} display={"flex"} justifyContent={"center"} w={"full"} alignItems={"center"} gap={2}>
                                    <Button onClick={() => {
                                        setQuestion(getQuestion())
                                        setScore(0)
                                        setIsOver(false);
                                    }} rounded={"full"} size={"xl"} bg={"primary.600"} _hover={{ bg: "primary.400" }} transition={"background 200ms linear"} >Try Again</Button>
                                    <Button rounded={"full"} size={"xl"} asChild colorPalette={"red"} ><Link href="/">Giveup</Link></Button>
                                </Box>
                            </Box>

                        </Box>
                    )
                }
            </AnimatePresence>
            <Box
                w={'full'} h={'100dvh'} display={"flex"}
                justifyContent={"center"}
            >

                <Naviagation />

                <Box w={"full"} maxW={720} >

                    <Heading size={"5xl"} textAlign={"center"} p={4} color={"primary.600"}>Quizz</Heading>



                    <Box py={6}>
                        <Heading>
                            {question.question}
                        </Heading>
                    </Box>

                    <List.Root as={"ol"} >

                        {question.answers.map((ans, index) => (
                            <List.Item _hover={{ borderColor: "accent.300" }} key={index} cursor={"pointer"} onClick={() => {

                                if (ans.isCorrect) {

                                    playSfx(correctSfx);
                                    setScore(prev => prev + 5);
                                    setQuestion(getQuestion())


                                }

                                else {

                                    playSfx(wrongSfx);
                                    setIsOver(true)

                                }

                            }} w={"full"} p={4} border={"1px solid rgba(0,0,0,.15)"} rounded={"md"} my={4}>
                                <Text>{ans.content}</Text>
                            </List.Item>
                        ))}

                    </List.Root>

                    <Heading size={"4xl"} color={"primary.600"}>Score:{score}</Heading>
                </Box>

            </Box>
        </>

    )
}


export default Quizz;