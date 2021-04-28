import React from 'react';
import {Text, View} from 'react-native';
import MapView, {PROVIDER_GOOGLE} from 'react-native-maps';
import {TouchableOpacity} from 'react-native-gesture-handler';
import BottomSheet from 'reanimated-bottom-sheet';
import styles from './styles';
const Home = ({navigation}) => {
  const sheetRef = React.useRef(null);
  const renderContent = () => (
    <View style={styles.modalContent}>
      <TouchableOpacity
        activeOpacity={6}
        style={styles.btn}
        onPress={() => alert('Hello')}>
        <Text style={styles.btnText}>Find Rider</Text>
      </TouchableOpacity>
      <Text style={styles.bottomTxt}>
        Please click on the Rides menu on the side bar to fetch from api
      </Text>
    </View>
  );
  return (
    <View style={styles.container}>
      <Text>Hello world</Text>
      <MapView
        provider={PROVIDER_GOOGLE} // remove if not using Google Maps
        style={styles.map}
        region={{
          latitude: 37.78825,
          longitude: -122.4324,
          latitudeDelta: 0.015,
          longitudeDelta: 0.0121,
        }}
      />
      <BottomSheet
        ref={sheetRef}
        snapPoints={[450, 300, 50]}
        borderRadius={10}
        renderContent={renderContent}
      />
    </View>
  );
};

export default Home;

//export default ;
