import React, { useEffect } from 'react'
import styles from './styles/mainHotel.module.css'
import Ads from './Ads'
import FlightDetail from './HotelDetails'
import KeyboardBackspaceIcon from '@material-ui/icons/KeyboardBackspace';
import { useHistory } from 'react-router-dom'

const MainHotel = ({ flightData, id }) => {
    console.log('flightData', flightData)

    const history = useHistory()

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [])

    return (
        <>
            <div className={styles.container}>
                <div className={styles.mainBox}>
                    <div className={styles.content}>
                        <div className={styles.flex}>
                            <KeyboardBackspaceIcon onClick={() => history.goBack()} />
                            <p onClick={() => history.goBack()}>See all flight</p>
                        </div>
                        <FlightDetail flightData={flightData} id={id} />
                    </div>
                    <div>
                        <div style={{ position: 'sticky', top: '10px' }}>
                            <Ads />
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default MainHotel;
