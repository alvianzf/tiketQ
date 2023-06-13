import { useHistory } from 'react-router-dom';
export default function FlightForm(props) {
    const history = useHistory();

    const handleHotelSearch = () => {
        history.push("/flights");
    }
    return (
        <div className="flight-form">
            <div className="flight-form-input">
                <span class="material-symbols-outlined">flight_takeoff</span>
                <input name="from" type="text" placeholder="From where?" className="flight-input"></input>
            </div>
            <div className="flight-form-input">
                <span class="material-symbols-outlined">flight_land</span>
                <input name="to" type="text" placeholder="Where to?" className="flight-input"></input>
            </div>
            <div className="flight-form-input">
                <span class="material-symbols-outlined">calendar_month</span>
                <input name="from" type="date" placeholder="Date" className="flight-input"></input>
            </div>
            <div className="flight-input-button">
                <button className="flight-search-button" onClick={(e) => { e.stopPropagation(); handleHotelSearch(); }}>Search</button>
            </div>
        </div>
    )
}