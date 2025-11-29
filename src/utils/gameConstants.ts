import paperBin from "@/assets/images/game/bins/paper.png"
import glassBin from "@/assets/images/game/bins/glass.png"
import organicBin from "@/assets/images/game/bins/organic.png"
import plasticBin from "@/assets/images/game/bins/plastic.png"



const gameBins = [
    {
        type: "glass", src: glassBin
    },
    {
        type: "paper", src: paperBin
    }
    , {
        type: "organic", src: organicBin
    }
    , {
        type: "plastic", src: plasticBin
    },

]

import appleTrash from "@/assets/images/game/trash/apple_trash.png";
import lemonTrash from "@/assets/images/game/trash/lemon_trash.png";
import bananaTrash from "@/assets/images/game/trash/banana_trash.png";
import boxTrash from "@/assets/images/game/trash/box.png";
import newsPaper from "@/assets/images/game/trash/news_paper.png";
import foodWrapper from "@/assets/images/game/trash/food_wrapper.png";
import glassBottle1 from "@/assets/images/game/trash/glass_bottle1.png";
import plasticBottle from "@/assets/images/game/trash/plastic bottle.png";
import plastciBag from "@/assets/images/game/trash/plastic_bag.png";
import plasticPipe from "@/assets/images/game/trash/plastic_pipe.png";
import cup from "@/assets/images/game/trash/cup.png";

const gameTrashes = [
    { id: 1, name: "Apple Trash", src: appleTrash, type: "organic" },
    { id: 2, name: "Banana Trash", src: bananaTrash, type: "organic" },
    { id: 3, name: "Lemon Trash", src: lemonTrash, type: "organic" },
    { id: 4, name: "Empty Box", src: boxTrash, type: "paper" },
    { id: 5, name: "News Paper", src: newsPaper, type: "paper" },
    { id: 6, name: "Food Wrapper", src: foodWrapper, type: "paper" },
    { id: 8, name: "Glass Water Container", src: glassBottle1, type: "glass" },
    { id: 9, name: "Plastic Water Bottle", src: plasticBottle, type: "plastic" },
    { id: 10, name: "Plastic Bag", src: plastciBag, type: "plastic" },
    { id: 11, name: "Pipe", src: plasticPipe, type: "plastic" },
    { id: 12, name: "Broken Cup", src: cup, type: "glass" },
]


const getRandomTrash = (value: number) => {
    const randomTrashes: {
        id: number,
        name: string;
        src: string;
        type: string;
    }[] = [];



    while (randomTrashes.length < value) {
        const index = Math.floor(Math.random() * 11);

        randomTrashes.push(gameTrashes[index]);
    }

    return randomTrashes;
}

const playSfx = (src: string) => {
    const sfx = new Audio(src);
    sfx.volume = 1;
    sfx.currentTime = 0;
    sfx.play();
}
export {
    gameBins, gameTrashes, getRandomTrash, playSfx
}