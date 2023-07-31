import { useEffect, useState } from "react";
import {getArea} from '../services/api'
import DatePicker from 'react-datepicker'

import "react-datepicker/dist/react-datepicker.css";
import 'react-datepicker/dist/react-datepicker-cssmodules.css'
import { useNavigate } from "react-router-dom";
import moment from "moment";

export default function FlightForm() {

    const [airport, setAirport] = useState([]);
    const [startDate, setStartDate] = useState(new Date());
    const [from, setFrom] = useState("");
    const [to, setTo] = useState("");

    useEffect(() =>{
        const fetchAirport = async () => {
            let area = await getArea();
            setAirport(area);
            };
    
        fetchAirport();

    }, []);

    const handleChange = (type, val) => {
        if (type == 'from') {
            setFrom(val.target.value);
        } else {
            setTo(val.target.value);
        }
    }

    const navigate = useNavigate()
    const sendForm = (): void => {

        if (to && from) {
            navigate(`/flights?from=${from}&to=${to}&date=${moment(startDate).format('DD-MM-YYYY')}`);
        }

    }

    return (
        <div className="flight-form">
            <div className="flight-form-input">
                <span className="material-symbols-outlined">flight_takeoff</span>
                <input name="from" type="text" placeholder={airport.length > 0 ? "From where?" : "Loading ..."} className="flight-input" list="airports" autoComplete="on"
                onChange={val => handleChange("from", val)}></input>
            </div>
            <div className="flight-form-input">
                <span className="material-symbols-outlined">flight_land</span>
                <input name="to" type="text" placeholder={airport.length > 0 ? "Where to?" : "Loading ..."} className="flight-input" list="airports" autoComplete="on"
                onChange={val => handleChange("to", val)}></input>
            </div>
            <div className="flight-form-input">
                <span className="material-symbols-outlined">calendar_month</span>
                {/* <input name="from" type="date" placeholder="Date" className="flight-input"></input> */}
                <DatePicker selected={startDate} onChange={(date) => setStartDate(date)} className="flight-input"/>
            </div>
            <div className="flight-input-button">
                <button className="flight-search-button" onClick={sendForm}>Search</button>
            </div>

            <datalist id="airports">
                {airport.map((item) => (
                    <option key={item.code} value={item.code}>{item.airport ? item.airport : item.city} - {item.city}</option>
                ))}
            </datalist>
        </div>
    )
}
