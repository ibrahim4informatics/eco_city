import HeroSection from "@/components/home/HeroSection";
import Heading from "@/components/motion/Heading";
import Text from "@/components/motion/Text";
import { Box } from "@chakra-ui/react";
import MotionBox from "@/components/motion/Box";
import MotionImage from "@/components/motion/Image";
import wasteBins from "@/assets/images/bins-waste.jpg"
import wasteManagementEffectPicture from "@/assets/images/withorwithout-wastemanagement.png"
import cartoonCharacter1 from "@/assets/images/character1.jpg";


const Home = () => {

    return (
        <>


            <HeroSection />

            {/* Waste management introduction */}

            <Box display={"flex"} px={2} py={4} justifyContent={"center"} id="intro" w={"100%"} height={"100dvh"}>

                <Box w={"100%"} gap={4} maxW={1204} display={"flex"} flexDir={{ base: "column", lg: "row" }}>
                    {/* Here is the text content */}
                    <Box flex={1}>
                        <Heading initial={{ opacity: 0, x: -40 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: .8, delay: 0.1 }} borderBottom={"solid 1px"} pb={2} borderBottomColor={"accent.600"} color={"accent.600"} size={"4xl"} textAlign={"center"}>Let's Explore What is <br />Waste Management</Heading>
                        <Text initial={{ opacity: 0, y: 100 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: .8, delay: 0.15 }} my={4} fontSize={20}>
                            Waste management means taking care of the trash we make — in a smart way that keeps our planet clean and happy! 🌎✨
                        </Text>


                        <Text pos={"relative"} _before={{ content: "''", w: 1, h: "100%", bg: "accent.300", pos: "absolute", left: 0, top: 0, rounded: "md", }} pl={4} initial={{ opacity: 0, y: 100 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: .8, delay: 0.2 }} my={4} fontSize={20}>
                            Every day, we throw away things like bottles, papers, food, and toys.
                            But where do they go after we drop them in the bin?

                            Waste management is all about collecting, sorting, recycling, and disposing of waste safely — so it doesn’t hurt animals, people, or nature. 🌿

                            When we sort our trash the right way:
                            ♻️ Plastic gets recycled into new toys or bottles.
                            📄 Paper turns into new notebooks.
                            🍎 Food waste becomes compost that helps plants grow.

                            It’s like giving old things a second life!

                            Good waste management keeps our streets clean, saves natural resources, and helps us build a brighter, greener future together. 🌱💪
                        </Text>




                        <MotionImage initial={{ scale: 0.5, opacity: 0 }} whileInView={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8, delay: 0.3 }} src={wasteBins} h={200} my={4} rounded={"md"} shadow={"md"} w={"full"} />
                    </Box>

                    <Box flex={1}>
                        <MotionImage initial={{ scale: 0.5, opacity: 0 }} whileInView={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8, delay: 0.1 }} src={wasteManagementEffectPicture} rounded={"md"} shadow={"md"} w={"full"} />
                        <MotionBox my={2} style={{ transition: "background 300ms linear,scale 300ms linear, color 300ms linear" }} cursor={"pointer"} _hover={{ scale: 1.01, bg: "bg.400", color: "text.700" }} initial={{ opacity: 0, x: -100, scale: 0.9 }} whileInView={{ scale: 1, opacity: 1, x: 0 }} p={4} rounded={6} bg={"bg.200"} transition={{ duration: .8, delay: 0.25 }} >
                            <Heading cursor={"pointer"}>Every time you throw something in the right bin,
                                you’re helping the Earth stay clean and smiling! 😄🌍</Heading>
                        </MotionBox>
                        <MotionImage initial={{ scale: 0.5, opacity: 0 }} whileInView={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8, delay: 0.1 }} src={cartoonCharacter1} rounded={"md"} w={400} mx={"auto"} />


                    </Box>
                </Box>

            </Box>



        </>
    )
}


export default Home;