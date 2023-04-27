export namespace Scaled {
  export const ofValue = (value: number) => +(UIScale * value).toFixed(3);

  export const px = (value: number) => `${ofValue(value)}px`;
  export const rem = (pxValue: number) => `${ofValue(pxValue) / 16}rem`;
}

export const responsivePx = (xlPxValue: number) => ({
  sm: Scaled.px(xlPxValue * 0.5),
  md: Scaled.px(xlPxValue * 0.75),
  lg: Scaled.px(xlPxValue * 0.9),
  xl: Scaled.px(xlPxValue),
});
export const responsiveRem = (xlPxValue: number) => ({
  sm: Scaled.rem(xlPxValue * 0.5),
  md: Scaled.rem(xlPxValue * 0.75),
  lg: Scaled.rem(xlPxValue * 0.9),
  xl: Scaled.rem(xlPxValue),
});
export const responsiveNum = (xlValue: number) => ({
  sm: xlValue * 0.5,
  md: xlValue * 0.75,
  lg: xlValue * 0.9,
  xl: xlValue,
});

export const UIScale = 1;
