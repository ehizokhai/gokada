import {StyleSheet, Dimensions} from 'react-native';
import {makeResponsive} from '../../components/shared/responseiveFontSize';
//import Font from '../../utils/fonts';
import Colors from '../../utils/colors';

const width = Dimensions.get('window').width;

const percent30 = (8 / 100) * width;
const styles = StyleSheet.create({
  flex1: {
    flex: 1,
    backgroundColor: '#fff',
  },
  rowContainer: {
    flexDirection: 'row',
    paddingVertical: 5,
    paddingHorizontal: 18,
    backgroundColor: 'rgba(245, 134, 52, 0.05)',
    alignItems: "center"
  },
  rowContent: {
    width: percent30,
    height: percent30,
    borderRadius: percent30 / 2,
    backgroundColor: 'rgba(245, 134, 52, 0.2);',
    marginRight: 10,
  },
  fdColumn: {
    flexDirection: 'column',
  },
  typeTxt: {
    color: '#757575',
  },
  generalFont: {
    //fontFamily: Font.HK,
  },
  descriptionTxt: {
    color: '#39282B',
  },
  alignC: {
    alignItems: 'center',
  },
  fontS: {
    fontSize: 12,
  },
  fontSmall: {
    fontSize: 10,
  },
  averageFont: {
    paddingLeft: 20,
    fontSize: 14,
    marginTop: 20,
    marginBottom: 13,
  },
  contentContainer:{
    paddingBottom: 20,
  }
});

export default styles;
