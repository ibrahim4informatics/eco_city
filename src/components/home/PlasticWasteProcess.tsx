import { List } from "@chakra-ui/react"
import Box from "../motion/Box"
import Heading from "../motion/Heading"
import Image from "../motion/Image"
import pic from "@/assets/images/plastic-process.png";

const PlasticWasteProcess = () => {
    return (
        <Box w={"100%"} px={2} minH={"100dvh"} py={4} display={"flex"} justifyContent={"center"} alignItems={"center"}>

            <Box w={"100%"} maxW={1024} display={"flex"} gap={2} flexDir={{base:"column", lg:"row"}}>
                <Box flex={1}>
                    <Heading whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.3, delay: .4 }} initial={{ opacity: 0, y: -100 }} size={"4xl"}>🧴 What Happens to Plastic Waste?</Heading>
                    <Heading whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.3, delay: .4 }} initial={{ opacity: 0, x: -100 }} pos={"relative"} _before={{ content: "''", pos: "absolute", h: "100%", w: 1, bg: "accent.400", top: 0, left: 0 }} px={2} size={"xl"} my={2} color={"GrayText"}>From old bottles to new toys!</Heading>

                    <Box whileInView={{ opacity: 1, scale: 1, y: 0 }} initial={{ opacity: 0, y: 100, scale: .7 }} transition={{ duration: 0.3, delay: .4 }}>
                        <List.Root my={6} as={"ol"} pos={"relative"} _before={{ content: "''", pos: 'absolute', top: 0, left: 0, w: 1, h: "100%", bg: "primary.400" }} px={7}>
                            <List.Item my={2}>🚮 Plastic bottles, containers, and bags go into the Plastic bin.</List.Item>
                            <List.Item my={2}>🏭 At the factory, plastics are washed and sorted by type</List.Item>
                            <List.Item my={2}>✂️ They are shredded into tiny flakes or pellets.</List.Item>
                            <List.Item my={2}>🔥 These pellets are melted and remade into new items — bottles, clothes, or toys!</List.Item>
                            <List.Item my={2}>🌍 Recycling plastic helps keep oceans and animals safe.</List.Item>
                        </List.Root>
                    </Box>
                </Box>

                <Box flex={1}>
                    <Image whileInView={{ opacity: 1, y: 0, scale: 1 }} transition={{ duration: 0.3, delay: .4 }} initial={{ opacity: 0, y: -100, scale: 0 }} src={pic} w={"100%"} rounded={"md"} />
                </Box>
            </Box>

        </Box>
    )
}

export default PlasticWasteProcess;