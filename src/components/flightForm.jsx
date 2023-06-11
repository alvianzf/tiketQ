export default function FlightForm(props) {

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
                <div className="flight-search-button">Search</div>
            </div>
        </div>
    )
}