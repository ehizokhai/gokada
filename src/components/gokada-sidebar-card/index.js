import React, {useState} from 'react';
import {View, Image, Text, StyleSheet, Dimensions, TouchableOpacity} from 'react-native';
import {Icons} from '../../assets';
//import styles from './styles';
const {width, height} = Dimensions.get('window');

const LendPadiButton = ({
  name,
  email,
  style,
  displayPicture = null,
  iconHeight = 50,
  nameStyle,
  emailStyle,
  onPress,
  cardHeight = 10, // percent of screen
}) => {
  const getPercentHeight = (cardHeig) => {
    const teHeight = (cardHeig / 100) * height;
    return teHeight;
  };

  return (
    <TouchableOpacity
      activeOpacity={9}
      onPress={onPress}
      style={[styles.container, style, {height: getPercentHeight(cardHeight)}]}>
      <View style={styles.content(iconHeight)}>
        <Image
          source={
            displayPicture == null ? Icons.userCard : {uri: displayPicture}
          }
          style={styles.iconStyle}
          resizeMode="cover"
        />
      </View>
      <View>
        <Text style={[styles.nameStyle, nameStyle]}>{name}</Text>
        <Text style={[styles.emailStyle, emailStyle]}>{email}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    width: '100%',
    alignItems: 'center',
  },
  iconStyle: {
    width: '100%',
    height: '100%',
    borderRadius: 100,
  },
  content: (circleHeight) => ({
    height: circleHeight,
    flexDirection: 'row',
    width: circleHeight,
    borderWidth: 1,
    borderColor: '#F58634',
    borderRadius: circleHeight / 2,
  }),
  nameStyle:{
    fontWeight: 'bold', 
    color: '#fff', 
    marginLeft: 10
  },
  emailStyle:{
    color: '#fff', 
    marginLeft: 10
  }
});
export default LendPadiButton;

// import React from 'react';
// import {
//   SafeAreaView,
//   StyleSheet,
//   ScrollView,
//   View,
//   Text,
//   StatusBar,
//   TouchableOpacity,
//   Image,
// } from 'react-native';
// import {
//   Header,
//   LearnMoreLinks,
//   Colors,
//   DebugInstructions,
//   ReloadInstructions,
// } from 'react-native/Libraries/NewAppScreen';
// import LendPadiSelector from './src/components/lendpadi-selector';
// import LendPasswordField from './src/components/lendpadi-phone-input';
// import LendPadiUserCard from './src/components/lendpadi-user-card';

// const App: () => React$Node = ({
//   name,
//   textColor,
//   onPress,
//   type,
//   color,
//   size,
//   prefix,
//   suffix,
//   style,
// }) => {
//   return (
//     <>
//       <StatusBar barStyle="dark-content" />
//       <SafeAreaView style={{flex: 1, backgroundColor: '#F58634'}}>
//           <LendPadiUserCard 
//            name ="Iyoha Jude"
//            email="ehizokhai@gmail.com"
//            displayPicture="https://images.pexels.com/photos/1704488/pexels-photo-1704488.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
//           />
//       </SafeAreaView>
//     </>
//   );
// };

// export default App;