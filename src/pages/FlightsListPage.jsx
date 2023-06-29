import { useState } from "react";
import { useEffect } from "react";
import { FlightList } from "../components/FlightList/FlightList";
import logo from "../assets/spinner.svg";
import { CircularProgress } from "@material-ui/core";
import styled from "styled-components";
import NavigationItems from '../components/navigationItems.jsx';
import { useHistory } from "react-router-dom";

const Wrapper = styled.div`
  .progress {
    width: 20%;
    margin: 200px auto;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .progress > img {
    margin-bottom: 10px;
    width: 100px;
  }

  .button {
    background-color: #04AA6D;
    display: inline-block;
    padding: 8px 16px;
    border-color: transparent;
    border-radius: 10px;
    color: white;
  }

  
`;

export const Flights = () => {
  let history = useHistory();
  const [loading, setloading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setloading(false);
    }, 2000);
  });
  return (
    <>
      {loading ? (
        <Wrapper>
          <div className="progress">
            {/* <img src={logo} alt="" /> */}
            <CircularProgress />
          </div>
        </Wrapper>
      ) : (
        <Wrapper>
          <NavigationItems items={['Flights', 'Hotels', 'Packages', 'Sign In']} />
          <button onClick={() => history.goBack()} className="button">&laquo; Back</button>
          <FlightList />
        </Wrapper>
      )}
    </>
  );
};
