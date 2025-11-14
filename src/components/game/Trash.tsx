import { Tooltip } from '@/components/ui/tooltip';
import { Box, Image } from '@chakra-ui/react';
import React from 'react'
import { useDrag } from 'react-dnd';

interface Props {
    id:number,
    src: string,
    name: string,
    type: string
}

const Trash: React.FC<Props> = ({ name, src, type,id }) => {

    const [{ isDragging }, drag] = useDrag({
        type: "trash",
        item: {
            id,
            name,
            type
        },
        collect: (monitor) => ({ isDragging: !!monitor.isDragging() }),

    });
    return (

        <Tooltip content={name}>
            <Box w={"fit-content"} ref={drag}>
                <Image opacity={isDragging ? 0.5 : 1} src={src} w={40} />
            </Box>

        </Tooltip>

    )
}

export default Trash