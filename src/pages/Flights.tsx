import React, { useEffect, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import { getFlight } from '../services/api';
import FlightCard from '../components/FlightCard';
import { ScaleLoader } from "react-spinners";


const override: CSSProperties = {
  display: "block",
  margin: "0 auto",
  borderColor: "red",
};

function Flights() {
  const [params] = useSearchParams();
  const to = params.get('to');
  const from = params.get('from');
  const date = params.get('date');
  
  const [flights, setFlights] = useState([]);
  let [loading, setLoading] = useState(true);
  let [color, setColor] = useState("#605DEC");

  useEffect(() => {

    const fetchAirport = async () => {
        let area = await getFlight(to, from, date);
        setFlights(area);

        setLoading(false);
        };

    fetchAirport();
}, []);

  return (
    <>
      <div className="header-bar">
        <div className="flight-route">
          {from} - {to}
          <div className="flight-date">
            {date}
          </div>
        </div>
        <div className="flight-length">
          {flights.length} Flights
        </div>
      </div>
      <div className="wrapper">
        <div className="flights-wrapper">
          <div className="flight-container">
          <div className="sweet-loading">
            <ScaleLoader
              color={color}
              loading={loading}
              cssOverride={override}
              size={150}
              aria-label="Loading Spinner"
              data-testid="loader"
            />
          </div>
            {flights.map((flight, i) => 
                <FlightCard key={i} flight={flight} to={to} from={from} date={date} />
              )}
          </div>
        </div>
      </div>
    </>
  )
}

export default Flights