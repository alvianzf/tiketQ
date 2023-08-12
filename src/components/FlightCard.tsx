import { useState } from "react";
import { createSearchParams, useNavigate } from "react-router-dom";

type Props = {
  flight: string;
  to: string;
  from: string;
  date: string;
}

type Params = {
  to: string;
  from: string;
  date: string;
  adult: string;
  child: string;
  infant: string;
  flight: string;
}

let IDR = Intl.NumberFormat('id-ID', {
  style: 'currency',
  currency: 'IDR'
})


export default function FlightCard({ flight, to, from, date } : Props) {
  const [adult, setAdult] = useState(1);
  const [child, setChild] = useState(0);
  const [infant, setInfant] = useState(0);

  const navigate = useNavigate();

  const handleChange = (type: string, e: any) => {
    if (type === "adult") {
      setAdult(e.target.value);
    } else if (type === "child") {
      setChild(e.target.value);
    } else {
      setInfant(e.target.value);
    }
  };

  
  const handleClick = () => {
    const params: Params = { to, from, date, adult: adult.toString(), child: child.toString(), infant: infant.toString(), flight: flight.flight_code };
    const searchParams = createSearchParams(params);

    navigate(`/flight-details?${searchParams}`);
  };

  return (
    <div className="flight-card" onClick={handleClick}>
      <div className="flight-image">
        <img src={flight.flight_image} alt={flight.flight_code}></img>
      </div>
      <div className="flight-info">
        <div className="flight-info-left">
          <div className="flight-name">{flight.flight}</div>
          <div className="with-icon flight-code">
            {flight.flight_code}
            <span className="material-symbols-outlined">flight</span>
          </div>
          <div className="with-icon flight_duration">
            {flight.flight_duration}
            <span className="material-symbols-outlined">schedule</span>
          </div>
          <div className="with-icon flight_infotransit">
            {flight.flight_infotransit}
            <span className="material-symbols-outlined">route</span>
          </div>
        </div>
        <div className="flight-info-right">
          <div className="flight-fare">{IDR.format(flight.flight_price)}</div>
          <div className="with-icon flight_seatavail">
            Seats available
            <span className="material-symbols-outlined">flight_class</span>
          </div>
          <div className="with-icon flight_transit">
            {flight.flight_transit}
            <span className="material-symbols-outlined">connecting_airports</span>
          </div>
          <div className="with-icon flight-baggage">
            {flight.flight_baggage}
            <span className="material-symbols-outlined">business_center</span>
          </div>
          <div className="flight-form">
            <div className="passenger-form adult-form">
              Adult:
              <input type="number" id="adult" value={adult} className="passenger-input" onChange={(e) => handleChange("adult", e)} />
            </div>
            <div className="passenger-form child-form">
              Child:
              <input type="number" id="child" value={child} className="passenger-input" onChange={(e) => handleChange("child", e)} />
            </div>
            <div className="passenger-form infant-form">
              Infant:
              <input type="number" id="infant" value={infant} className="passenger-input" onChange={(e) => handleChange("infant", e)} />
            </div>
            <div className="passenger-form">
              <button className="buy-ticket-btn" onClick={handleClick}>
                Go!
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
