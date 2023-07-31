import { createBrowserRouter } from "react-router-dom"
import MainPage from "../pages/MainPage"
import Flights from "../pages/Flights"
import FlightDetails from "../pages/FlightDetails"

export const routes = createBrowserRouter([
    {
        path: "/",
        element: <MainPage />
    },
    {
        path: '/flights',
        element: <Flights />
    },
    {
        path: '/flight-details',
        element: <FlightDetails />
    }
])