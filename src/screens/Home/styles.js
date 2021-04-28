import {StyleSheet} from 'react-native';
import Color from '../../utils/colors';

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
  container: {
    ...StyleSheet.absoluteFillObject,
    height: '100%',
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
  btn: {
    backgroundColor: Color.transparentOrange,
    width: '80%',
    height: 40,
    justifyContent: 'center',
    borderRadius: 5,
    alignSelf: 'center',
  },
  modalContent: {
    backgroundColor: 'white',
    padding: 10,
    height: 450,
  },
  btnText: {
    textAlign: 'center',
    color: '#fff',
    fontWeight: 'bold',
  },
  bottomTxt:{
    textAlign: 'center', fontSize: 13, marginTop: 20
  }
});

export default styles;

//export default ;
