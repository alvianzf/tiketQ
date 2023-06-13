import { Switch, Route } from "react-router-dom";
import  { MainPage }  from "../pages/Main-page";
import { Flights } from "../pages/FlightsListPage";

export function RoutesPage() {
    return (
        <div>
            <Switch>
                <Route exact path="/" component={MainPage} />
                <Route exact path="/flights" component={Flights} />
            </Switch>
        </div>
    );
}
