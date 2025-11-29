import { Tooltip } from '@/components/ui/tooltip';
import { Box, Image } from '@chakra-ui/react';
import React, { useEffect } from 'react'
import { useDrag } from 'react-dnd';
import { getEmptyImage } from 'react-dnd-html5-backend';

interface Props {
    id:number,
    src: string,
    name: string,
    type: string
}

const Trash: React.FC<Props> = ({ name, src, type,id }) => {

    const [{ isDragging }, drag, preview] = useDrag({
        type: "trash",
        item: {
            id,
            name,
            type,
            src
        },
        collect: (monitor) => ({ isDragging: !!monitor.isDragging() }),

    });

    useEffect(()=>{
        preview(getEmptyImage())
    }, [preview])


    return (

        <Tooltip content={name}>
            <Box w={"fit-content"} ref={drag}>
                <Image opacity={isDragging ? 0.5 : 1} src={src} w={"300px"} />
            </Box>

        </Tooltip>

    )
}

export default Trash