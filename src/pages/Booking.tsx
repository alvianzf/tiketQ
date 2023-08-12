import { useEffect, useState } from "react";
import { useSearchParams } from 'react-router-dom';
import { getBooking, postBooking } from "../services/api";

export default function Booking() {
    const [params] = useSearchParams();
    const kodebooking = params.get("kodebooking");
    const [booking, setBooking] = useState("");

    useEffect(() => {
      const fetchBooking = async () => {
          try {
              const bookings = await getBooking({ kodebooking });
              setBooking(bookings);
              console.log(bookings); // Log the updated state here
          } catch (error) {
              console.error(error);
          }
      };
  
      fetchBooking();
  }, [kodebooking]);
  

    
    
    
  return (
    <div className="flight-detail column">
      <span>Booking success!</span>
      <h2>{kodebooking}</h2>
      <p>{booking.flight}</p>
      <p>passenger: {booking.flight_datapassengers}</p>
      <p>date: {booking.flight_departure}</p>
      <p>payment status: <strong>{booking.flight_statusbooking}</strong></p>
    </div>
  )
}
