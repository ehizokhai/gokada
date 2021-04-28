import {StyleSheet, Dimensions} from 'react-native';
import {makeResponsive} from '../../components/shared/responseiveFontSize';
import Font from '../../utils/fonts';
import Colors from '../../utils/colors';
//import {hasNotch} from 'react-native-device-info';

//const phoneHasNotch = hasNotch();
const styles = StyleSheet.create({
  flex1: {
    flex: 1,
    backgroundColor: '#fff',
  },

  profileImageContainer: {
    //height: phoneHasNotch ? 115 : 90,
    height: 30,
  },

  content: {
    alignSelf: 'center',
    position: 'absolute',
    top: 2,
  },
  mlAuto: {
    marginLeft: 'auto',
  },
  wh15: {
    width: 15,
    height: 15,
  },
  colorOrange: {
    color: Colors.transparentOrange,
  },
  fdRow: {
    flexDirection: 'row',
  },
  generalFont: {
    //fontFamily: Font.HK,
  },
  mt10percent: {
    marginTop: '10%',
  },
  paddingH20: {
    paddingHorizontal: 20,
  },
  mb3percent: {
    marginBottom: '3%',
  },
  border: {
    borderColor: 'rgba(96, 96, 98, 0.3)',
    borderBottomWidth: 0.5,
  },
  font12: {
    fontSize: 12,
  },
  color606: {
    color: Colors.c606062,
  },
  mt3percent: {
    marginTop: '3%',
  },
  font14: {
    fontSize: 15,
  },
  fontBold: {
    fontWeight: 'bold',
  },
  colorDark: {
    color: Colors.appBlack,
  },
  font50: {
    fontSize: 50,
  },
  colorash: {
    color: '#C4C4C4',
  },
  alignCenter: {
    alignItems: 'center',
  },
  h50: {
    height: 50,
  },
  pv20: {
    paddingVertical: 20,
  },
  fontWeight600: {
    fontWeight: '700',
  },
  flex05: {
    flex: 0.5,
  },
  wh20: {
    width: 20,
    height: 20,
  },
  profilePic: {
    height: 70,
    width: 70,
    borderRadius: 35,
  },
});

export default styles;
