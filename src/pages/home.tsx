import HeroSection from "@/components/home/HeroSection";
import WasteManagementIntroduction from "@/components/home/WasteManagementIntroduction";
import { useAppSelector } from "@/hooks/useAppSelector";
import MetalWasteProcess from "@/components/home/MetalWasteProcess";
import PlasticWasteProcess from "@/components/home/PlasticWasteProcess";
import PaperWasteProcess from "@/components/home/PaperWasteProcess";
import GlassWasteProcess from "@/components/home/GlassWasteProcess";
import OrganicWasteProcess from "@/components/home/OrganicWasteManagement";
import VideoExplainer from "@/components/home/VideoExplainer";
import Footer from "@/components/shared/Footer";

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

                    <PlasticWasteProcess />
                    <PaperWasteProcess />
                    <GlassWasteProcess />
                    <OrganicWasteProcess />
                    <VideoExplainer/>

                    <Footer/>

                    
                </>
            )}


        </>
    )
}


export default Home;