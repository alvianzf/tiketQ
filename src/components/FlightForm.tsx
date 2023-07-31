import { useEffect, useState } from "react";
import {getArea} from '../services/api'
import Select from 'react-select'

export default function FlightForm() {

    type Options = {
        value: string;
        label: string;
      };

    type item = {
        code: string
        airport: string
    }[]

    const [airport, setAirport] = useState([]);
    const [options, setOptions] = useState([]);

    useEffect(() =>{
        const fetchAirport = async () => {
            let area = await getArea();
            setAirport(area);
            };
    
        fetchAirport();

    }, []);

    return (
        <div className="flight-form">
            <div className="flight-form-input">
                <span className="material-symbols-outlined">flight_takeoff</span>
                <input name="from" type="text" placeholder={airport.length > 0 ? "From where?" : "Loading ..."} className="flight-input" list="airports" autoComplete="on"></input>
            </div>
            <div className="flight-form-input">
                <span className="material-symbols-outlined">flight_land</span>
                <input name="to" type="text" placeholder={airport.length > 0 ? "Where to?" : "Loading ..."} className="flight-input" list="airports" autoComplete="on"></input>
            </div>
            <div className="flight-form-input">
                <span className="material-symbols-outlined">calendar_month</span>
                <input name="from" type="date" placeholder="Date" className="flight-input"></input>
            </div>
            <div className="flight-input-button">
                <button className="flight-search-button" onClick={(e) => { e.stopPropagation(); handleflightSearch(); }}>Search</button>
            </div>

            <datalist id="airports">
                {airport.map((item) => (
                    <option key={item.code}>{item.airport ? item.airport : item.city} - {item.code}</option>
                ))}
            </datalist>
        </div>
    )
}
