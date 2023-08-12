import { useEffect, useState } from "react";
import { useNavigate, useSearchParams, createSearchParams } from "react-router-dom";
import { getPrice, postBooking } from "../services/api";
import { ScaleLoader } from "react-spinners";
import Select from 'react-select'
import moment from "moment";
import DatePicker from 'react-datepicker'

import "react-datepicker/dist/react-datepicker.css";
import 'react-datepicker/dist/react-datepicker-cssmodules.css'

const override: CSSProperties = {
  display: "block",
  margin: "0 auto",
  borderColor: "red",
};

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

const options = [
  { value: 'Mr.', label: 'Mr.' },
  { value: 'Ms.', label: 'Ms.' },
  { value: 'Mrs.', label: 'Mrs.' }
]

const childs = [
  { value: 'Mstr.', label: 'Mstr.' },
  { value: 'Miss.', label: 'Miss.' },
]

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
  let [loading, setLoading] = useState(true);
  let [color, setColor] = useState("#605DEC");
  const [startDate, setStartDate] = useState(new Date());
  const [passengername, setPassengername] = useState('');
  const [email, setEmail] = useState('alvianzf@gmail.com');
  const [phone, setPhone] = useState('081378202071');
  const [title, setTitle] = useState('Mr.');


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

      setLoading(false);

    }, [to, from, date, flight_code, adult, child, infant]); // Add the necessary dependencies

  const handleChange = (type: string, val: any):void => {
    if (type === 'passenger') {
      setPassengername(val.target.value)
    }

    if (type === 'email') { 
      setEmail(val.target.value)
    }

    if (type === 'title') {
      setTitle(val.target.value)
    }

    if (type === 'phone') {
      setPhone(val.target.value)
    }
  }

  const navigate = useNavigate()

  const handleClick = ():void => {
    const dateofbirth = moment(startDate).format('DD-MM-YYYY')
    const params = {flight: flight_code, to, from, date, adult, child, infant, email, phone, passengername: title + passengername, dateofbirth}

    setLoading(true)

    getBooking(params).then(data => {
      const kodebooking = data 

      if (kodebooking) {
        const searchParams = createSearchParams({kodebooking})
        navigate(`/booking?${searchParams}`);
      }
    })

  }

  const getBooking = async (params) => {
    const {
      to,
      from,
      date,
      flight,
      adult,
      child,
      infant,
      passengername,
      email,
      dateofbirth,
      phone
    } = params;
    
    try {
      const bookings = await postBooking({
        to,
        from,
        date,
        flight,
        adult,
        child,
        infant,
        passengername,
        email,
        dateofbirth,
        phone
      });

      if (bookings?.kodebooking) {
        return bookings.kodebooking
      } else if (bookings?.flight_code) {
        return bookings?.reason
      }
    } catch (err) {
      console.log(err)
    }
  }

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

    {flights?.publish ? 
    <div>
    <div>
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

        <div className="detail-img"><h3>Passenger Form</h3></div>
      <div className="flight-detail-form">
        <strong>Dewasa</strong>
        {}
        <div><p>Nama Lengkap</p>
          <div style={{display: "flex"}}>
            <Select name="passenger" options={options} placeholder="Mr." defaultValue="Mr." onChange={val => handleChange('title', val)}/>
            <input name="passenger" className="input-right" onChange={val => handleChange('passenger', val)} placeholder="Nama Lengkap"></input>
          </div>
        </div>
        <div><span>Tanggal Lahir</span>
          <div style={{display: "block"}}>
            <DatePicker selected={startDate} onChange={(date) => setStartDate(date)} className="flight-input"/>
          </div>
        </div>
        <div><span>Nomor Kontak</span>
            <input name="phone" className="input-full" onChange={val => handleChange('phone', val)}  placeholder="08 ..."></input>
        </div>
        <div><span>email</span>
            <input name="email" type="email"  onChange={val => handleChange('email', val)} className="input-full" placeholder="08 ..."></input>
        </div>
      </div>
        <div className="detail-btn" onClick={handleClick}>{loading? <ScaleLoader
              color="#FFFF"
              loading={loading}
              cssOverride={override}
              size={150}
              aria-label="Loading Spinner"
              data-testid="loader"
            /> : "Konfirmasi"}</div>
      </div>

      </div>
      :
      <div className="sweet-loading">
            <ScaleLoader
              color={color}
              loading={loading}
              cssOverride={override}
              size={150}
              aria-label="Loading Spinner"
              data-testid="loader"
            />
              {flights?.reason}
         </div>
      }
    </>
  );
}
