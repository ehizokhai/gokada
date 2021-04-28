import 'react-native-gesture-handler';
import React, {useState} from 'react';
import {SafeAreaView, Text, View, StatusBar, Image} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
const GradientBackground = ({children, style, colors}) => {
  const [initialPage, setInitialPage] = useState('');

  return (
    <>
      <LinearGradient
        // start={{x: 0.3, y: 1}}
        //end={{x: 0.5, y: 1.0}}
        //locations={[0.2,0.8,0.9]}
        style={style}
        colors={colors || ['#00c795', '#00c795']}>
        {children}
      </LinearGradient>
    </>
  );
};

// const styles = StyleSheet.create({

// });

export default GradientBackground;
