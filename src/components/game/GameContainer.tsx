import React from 'react'
import Box from '../motion/Box'

interface Props {
    children:React.ReactNode
}

const GameContainer:React.FC<Props> = ({children}) => {
  return (
    <Box bg={"bg.200"} w={"full"}   h={"100dvh"} p={4}  mx={"auto"} overflowY={"hidden"}>
        {children}
    </Box>
  )
}

export default GameContainer