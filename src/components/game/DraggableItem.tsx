import { useDragLayer } from "react-dnd";
import { Tooltip } from "../ui/tooltip";
import Box from "../motion/Box";
import Image from "../motion/Image";



const DragableItem: React.FC = () => {


    const { item, isDragging, offset } = useDragLayer((monitor) => ({
        item: monitor.getItem(),
        isDragging: !!monitor.isDragging(),
        offset: monitor.getSourceClientOffset(),
    }));
    if (!isDragging || !offset) return null;
    return (
        <Box pos={"fixed"}  left={offset.x} top={offset.y} cursor={"pointer"} pointerEvents={"none"}  zIndex={999}>
            <Tooltip content={item.name}>
                <Box w={"fit-content"}>
                    <Image opacity={isDragging ? 0.5 : 1}   src={item.src} w={40} />
                </Box>

            </Tooltip>
        </Box>
    )
}


export default DragableItem;