import { Switch, Route } from "react-router-dom";
import  { MainPage }  from "../pages/Main-page";
import { Flights } from "../pages/FlightsListPage";
import { FlightDetail } from "../pages/FlightDetail";
import { PaymentPage } from "../pages/Payment";

export function RoutesPage() {
    return (
        <div>
            <Switch>
                <Route exact path="/" component={MainPage} />
                <Route exact path="/flights" component={Flights} />
                <Route exact path="/flight/:id" component={FlightDetail} />
                <Route exact path="/payment/:id" component={PaymentPage} />
            </Switch>
        </div>
    );
}
