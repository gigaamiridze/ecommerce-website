export interface ITheme {
  colors: IColors;
  fonts: IFonts;
}

interface IColors {
  white: string;
  black: string;
  gray: string;
  darkGray: string;
  lightGreen: string;
  darkGreen: string;
}

interface IFonts {
  primary: string;
}
