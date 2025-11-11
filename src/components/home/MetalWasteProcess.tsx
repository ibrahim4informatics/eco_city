import { List } from "@chakra-ui/react"
import Box from "../motion/Box"
import Heading from "../motion/Heading"
import Image from "../motion/Image"
import pic from "@/assets/images/metal-process.png";

const MetalWasteProcess = () => {
    return (
        <Box w={"100%"} px={2} minH={"100dvh"} py={4} display={"flex"} justifyContent={"center"} alignItems={"center"}>

            <Box w={"100%"} maxW={1024} display={"flex"} gap={2}>
                <Box flex={1}>
                    <Heading whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.3, delay: .4 }} initial={{ opacity: 0, y: -100 }} size={"4xl"}>🪙 What Happens to Metal Waste?</Heading>
                    <Heading whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.3, delay: .4 }} initial={{ opacity: 0, x: -100 }} pos={"relative"} _before={{ content: "''", pos: "absolute", h: "100%", w: 1, bg: "accent.400", top: 0, left: 0 }} px={2} size={"xl"} my={2} color={"GrayText"}>Turning old cans into new shiny things!</Heading>

                    <Box whileInView={{ opacity: 1, scale: 1, y: 0 }} initial={{ opacity: 0, y: 100, scale: .7 }} transition={{ duration: 0.3, delay: .4 }}>
                        <List.Root my={6} as={"ol"} pos={"relative"} _before={{ content: "''", pos: 'absolute', top: 0, left: 0, w: 1, h: "100%", bg: "primary.400" }} px={7}>
                            <List.Item my={2}>🗑️ Metal cans and tins are thrown into the Metal recycling bin(The Gray One).</List.Item>
                            <List.Item my={2}>🚛 They go to a recycling factory where magnets separate metals from other trash.</List.Item>
                            <List.Item my={2}>🔥 The metals are melted in a super-hot furnace.</List.Item>
                            <List.Item my={2}>🧊 The melted metal is shaped into new cans, bikes, or even cars!</List.Item>
                            <List.Item my={2}>✨ Now they’re ready to be used again — saving energy and our planet.</List.Item>
                        </List.Root>
                    </Box>
                </Box>

                <Box flex={1}>
                    <Image whileInView={{ opacity: 1, y: 0, scale: 1 }} transition={{ duration: 0.3, delay: .4 }} initial={{ opacity: 0, y: -100, scale: 0 }} src={pic} w={"100%"} />
                </Box>
            </Box>

        </Box>
    )
}

export default MetalWasteProcess;