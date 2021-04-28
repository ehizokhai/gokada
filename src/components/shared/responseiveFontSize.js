import React from 'react';
import {PixelRatio, Platform, Dimensions} from 'react-native';
//import DeviceInfo from 'react-native-device-info';
const screenWidth = Math.round(Dimensions.get('window').width);

//const isTab = DeviceInfo.isTablet();

export function makeResponsive(size) {
  const scaleValue =
    // isTab
    //   ? Platform.OS === 'ios'
    //     ? 500
    //     : 470
    //   :

    Platform.OS === 'ios' ? 320 : 290;
  const scale = screenWidth / scaleValue;
  const newSize = size * scale;
  if (Platform.OS === 'ios') {
    return Math.round(PixelRatio.roundToNearestPixel(newSize));
  } else {
    return Math.round(PixelRatio.roundToNearestPixel(newSize)) - 2;
  }
}
