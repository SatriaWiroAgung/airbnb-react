import {
  AppBar,
  Box,
  List,
  ListItem,
  Stack,
  ThemeProvider,
  Typography,
  createTheme,
  responsiveFontSizes,
} from "@mui/material";
import { UIEvent, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import AirBnbCard from "../../components/airbnbcard/AirBnbCard";
import LoadingSpinner from "../../components/loadingspinner/LoadingSpinner";
import { Scaled } from "../../constants";
import { dependencies } from "../../dependencies";
import { airBnbGrid, airBnbLogo } from "../../images/images";
import AirBnbEvent from "../../models/AirBnbEvent";
import { addElements, removeElement } from "../../slices/airBnbPage";
import { RootState } from "../../store";
import "./AirBnbPage.css";
import InfiniteScroll from 'react-infinite-scroll-component';

const AirBnbPageOld = () => {
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

const airBnbTheme = createTheme({
  typography: {
    fontFamily: "Poppins, sans-serif",
  },
});

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

  const handleScroll = (e: UIEvent<HTMLDivElement>) => {
    console.log("handle scroll");
    const containerWidth = e.currentTarget.clientWidth;
    const scrollWidth = e.currentTarget.scrollWidth;
    const scrollLeft = e.currentTarget.scrollLeft;
    const isEnd = scrollWidth - scrollLeft === containerWidth;
    if (isEnd && !isLoading) {
      getAllEvent();
    }
  };

  return (
    <ThemeProvider theme={responsiveFontSizes(airBnbTheme)}>
      <Stack>
        <AppBar
          position="relative"
          sx={{
            backgroundColor: "background.default",
            paddingY: Scaled.px(16),
            boxShadow: "0px 7px 10px 0.02em gainsboro",
          }}
        >
          <Stack direction={"row"}>
            <Box
              component="img"
              src={airBnbLogo}
              sx={{
                width: "max-content",
                height: Scaled.px(30),
                marginLeft: Scaled.px(30),
              }}
            />
          </Stack>
        </AppBar>
        <Stack alignItems={"center"} sx={{ marginY: Scaled.px(30) }}>
          <Box component="img" width="60%" src={airBnbGrid} />
        </Stack>

        <Stack sx={{ marginX: Scaled.px(32), marginY: Scaled.px(32) }}>
          <Typography fontWeight={700} fontSize={Scaled.rem(64)}>
            Online Experiences
          </Typography>
          <Typography
            width={"80vw"}
            fontWeight={100}
            lineHeight={"150%"}
            letterSpacing={Scaled.rem(0.1)}
            fontSize={Scaled.rem(48)}
          >
            Join unique interactive activities led by one-of-a-kind hosts—all
            without leaving home.
          </Typography>
        </Stack>

        <div
         id="scrollableDiv"
         style={{
           width: "100vw",
           display: 'flex',
           flexDirection: 'row',
         }}>
          <InfiniteScroll
            dataLength={airBnbEvents.length}
            next={getAllEvent}
            hasMore={true}
            loader={<LoadingSpinner />}
            style={{ display: 'flex', flexDirection: 'row' }}
            scrollableTarget="scrollableDiv">
            <Stack direction="row" spacing={1}>
              {airBnbEvents.length > 0 &&
                airBnbEvents?.map((item) => (
                  <AirBnbCard
                    airBnbEvent={item}
                    onRemoveCard={(airBnbEvent: AirBnbEvent) => {
                      dispatch(removeElement(airBnbEvent));
                    }}
                  />
                ))}
            </Stack>
          </InfiniteScroll>
        </div>
        
      </Stack>
    </ThemeProvider>
  );
};

export default AirBnbPage;
