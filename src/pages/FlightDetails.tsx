import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { getPrice } from "../services/api";

type Flights = {
      adult: string;
      child: string;
      infant: string;
      flight: string;
      flight_availableseat: string;
      flight_code: string;
      flight_date: string;
      flight_duration: string | null;
      flight_form: string;
      flight_price: number | null;
      flight_time: string;
      flight_id: string;
      flight_image: string;
      flight_infotransit: string;
      flight_to: string;
      publish: string;
      result: string;
      text: string;
      totalfare: string;
      
}

export default function FlightDetails() {
  const [params] = useSearchParams();
  const to = params.get("to");
  const from = params.get("from");
  const date = params.get("date");
  const flight_code = params.get("flight");
  const adult = params.get("adult");
  const child = params.get("child");
  const infant = params.get("infant");

  const [flights, setFlights] = useState([]);


  let IDR = new Intl.NumberFormat('id-ID', {
    style: 'currency',
    currency: 'IDR'
    }); 


    useEffect(() => {
      const fetchAirport = async () => {
        try {
          const detail: Flights = await getPrice({
            to,
            from,
            date,
            flight: flight_code,
            adult,
            child,
            infant,
          });
          setFlights(detail);
        } catch (error) {
          console.error(error);
        }
      };
    
      fetchAirport();
    }, [to, from, date, flight_code, adult, child, infant]); // Add the necessary dependencies

  console.log(flights);

  // Rest of your code
  return (
    <>
      <div className="header-bar">
        <div className="flight-route">
          Confirmation for {flight_code} route {from} - {to}
          <div className="flight-date">{date}</div>
        </div>
        <div className="flight-length">
          {IDR.format(flights.totalfare)}
        </div>
      </div>

      <div className="detail-img">
        <img src={flights.flight_image} />
      </div>

      <div className="flight-detail">
        <div className="detail-head">
            <span>Maskapai</span>
            <br />
            <span>Dewasa</span>
            <span>Anak-Anak</span>
            <span>Bayi</span>
            <br />
            <span>Tiket</span>
            <span>Pajak</span>
            <br />
            <span>Total</span>
            <br />
            <span>Transit</span>
            <span>Lama Perjalanan</span>
        </div>
        <div className="detail-info">
            <span> <strong>{flights.flight}</strong></span>
            <br />
            <span> <strong>{flights.adult}</strong></span>
            <span> <strong>{flights.child}</strong></span>
            <span> <strong>{flights.infant}</strong></span>
            <br />
            <span> <strong>{IDR.format(flights.publish)}</strong></span>
            <span> <strong>{IDR.format(flights.tax)}</strong></span>
            <br />
            <span> <strong>{IDR.format(flights.totalfare)}</strong></span>
            <br />
            <span> <strong>{flights.flight_transit}</strong></span>
            <span> <strong>{flights.flight_duration}</strong></span>
        </div>
      </div>
      <div className="detail-btn">Konfirmasi</div>
    </>
  );
}
