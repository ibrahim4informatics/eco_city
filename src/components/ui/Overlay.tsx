import { Box } from "@chakra-ui/react"
import type React from "react"

type Props = {
    opacity?:number,
    color?:string
}

const Overlay:React.FC<Props> = ({opacity, color})=>{
    return <Box w={"full"} h={"full"} bgColor={color || "#000"} opacity={opacity || 0.4} pos={"absolute"} left={0} top={0}></Box>
}

export default Overlay;