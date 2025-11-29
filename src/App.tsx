import { createBrowserRouter, createHashRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/home";
import Game from "./pages/game";
import Quizz from "./pages/quiz";
import Error from "./pages/Error";
import { ChakraProvider, createSystem, defaultConfig, defineConfig } from "@chakra-ui/react";
import { DndProvider } from 'react-dnd';
import {TouchBackend} from "react-dnd-touch-backend"
import {HTML5Backend} from "react-dnd-html5-backend";
import { MultiBackend, TouchTransition } from "react-dnd-multi-backend";

function App() {

  const HTML5toTouch = {
  backends: [
    {
      id: "html5",
      backend: HTML5Backend,
    },
    {
      id: "touch",
      backend: TouchBackend,
      options: { enableMouseEvents: true },
      transition: TouchTransition,
    },
  ],
};


  const routes = createHashRouter([
    {
      path: "/", element: <Home />, errorElement: <Error />,
    },

    {
      path: "/quizz", element: <Quizz />, errorElement: <Error />,
    },

    {
      path: "/game", element: <Game />, errorElement: <Error />,
    },
  ], {basename:"eco_city"})



  const customConfig = defineConfig({

    theme: {
      tokens: {

        fonts: {
          body: { value: "Nunito,sans-serif" },
          heading: { value: "Baloo2,serif" }
        },
        colors: {
          primary: {
            DEFAULT: { value: "#47D45D" },
            50: { value: "#E9F8EC" },
            100: { value: "#CFF2D6" },
            200: { value: "#A3E8AF" },
            300: { value: "#75DE86" },
            400: { value: "#47D45D" },
            500: { value: "#2EBF4F" },
            600: { value: "#26A645" },
            700: { value: "#1E8C3A" },
            800: { value: "#15732F" },
            900: { value: "#0B5924" },
          },
          accent: {
            DEFAULT: { value: "#FFA43D" },
            50: { value: "#FFF5E9" },
            100: { value: "#FFE7C7" },
            200: { value: "#FFD199" },
            300: { value: "#FFBB6B" },
            400: { value: "#FFA43D" },
            500: { value: "#FF8C0A" },
            600: { value: "#E57C05" },
            700: { value: "#CC6B00" },
            800: { value: "#B35A00" },
            900: { value: "#994900" },
          },


          bg: {
            DEFAULT: { value: "#69C8FC" },
            50: { value: "#F0F9FF" },
            100: { value: "#DFF3FE" },
            200: { value: "#B8E5FE" },
            300: { value: "#90D6FD" },
            400: { value: "#69C8FC" },
            500: { value: "#42BAFB" },
            600: { value: "#1CA5F3" },
            700: { value: "#1386CC" },
            800: { value: "#0A689F" },
            900: { value: "#044A72" },
          },

          text: {
            DEFAULT: { value: "#000000" },
            50: { value: "#F7F7F7" },
            100: { value: "#E6E6E6" },
            200: { value: "#CCCCCC" },
            300: { value: "#B3B3B3" },
            400: { value: "#999999" },
            500: { value: "#666666" },
            600: { value: "#4D4D4D" },
            700: { value: "#333333" },
            800: { value: "#1A1A1A" },
            900: { value: "#00000000" },
          },
        },


      }
    }

  })

  const theme = createSystem(defaultConfig, customConfig);

  return (

    <DndProvider backend={MultiBackend} options={HTML5toTouch}>
      <ChakraProvider value={theme}>
        <RouterProvider router={routes} />
      </ChakraProvider>
    </DndProvider>
  )
}

export default App
