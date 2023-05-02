import DeleteIcon from "@mui/icons-material/Delete";
import StarIcon from "@mui/icons-material/Star";
import {
  Box,
  Button,
  Card,
  CardActionArea,
  CardActions,
  Stack,
  Typography,
} from "@mui/material";
import { Scaled } from "../../constants";
import AirBnbEvent from "../../models/AirBnbEvent";
import AppTypography from "../AppTypography";

interface AirBnbCardProps {
  airBnbEvent: AirBnbEvent;
  onRemoveCard: (airBnbEvent: AirBnbEvent) => void;
}

const AirBnbCard = (props: AirBnbCardProps) => {
  return (
    <Card
      sx={{
        width: "300px",
        height: "fit-content",
        borderRadius: "12px",
      }}
    >
      <CardActionArea
        href="https://www.airbnb.co.id/s/experiences/online"
        target="_blank"
      >
        <Stack
          sx={{
            position: "relative",
          }}
        >
          <Box
            component="img"
            width={"100%"}
            sx={{
              aspectRatio: "2/3",
              objectFit: "cover",
            }}
            src={props.airBnbEvent.image}
          />

          <Stack
            direction="column"
            marginX={Scaled.px(8)}
            marginY={Scaled.px(8)}
          >
            <Stack direction="row" alignItems="center">
              <StarIcon width={Scaled.px(20)} sx={{ color: "#FE395C" }} />
              <Typography
                fontSize={Scaled.rem(16)}
                color={"#222222"}
                marginLeft={Scaled.px(10)}
              >
                {props.airBnbEvent.rating}
              </Typography>
              <Typography fontSize={Scaled.rem(16)} sx={{ color: "#918E9B" }}>
                ({props.airBnbEvent.numberOfRating}) ·{" "}
                {props.airBnbEvent.country}
              </Typography>
            </Stack>
            <AppTypography
              fontSize={Scaled.rem(16)}
              fontWeight={"bold"}
              maxLines={1}
              lineHeight={"normal"}
              marginY={Scaled.px(12)}
            >
              {props.airBnbEvent.description}
            </AppTypography>
          </Stack>
        </Stack>

        <Typography
          sx={{
            position: "absolute",
            top: 0,
            left: 0,
            color: '#222222',
            background : 'white',
            textTransform: 'uppercase',
            margin: Scaled.px(12),
            paddingX: Scaled.px(8),
            paddingY: Scaled.px(4),
            fontSize: Scaled.rem(14),
            borderRadius: Scaled.px(4),
            boxShadow: '0px 1px 5px 0.05rem grey'
          }}
        >
          {props.airBnbEvent.status}
        </Typography>
      </CardActionArea>
      <CardActions sx={{justifyContent: "center"}}>
        <Button
          variant="text"
          color="error"
          startIcon={<DeleteIcon />}
          onClick={() => props.onRemoveCard(props.airBnbEvent)}
        >
          Remove Item
        </Button>
      </CardActions>
    </Card>
  );
};

export default AirBnbCard;
