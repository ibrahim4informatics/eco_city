import { useAppDispatch } from '@/hooks/useAppDispatch'
import { useAppSelector } from '@/hooks/useAppSelector'
import { changeTrash, decrementLives, decrementScore, incrementScore } from '@/store/slices/gameSlice'
import { Box, Image } from '@chakra-ui/react'
import React from 'react'
import { useDrop } from 'react-dnd'
import correctSfx from "@/assets/audio/correct.m4a";
import wrongSfx from "@/assets/audio/wrong.m4a";
import { playSfx } from '@/utils/gameConstants'

interface Props {
    src: string,
    type: string,
}

const Bin: React.FC<Props> = ({ src, type }) => {
    const dispatch = useAppDispatch();

    const [, drop] = useDrop({
        accept: "trash",
       drop:(item:{id:number,name:string, type:string})=>{
        if(item.type === type){
            playSfx(correctSfx);
            dispatch(incrementScore(5));
            dispatch(changeTrash(item.id))

        }

        else {
            playSfx(wrongSfx)
            dispatch(decrementScore(3));
            dispatch(decrementLives())
        }
       }
    }
    )
    return (
        <Box w={"fit-content"} ref={drop}>
            <Image key={type} flex={{ base: 1, lg: "auto" }} src={src} w={{ base: "120px", lg: "full" }} />
        </Box>
    )
}

export default Bin