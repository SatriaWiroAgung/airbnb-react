import { Theme, Typography, TypographyProps } from "@mui/material";
import {
  CSSSelectorObjectOrCssVariables,
  SystemCssProperties,
} from "@mui/system";
import * as React from "react";

interface Props extends TypographyProps {
  maxLines?: number;
}

type MutableSx =
  | SystemCssProperties<Theme>
  | CSSSelectorObjectOrCssVariables<Theme>;
const AppTypography = React.forwardRef<HTMLSpanElement, Props>(
  ({ sx, maxLines, ...otherProps }, ref) => {
    let mergedSx: MutableSx;

    const otherSx = sx ? (sx as MutableSx) : {};
    if ((maxLines as number )> 0) {
      mergedSx = {
        textOverflow: "ellipsis",
        display: (maxLines as number ) >= 1 ? "-webkit-box" : "block",
        overflow: "hidden",
        whiteSpace: "pre-wrap",
        lineClamp: maxLines,
        WebkitLineClamp: maxLines,
        WebkitBoxOrient: "vertical",
        ...otherSx,
      };
    } else {
      mergedSx = otherSx;
    }

    return <Typography ref={ref} sx={mergedSx} {...otherProps} />;
  }
);

AppTypography.displayName = "AppTypography";

export default AppTypography;
