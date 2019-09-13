import { Dimensions, Platform } from "react-native";
var { height, width } = Dimensions.get("window");

export const CONST = {
  DEVICE_HEIGHT: height,
  DEVICE_WIDTH: width,
  DEVICE_OS: Platform.OS,
  APP_NAME:'LANGUAGE SUPPORT',
  LANG_SELECTION:'Language Selection',
  HOME:'Home',
  SELECTION_TEXT:'Select your language:',
  LANG_ENGLISH:'ENGLISH',
  LANG_HINDI:'HINDI',
  LANG_ARABIC:'ARABIC',
  MOBILE_LANG:'From device default language',
  SELECT_LANG:'Choose your language',
};


export const COLORS = {
WHITE:'#FFF',
LIGHT:'#F5F5F5',
YELLOW: "#FEB813",
BLUE: '#0371c6',
GREEN:'#6AA121',
APP_COLOR:'#5820A1',
DARK:'#25383C',
GRAY:'#E5E4E2',
BLUE_GRAY:'#98AFC7',
LIME_GREEN:'#41A317',
PEACH:'#FFE5B4',
RED:'#FF0000',
BLACK:'#000'
}

export const FONTSIZE = {
  FONT_10: 10,
  FONT_12: 12,
  FONT_14: 14,
  FONT_16: 16,
  FONT_18: 18,
  FONT_20: 20,
  FONT_26: 26,
};



