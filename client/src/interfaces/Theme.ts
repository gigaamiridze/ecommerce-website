export interface ITheme {
  colors: IColors;
  fonts: IFonts;
  transition: string;
}

interface IColors {
  white: string;
  black: string;
  primary: string;
  gray: string;
  davyGray: string;
  darkGray: string;
  lightGreen: string;
  darkGreen: string;
}

interface IFonts {
  primary: string;
}
