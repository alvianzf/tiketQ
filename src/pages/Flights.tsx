import React, { useEffect, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import { getFlight } from '../services/api';
import FlightCard from '../components/FlightCard';

function Flights() {
  const [params] = useSearchParams();
  const to = params.get('to');
  const from = params.get('from');
  const date = params.get('date');
  
  const [flights, setFlights] = useState([]);

  useEffect(() => {

    const fetchAirport = async () => {
        let area = await getFlight(to, from, date);
        setFlights(area);
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