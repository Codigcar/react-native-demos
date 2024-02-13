import {
    backgroundColor,
    backgroundColorShorthand,
    border,
    color,
    composeRestyleFunctions,
    // composeRestyleFunctions,
    createRestyleFunction,
    layout,
    opacity,
    position,
    shadow,
    spacing,
    spacingShorthand,
    textShadow,
    typography,
    visible,
  } from '@shopify/restyle'
// import { BoxProps, Theme } from "."

  
//   export const box = [
//     backgroundColor,
//     backgroundColorShorthand,
//     border,
//     layout,
//     opacity,
//     position,
//     shadow,
//     spacing,
//     spacingShorthand,
//     visible,
//   ]
  
  const fontFamily = createRestyleFunction({
    property: 'fontFamily',
    themeKey: 'fontFamily',
  })
  const fontSize = createRestyleFunction({
    property: 'fontSize',
    themeKey: 'fontSize',
  })
  const fontWeight = createRestyleFunction({
    property: 'fontWeight',
    themeKey: 'fontWeight',
  })
  const letterSpacing = createRestyleFunction({
    property: 'letterSpacing',
    themeKey: 'letterSpacing',
  })
  const lineHeight = createRestyleFunction({
    property: 'lineHeight',
    themeKey: 'lineHeight',
  })
  
  export const text = composeRestyleFunctions([
    typography,
    color,
    fontFamily,
    fontSize,
    fontWeight,
    letterSpacing,
    lineHeight,
    opacity,
    textShadow,
    visible,
  ])
  