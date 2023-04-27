import { UIEvent, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import AirBnbCard from "../../components/airbnbcard/AirBnbCard";
import LoadingSpinner from "../../components/loadingspinner/LoadingSpinner";
import { dependencies } from "../../dependencies";
import { airBnbGrid, airBnbLogo } from "../../images/images";
import AirBnbEvent from "../../models/AirBnbEvent";
import { addElements, removeElement } from "../../slices/airBnbPage";
import { RootState } from "../../store";
import "./AirBnbPage.css";

const AirBnbPage = () => {
  const airBnbEvents = useSelector(
    (state: RootState) => state.airBnbEvents.values
  );
  const [isLoading, setIsLoading] = useState(true);
  const dispatch = useDispatch();
  const getAllEvent = () => {
    setIsLoading(true);
    dependencies.usecases.event.getAllEvent().then((value) => {
      setIsLoading(false);
      dispatch(addElements(value)); // Move to Use Case
    });
  };

  useEffect(() => {
    getAllEvent();
  }, []);

  const handleScroll = (e: UIEvent<HTMLUListElement>) => {
    const containerWidth = e.currentTarget.clientWidth;
    const scrollWidth = e.currentTarget.scrollWidth;
    const scrollLeft = e.currentTarget.scrollLeft;
    const isEnd = scrollWidth - scrollLeft === containerWidth;
    if (isEnd && !isLoading) {
      getAllEvent();
    }
  };

  return (
    <div id="airbnb-page">
      <nav>
        <img id="nav-logo" src={airBnbLogo} alt="AirBnb Logo" />
      </nav>
      <section id="introduction-section">
        <img id="airbnb-grid" src={airBnbGrid} alt="AirBnb Grid" />
        <div id="airbnb-introduction-title">
          <h1>Online Experiences</h1>
          <p>
            Join unique interactive activities led by one-of-a-kind hosts—all
            without leaving home.
          </p>
        </div>
      </section>
      <section id="events-section">
        <ul id="event-list" onScroll={handleScroll}>
          {airBnbEvents.length > 0 &&
            airBnbEvents?.map((item) => (
              <li className="event-list-item">
                <AirBnbCard
                  airBnbEvent={item}
                  onRemoveCard={(airBnbEvent: AirBnbEvent) => {
                    dispatch(removeElement(airBnbEvent));
                  }}
                />
              </li>
            ))}
          {isLoading && (
            <li id="loading-item">
              <LoadingSpinner />
            </li>
          )}
        </ul>

        {/* {(() => {
                if (isLoading) {
                    return <LoadingSpinner />;
                }
            })()} */}
      </section>
    </div>
  );
};

export default AirBnbPage;
