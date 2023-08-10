export interface ITheme {
  colors: IColors;
  fonts: IFonts;
  transition: string;
}

interface IColors {
  white: string;
  black: string;
  primary: string;
  line: string;
  yellow: string;
  cultured: string;
  gray: string;
  brightGray: string;
  davyGray: string;
  darkGray: string;
  lightGreen: string;
  darkGreen: string;
}

interface IFonts {
  primary: string;
}
