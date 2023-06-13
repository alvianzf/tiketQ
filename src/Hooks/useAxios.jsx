import { useEffect, useState } from "react";
import axios from "axios";

export const useAxios = (url) => {
    const [flightData, setFlightData] = useState([]);

    useEffect(() => {
        (async () => {
            let { data } = await axios.get(url);
            setFlightData(data)
        })()
    }, [url])

    return { flightData }
}