import { Dimensions, PixelRatio, Platform } from 'react-native';

export const windowWidth = Dimensions.get('window').width;
export const windowHeight = Dimensions.get('window').height;

export const widthPercentageToDP = (widthPercent: string) => {
  const elemWidth = parseFloat(widthPercent);
  return PixelRatio.roundToNearestPixel((windowWidth * elemWidth) / 100);
};
export const heightPercentageToDP = (heightPercent: string) => {
  const elemHeight = parseFloat(heightPercent);
  return PixelRatio.roundToNearestPixel((windowHeight * elemHeight) / 100);
};

export const checkIphoneX = (): boolean => {
  const X_WIDTH = 375;
  const X_HEIGHT = 812;
  const XSMAX_WIDTH = 414;
  const XSMAX_HEIGHT = 896;

  let isIPhoneX = false;

  if (Platform.OS === 'ios' && !Platform.isPad && !Platform.isTVOS) {
    isIPhoneX =
      (windowWidth === X_WIDTH && windowHeight === X_HEIGHT) ||
      (windowWidth === XSMAX_WIDTH && windowHeight === XSMAX_HEIGHT);
  }

  return isIPhoneX;
};
