import React from 'react'
import Box from '../motion/Box'

interface Props {
    children:React.ReactNode
}

const GameContainer:React.FC<Props> = ({children}) => {
  return (
    <Box bg={"bg.200"} w={"full"} maxW={900} rounded={{base:"none", lg:"md"}} shadow={{base:"none", lg:"sm"}} h={{base:"calc(100dvh - 96px)", lg:720}} p={4}  mx={"auto"}>
        {children}
    </Box>
  )
}

export default GameContainer