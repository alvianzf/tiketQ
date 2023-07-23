import { useNavigate } from "react-router";

export default function FlightForm() {

    const history = useNavigate()

    const handleflightSearch = () => {
        history("/flights");
    }
    return (
        <div className="flight-form">
            <div className="flight-form-input">
                <span className="material-symbols-outlined">flight_takeoff</span>
                <input name="from" type="text" placeholder="From where?" className="flight-input"></input>
            </div>
            <div className="flight-form-input">
                <span className="material-symbols-outlined">flight_land</span>
                <input name="to" type="text" placeholder="Where to?" className="flight-input"></input>
            </div>
            <div className="flight-form-input">
                <span className="material-symbols-outlined">calendar_month</span>
                <input name="from" type="date" placeholder="Date" className="flight-input"></input>
            </div>
            <div className="flight-input-button">
                <button className="flight-search-button" onClick={(e) => { e.stopPropagation(); handleflightSearch(); }}>Search</button>
            </div>
        </div>
    )
}
