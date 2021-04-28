import {StyleSheet} from 'react-native';
import {makeResponsive} from '../../components/shared/responseiveFontSize';

const styles = StyleSheet.create({
  fontFam: {
    //fontFamily: Font.HK,
  },
  nameStyle: {
    fontSize: makeResponsive(13),
  },
  emailStyle: {
    fontSize: makeResponsive(12),
  },
  loopContainer: {
    flex: 1,
    backgroundColor: '#fff',
    marginTop: '10%',
    padding: 20,
  },
  topLoopHeight: {
    height: '12%',
  },
  loopContent: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  title: {
    marginLeft: 10,
    //fontFamily: Font.HK,
    fontSize: 15,
    color: '#606062',
    fontWeight: 'bold',
  },
  icon: {
    width: 20,
    height: 20,
  },
  flex1: {
    flex: 1,
  },
  flex022: {
    flex: 0.22,
  },
  fdColumn: {
    flexDirection: 'column',
  },
  pd15: {
    padding: 15,
  },
});

export default styles;
