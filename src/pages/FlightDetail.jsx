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

    const { hotelData } = useAxios(`https://my-api-data.herokuapp.com/data?hotelId=${id}`)
    // console.log('hotelData:', hotelData)

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
            {isLoading && hotelData.length > 0 ?
                <div>
                    <NavigationItems items={['Flights', 'Hotels', 'Packages', 'Sign In']}/>
                    <button onClick={() => history.goBack()} className="button">&laquo; Back</button>
                    <MainHotel hotelData={hotelData[0]} id={id} />
                </div>
                : <div style={styles.progress}>
                    {/* <img src={logo} alt="" style={styles.img} /> */}
                    <CircularProgress />
                </div>}
        </>
    )
}

// export default FlightDetail;
