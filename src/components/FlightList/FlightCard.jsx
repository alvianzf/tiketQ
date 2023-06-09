import styled from "styled-components";

const Wrapper = styled.div`
  width: 95%;
  height: 170px;
  margin: 10px;
  margin-bottom: 20px;
  border-radius: 0.5rem;
  display: flex;
  background: white;
  padding-right: 0.5rem;

  &:hover {
    cursor: pointer;
  }

  .card-image {
    height: 100%;
    width: 30%;
    border-radius: 0.5rem 0 0 0.5rem;
  }

  .flight-detail {
    width: 50%;
    margin-left: 0.5rem;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  .flight-name,
  .flight-city {
    margin: 0.1rem 0;
  }

  .flight-name-add {
    margin-top: 5px;
  }

  .flight-city {
    color: #505c66;
    padding-bottom: 0.5rem;
  }

  .description {
    color: #209c6b;
    margin-bottom: 0.3rem;
  }

  .desc-rating {
    margin-bottom: 0.5rem;
  }

  .rating {
    font-size: 0.875rem;
    color: #505c66;

    color: #8f8f8f;
  }

  .star {
    color: #1d1c1c;
    font-weight: 700;
  }

  .price-detail {
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    font-size: 0.6rem;
    margin-bottom: 0.5rem;
    text-align: right;
  }

  .off {
    border-radius: 1.5rem;
    padding: 0.5rem;
    background: #1f7d57;
    color: white;
  }

  .price {
    font-size: 1.5rem;
    font-weight: 700;
  }

  .total-price {
    font-weight: 700;
  }
`;

export const Flightcard = ({ data, handleOpenFlight }) => {
  console.log('handleOpenFlight', handleOpenFlight)
    return (
        <Wrapper
            onClick={() => {
                handleOpenFlight(data.flight_code);
            }}
        >
            {/* <img className="card-image" src={data.images[1].url} alt="" /> */}
            <div className="flight-detail">
                <div className="flight-name-add">
                    <h3 className="flight-name">{data.flight}</h3>
                    <span>{data.flight_date}</span>
                    <div className="flight-city">{data.flight_infotransit}</div>
                </div>
                <div className="desc-rating">
                    <div className="description">Fully refundable</div>
                    <div className="description">Reserve Now Pay Later</div>
                    {/* <div className="rating">
                        <span className="star">{data.flight_price}/5.0</span> Excellent (356
                        reviews)
                    </div> */}
                </div>
            </div>
            <div className="price-detail">
                <div className="off">We have 5 left at 25% off</div>
                <div className="price">Rp.{data.flight_price}</div>
                <div>{data.flight_route}</div>
                <div className="total-price">Rp.{data.flight_price + 20} Total</div>
                <div>Includes taxes and fees</div>
            </div>
        </Wrapper>
    );
};
