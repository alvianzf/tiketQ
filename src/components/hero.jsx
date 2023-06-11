import '../App.css'
import FlightForm from './flightForm'

export default function Hero(props) {

    return (
        <div className="hero">
            <div className="hero-body">
                <h1 class="hero-text">It's more than  just a trip</h1>
            </div>
                <FlightForm />
        </div>
    )
}