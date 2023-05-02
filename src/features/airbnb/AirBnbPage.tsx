import {
  AppBar,
  Box,
  Stack,
  ThemeProvider,
  Typography,
  createTheme,
  responsiveFontSizes,
} from "@mui/material";
import { UIEvent, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import AirBnbCard from "../../components/airbnbcard/AirBnbCard";
import LoadingSpinner from "../../components/loadingspinner/LoadingSpinner";
import { Scaled } from "../../constants";
import { dependencies } from "../../dependencies";
import { airBnbGrid, airBnbLogo } from "../../images/images";
import AirBnbEvent from "../../models/AirBnbEvent";
import {
  addElements,
  removeElement,
  setLoading,
} from "../../slices/airBnbPage";
import { RootState } from "../../store";
import "./AirBnbPage.css";

const airBnbTheme = createTheme({
  typography: {
    fontFamily: "Poppins, sans-serif",
  },
});

const AirBnbPage = () => {
  const airBnbEvents = useSelector(
    (state: RootState) => state.airBnbEvents.loadable
  );
  const dispatch = useDispatch();
  const getAllEvent = () => {
    dispatch(setLoading());

    setTimeout(() => {
      dependencies.usecases.event.getAllEvent().then((value) => {
        dispatch(addElements(value)); // Move to Use Case
      });
    }, 500);
  };

  useEffect(() => {
    getAllEvent();
  }, []);

  const handleScroll = (e: UIEvent<HTMLDivElement>) => {
    const containerWidth = e.currentTarget.clientWidth;
    const scrollWidth = e.currentTarget.scrollWidth;
    const scrollLeft = e.currentTarget.scrollLeft;
    const isEnd = scrollWidth - scrollLeft === containerWidth;
    if (isEnd && airBnbEvents.state !== "loading") {
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
        <Stack
          component="div"
          direction="row"
          spacing={1}
          onScroll={handleScroll}
          px={4}
          boxSizing="border-box"
          overflow="scroll"
          alignItems="center"
        >
          {(airBnbEvents.state === "loading" ||
            airBnbEvents.state === "loaded") &&
            airBnbEvents.value?.map((item, i) => (
              <AirBnbCard
                airBnbEvent={item}
                key={i}
                onRemoveCard={(airBnbEvent: AirBnbEvent) => {
                  dispatch(removeElement(airBnbEvent));
                }}
              />
            ))}
          {airBnbEvents.state === "loading" && <LoadingSpinner />}
        </Stack>
        {/* <div
          id="scrollableDiv"
          style={{
            width: "100vw",
            display: "flex",
            flexDirection: "row",
          }}
        >
          <InfiniteScroll
            dataLength={airBnbEvents.length}
            next={getAllEvent}
            hasMore={true}
            loader={<LoadingSpinner />}
            style={{ display: "flex", flexDirection: "row" }}
            scrollableTarget="scrollableDiv"
          >
          </InfiniteScroll>
        </div> */}
      </Stack>
    </ThemeProvider>
  );
};

export default AirBnbPage;
