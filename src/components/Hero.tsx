import FlightForm from "./FlightForm";

export default function Hero(props) {
    return(
        <div className="hero">
            <div className="her-body">
                <h1 className="hero-text">It's more than just a trip</h1>
            </div>

            <FlightForm />
        </div>
    )
}