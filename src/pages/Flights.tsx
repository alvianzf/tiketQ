import React, { useEffect, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import { getFlight } from '../services/api';


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

    console.log(flights)
}, []);

  return (
    <div>Flights</div>
  )
}

export default Flights