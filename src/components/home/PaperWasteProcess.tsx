import { List } from "@chakra-ui/react"
import Box from "../motion/Box"
import Heading from "../motion/Heading"
import Image from "../motion/Image"
import pic from "@/assets/images/paper-process.png";

const PaperWasteProcess = () => {
    return (
        <Box w={"100%"} px={2} minH={"100dvh"} py={4} display={"flex"} justifyContent={"center"} alignItems={"center"}>

            <Box w={"100%"} maxW={1024} display={"flex"} gap={2}>
                <Box flex={1}>
                    <Heading whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.3, delay: .4 }} initial={{ opacity: 0, y: -100 }} size={"4xl"}>📄 What Happens to Paper Waste?</Heading>
                    <Heading whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.3, delay: .4 }} initial={{ opacity: 0, x: -100 }} pos={"relative"} _before={{ content: "''", pos: "absolute", h: "100%", w: 1, bg: "accent.400", top: 0, left: 0 }} px={2} size={"xl"} my={2} color={"GrayText"}>Giving paper a second story!</Heading>

                    <Box whileInView={{ opacity: 1, scale: 1, y: 0 }} initial={{ opacity: 0, y: 100, scale: .7 }} transition={{ duration: 0.3, delay: .4 }}>
                        <List.Root my={6} as={"ol"} pos={"relative"} _before={{ content: "''", pos: 'absolute', top: 0, left: 0, w: 1, h: "100%", bg: "primary.400" }} px={7}>
                            <List.Item my={2}>📚 Used paper, boxes, and newspapers go into the Paper bin.</List.Item>
                            <List.Item my={2}>🚛 They are taken to a paper recycling plant.</List.Item>
                            <List.Item my={2}>💦 The paper is mixed with water to make a pulp.</List.Item>
                            <List.Item my={2}>The pulp is cleaned, pressed, and rolled into new paper sheets.</List.Item>
                            <List.Item my={2}>📝 That new paper becomes notebooks, books, or boxes again!.</List.Item>
                        </List.Root>
                    </Box>
                </Box>

                <Box flex={1}>
                    <Image rounded={"md"} whileInView={{ opacity: 1, y: 0, scale: 1 }} transition={{ duration: 0.3, delay: .4 }} initial={{ opacity: 0, y: -100, scale: 0 }} src={pic} w={"100%"} />
                </Box>
            </Box>

        </Box>
    )
}

export default PaperWasteProcess;