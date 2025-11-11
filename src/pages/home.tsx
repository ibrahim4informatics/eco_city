import HeroSection from "@/components/home/HeroSection";
import WasteManagementIntroduction from "@/components/home/WasteManagementIntroduction";
import Heading from "@/components/motion/Heading";
import Image from "@/components/motion/Image";
import MotionBox from "@/components/motion/Box"
import { useAppSelector } from "@/hooks/useAppSelector";
import { Box, List } from "@chakra-ui/react";

import pic from "@/assets/images/metal-process.png";
import MetalWasteProcess from "@/components/home/MetalWasteProcess";
import PlasticWasteProcess from "@/components/home/PlasticWasteProcess";
import PaperWasteProcess from "@/components/home/PaperWasteProcess";
import GlassWasteProcess from "@/components/home/GlassWasteProcess";
import OrganicWasteProcess from "@/components/home/OrganicWasteManagement";


const Home = () => {

    const isLoading = useAppSelector(state => state.app.isLoading);




    return (
        <>


            <HeroSection />

            {/* Waste management introduction */}

            {!isLoading && (
                <>
                    <WasteManagementIntroduction />

                    { /* Metal Waste Process */}

                    <MetalWasteProcess />

                    <PlasticWasteProcess/>
                    <PaperWasteProcess/>
                    <GlassWasteProcess/>
                    <OrganicWasteProcess/>
                </>
            )}


        </>
    )
}


export default Home;