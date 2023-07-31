import { createBrowserRouter } from "react-router-dom"
import MainPage from "../pages/MainPage"
import Flights from "../pages/Flights"

export const routes = createBrowserRouter([
    {
        path: "/",
        element: <MainPage />
    },
    {
        path: '/flights',
        element: <Flights />
    }
])