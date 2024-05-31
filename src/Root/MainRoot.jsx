import { createBrowserRouter } from "react-router-dom";
import Home from "../Pages/Home";
import MainLayout from "../Layout/MainLayout";
import ErrorPage from "../Pages/ErrorPage";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import AllArtCraft from "../Pages/AllArtCraft";
import AddCraft from "../Pages/AddCraft";
import MyCraft from "../Pages/MyCraft";
import ViewDetails from "../Pages/ViewDetails";
import PrivateRoot from "../Private/PrivateRoot";
import UpdateCraft from "../Pages/UpdateCraft";
import LandScap from "../Pages/LandScap";
import PortaitPage from "../Pages/PortaitPage";
import WaterPainting from "../Pages/WaterPainting";
import OilPaintingPage from "../Pages/OilPaintingPage";
import CharcoalSketching from "../Pages/CharcoalSketching";
import CartoonDrawingPage from "../Pages/CartoonDrawingPage";
import LandCardDetails from "../Pages/LandCardDetails";
import PortaitCardDetails from "../Pages/PortaitCardDetails";
import WaterpaintaingDetails from "../Pages/WaterpaintaingDetails";
import OilPaintingDetails from "../Pages/OilPaintingDetails";
import CharcoalCardDetails from "../Pages/CharcoalCardDetails";
import CartoonDrawingCardDetails from "../Pages/CartoonDrawingCardDetails";



export const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout></MainLayout>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: "/",
                element: <Home></Home>,
                loader: () => fetch('https://assignment-10-server-side-sage.vercel.app/craft'),

            },
            {
                path: "/allArt&Craft",
                element: <AllArtCraft></AllArtCraft>,
                loader: () => fetch('https://assignment-10-server-side-sage.vercel.app/craft'),

            },
            {
                path: "/addArt&Craft",
                element: <PrivateRoot><AddCraft></AddCraft></PrivateRoot>,

            },
            {
                path: "/myArt&Craft",
                element: <PrivateRoot><MyCraft></MyCraft></PrivateRoot>,

            },
            {
                path: "/LandCategory",
                element: <LandScap></LandScap>,
                loader: () => fetch('https://assignment-10-server-side-sage.vercel.app/LandScap'),

            },
            {
                path: "/landCardDetails/:_id",
                element: <PrivateRoot><LandCardDetails></LandCardDetails></PrivateRoot>,
                loader: () => fetch('https://assignment-10-server-side-sage.vercel.app/LandScap'),
            },
            {
                path: "/PortaitCategory",
                element: <PortaitPage></PortaitPage>,
                loader: () => fetch('https://assignment-10-server-side-sage.vercel.app/Portait'),

            },
            {
                path: "/PortaitCardDetails/:_id",
                element: <PrivateRoot><PortaitCardDetails></PortaitCardDetails></PrivateRoot>,
                loader: () => fetch('https://assignment-10-server-side-sage.vercel.app/Portait'),
            },
            
            {
                path: "/WaterPaintingCategory",
                element: <WaterPainting></WaterPainting>,
                loader: () => fetch('https://assignment-10-server-side-sage.vercel.app/WaterPainting'),

            },
            {
                path: "/waterPaintaingDetails/:_id",
                element: <PrivateRoot><WaterpaintaingDetails></WaterpaintaingDetails></PrivateRoot>,
                loader: () => fetch('https://assignment-10-server-side-sage.vercel.app/WaterPainting'),
            },
            {
                path: "/OilPaintingCategory",
                element: <OilPaintingPage></OilPaintingPage>,
                loader: () => fetch('https://assignment-10-server-side-sage.vercel.app/OilPainting'),

            },
            {
                path: "/oilPaintaingDetails/:_id",
                element: <PrivateRoot><OilPaintingDetails></OilPaintingDetails></PrivateRoot>,
                loader: () => fetch('https://assignment-10-server-side-sage.vercel.app/OilPainting'),
            },
            {
                path: "/CharcoalSketchingCategory",
                element: <CharcoalSketching></CharcoalSketching>,
                loader: () => fetch('https://assignment-10-server-side-sage.vercel.app/CharcoalSketching'),

            },
            {
                path: "/CharcoalSketchingDetails/:_id",
                element: <PrivateRoot><CharcoalCardDetails></CharcoalCardDetails></PrivateRoot>,
                loader: () => fetch('https://assignment-10-server-side-sage.vercel.app/CharcoalSketching'),
            },
            {
                path: "/cartoonDrawingCategory",
                element: <CartoonDrawingPage/>,
                loader: () => fetch('https://assignment-10-server-side-sage.vercel.app/cartoonDrawing'),

            },
            {
                path: "/cartoonDrawingDetails/:_id",
                element: <PrivateRoot><CartoonDrawingCardDetails></CartoonDrawingCardDetails></PrivateRoot>,
                loader: () => fetch('https://assignment-10-server-side-sage.vercel.app/cartoonDrawing'),
            },
           
            {
                path: "/updateCraft/:id",
                element: <PrivateRoot><UpdateCraft></UpdateCraft></PrivateRoot>,
                loader: ({ params }) => fetch(`https://assignment-10-server-side-sage.vercel.app/craft/${params.id}`),
            },
            
            {
                path: "/viewDetails/:_id",
                element: <PrivateRoot><ViewDetails></ViewDetails></PrivateRoot>,
                loader: () => fetch('https://assignment-10-server-side-sage.vercel.app/craft'),
            },
            
            {
                path: "/login",
                element: <Login></Login>,

            },
            {
                path: "/register",
                element: <Register></Register>,

            },
        ]
    },
]);