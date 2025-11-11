import { List } from "@chakra-ui/react"
import Box from "../motion/Box"
import Heading from "../motion/Heading"
import Image from "../motion/Image"
import pic from "@/assets/images/organic-process.png";

const OrganicWasteProcess = () => {
    return (
        <Box w={"100%"} px={2} minH={"100dvh"} py={4} display={"flex"} justifyContent={"center"} alignItems={"center"}>

            <Box w={"100%"} maxW={1024} display={"flex"} gap={2}>
                <Box flex={1}>
                    <Heading whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.3, delay: .4 }} initial={{ opacity: 0, y: -100 }} size={"4xl"}>🍎 What Happens to Organic Waste?</Heading>
                    <Heading whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.3, delay: .4 }} initial={{ opacity: 0, x: -100 }} pos={"relative"} _before={{ content: "''", pos: "absolute", h: "100%", w: 1, bg: "accent.400", top: 0, left: 0 }} px={2} size={"xl"} my={2} color={"GrayText"}>Nature’s way of making new life!</Heading>

                    <Box whileInView={{ opacity: 1, scale: 1, y: 0 }} initial={{ opacity: 0, y: 100, scale: .7 }} transition={{ duration: 0.3, delay: .4 }}>
                        <List.Root my={6} as={"ol"} pos={"relative"} _before={{ content: "''", pos: 'absolute', top: 0, left: 0, w: 1, h: "100%", bg: "primary.400" }} px={7}>
                            <List.Item my={2}>🥕 Food scraps and plant leaves go into the Organic bin.</List.Item>
                            <List.Item my={2}>🧺 They are collected and taken to a composting site.</List.Item>
                            <List.Item my={2}>🌡️ Microbes and worms break down the waste into compost.</List.Item>
                            <List.Item my={2}>🌱 The compost becomes rich soil full of nutrients.</List.Item>
                            <List.Item my={2}>🌼 Farmers and gardeners use it to help new plants grow!</List.Item>
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

export default OrganicWasteProcess;