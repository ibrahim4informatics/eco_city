import heroVideo from "@/assets/videos/hero.mp4";
import { GiRetroController } from "react-icons/gi";
import { FaBrain } from "react-icons/fa";
import { FaBookOpen } from "react-icons/fa6";
import Overlay from "@/components/ui/Overlay";
import { Box, Link, Span, Spinner } from '@chakra-ui/react';
import AnimatedText from "@/components/motion/Text";
import AnimatedHeading from "@/components/motion/Heading";
import AnimatedButton from "@/components/motion/Button";
import { useAppDispatch } from "@/hooks/useAppDispatch";
import { setLoading } from "@/store/slices/appSlice";
import { useAppSelector } from "@/hooks/useAppSelector";

const HeroSection = () => {

    const dispatch = useAppDispatch();
    const isLoading = useAppSelector(state => state.app.isLoading);

    return (
        <Box bg={"bg.200"} pos={"relative"} w={"full"} h={"100dvh"} display={"flex"} alignItems={"center"} justifyContent={"center"}>
            {isLoading ? <Spinner color={"accent.600"} size={"xl"} /> : (
                <Box zIndex={1} w={"80%"} maxW={720}>

                    <AnimatedHeading my={6} textAlign={{ base: 'center', md: "left" }} whileInView={{ opacity: 1, x: 0 }} initial={{ opacity: 0, y: 60 }} animate={{ opacity: 1, y: 0 }} transition={{
                        duration: 0.5
                    }} size={{ base: "3xl", md: "5xl" }} color={"text.200"}>
                        Be a <Span color={"primary.300"}>Hero</Span> for Our <Span color={"primary.300"}>Planet</Span>🌍!
                    </AnimatedHeading>

                    <AnimatedText textAlign={{ base: "center", md: "left" }} color={"text.200"} fontSize={24} initial={{ opacity: 0, y: 60 }} whileInView={{ opacity: 1, y: 0 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.5 }}>
                        Let’s learn how to keep our world clean and happy!
                        Sorting waste is easy and fun — just like a game!
                        Every bottle, paper, and peel can make a big difference.
                        Discover how recycling helps animals, nature, and you become a real Earth hero! 🌱
                    </AnimatedText>

                    <Box w={"full"} my={6} display={"flex"} flexWrap={"wrap"} alignItems={"center"} justifyContent={{ base: "center", md: "flex-start" }} gap={4}>
                        <AnimatedButton asChild initial={{ opacity: 0, x: -40 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5, delay: 1 }} w={{ base: "full", md: "auto" }} size={"2xl"} rounded={"full"} bg={"primary.300"} color={"text.600"} style={{ transition: "background 200ms linear" }} _hover={{ bg: "primary.500" }}><a href="#intro"><FaBookOpen />Read About Waste Management</a></AnimatedButton>
                        <AnimatedButton initial={{ opacity: 0, x: -40 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5, delay: 1.5 }} size={"2xl"} rounded={"full"} bg={"bg.300"} color={"text.600"} style={{ transition: "background 200ms linear" }} _hover={{ bg: "bg.500" }}><Link href="quizz"><FaBrain />Take Quizz</Link></AnimatedButton>
                        <AnimatedButton initial={{ opacity: 0, x: -40 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5, delay: 2 }} size={"2xl"} rounded={"full"} bg={"accent.300"} color={"text.600"} style={{ transition: "background 200ms linear" }} _hover={{ bg: "accent.500" }}><Link href="/game"><GiRetroController /> Play Game</Link></AnimatedButton>
                    </Box>

                </Box>
            )}
            {/* <Image src={heroPicture} w={"full"} h={"100dvh"} pos={"absolute"} left={0} top={0} objectFit={"cover"} />
                 */}

            <video onCanPlayThrough={() => { dispatch(setLoading(false)) }} muted autoPlay playsInline style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100dvh", objectFit: "cover", opacity: isLoading ? 0 : 1 }}>
                <source src={heroVideo} type="video/mp4" />
            </video>
            <Overlay opacity={isLoading ? 0 : 0.6} />

        </Box>
    )
}

export default HeroSection