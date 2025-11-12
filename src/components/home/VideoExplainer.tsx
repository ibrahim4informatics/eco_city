import { Box } from "@chakra-ui/react"
import Heading from "../motion/Heading";

const VideoExplainer = () => {
    return (
        <Box w={"100%"} maxW={1024} mx={"auto"} id="video" px={2} py={4}>

            <Heading size={"3xl"} my={4} textDecor={"underline"} color={"primary.600"}>If You Like Videos Learn By Watching!</Heading>

            <iframe
                width="100%"
                height={"500px"}
                src="https://www.youtube.com/embed/xpAnLXc_bIU"
                title="YouTube video player"

                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
            >
            </iframe>

        </Box>
    )
}

export default VideoExplainer;