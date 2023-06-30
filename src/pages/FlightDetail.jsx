import React, { useState, useEffect } from 'react'
import MainHotel from '../components/FlightDetail/MainHotel'
import { useParams } from 'react-router-dom'
import { useAxios } from '../Hooks/useAxios'
import { CircularProgress } from '@material-ui/core'
import logo from '../assets/spinner.svg'
import NavigationItems from '../components/navigationItems.jsx';
import { useHistory } from "react-router-dom";

export const FlightDetail = () => {
    const { id } = useParams()
    let history = useHistory();
    const [isLoading, setIsLoading] = useState(false)
    const flightData = {
        "result": "ok",   
        "flight": "Citilink",   
        "flight_code": "QG-724",   
        "flight_from": "CGK",   
        "flight_to": "SUB",   
        "flight_route": "CGK-SUB",   
        "flight_date": "2018-05-30",   
        "flight_departure": "30 May 2018 18:40",   
        "flight_transit": "Nonstop",   
        "flight_infotransit": "Jakarta(CGK) 18:40 - Surabaya(SUB) 20:20",   
        "flight_time": "18:40 - 20:20",   
        "flight_class": "O",   
        "flight_availableseat": "5",   
        "flight_baggage": "20kg",   
        "flight_facilities": "-",   
        "publish": 425000,   
        "tax": 112500,   
        "totalfare": 537500,   
        "adult": "1",   
        "child": "0",  
        "infant": "0",   
        "flight_shownta": 524750,   
        "flight_realnta": 516250 
    }

    console.log('flightData:', flightData)
    // const { flightData } = useAxios(`https://my-api-data.herokuapp.com/data?hotelId=${id}`)

    useEffect(() => {
        setTimeout(() => {
            setIsLoading(true)
        }, 1500);
    }, [])

    const styles = {
        progress: {
            width: '20%',
            margin: '200px auto',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
        },

        img: {
            width: '100px',
        },
        button: {
            backgroundColor: '#04AA6D',
            display: 'inline-block',
            padding: '8px 16px',
            borderColor: 'transparent',
            borderRadius: '10px',
            color: 'white'
          }

    }

    return (
        <>
            {isLoading ?
                <div>
                    <NavigationItems items={['Flights', 'Hotels', 'Packages', 'Sign In']}/>
                    <KeyboardBackspaceIcon onClick={() => history.goBack()} />
                    {/* <button onClick={() => history.goBack()} className="button">&laquo; Back</button> */}
                    <MainHotel flightData={flightData} id={id} />
                </div>
                : <div style={styles.progress}>
                    {/* <img src={logo} alt="" style={styles.img} /> */}
                    <CircularProgress />
                </div>}
        </>
    )
}

// export default FlightDetail;
