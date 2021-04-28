import * as React from 'react';
import {
  Image,
  Text,
  SafeAreaView,
  Dimensions,
  View,
  TouchableOpacity,
} from 'react-native';
import GradientBackground from '../../components/shared/gradientBackground';
import SideBarHeader from '../../components/gokada-sidebar-card';
import routeData from './data';
import styles from './styles';

const CustomDrawerContent = ({navigation}) => {
  return (
    <View style={styles.flex1}>
      <GradientBackground style={styles.flex022}>
        <SafeAreaView />
        <View style={styles.fdColumn}>
          <SideBarHeader
            name="Jude"
            email="ehizokhai@gmail.com"
            displayPicture="https://images.pexels.com/photos/1704488/pexels-photo-1704488.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
            cardHeight={13}
            //iconHeight = {70}
            style={styles.pd15}
            nameStyle={[styles.nameStyle, styles.fontFam]}
            emailStyle={[styles.fontFam, styles.emailStyle]}
          />
        </View>
      </GradientBackground>
      <View style={styles.loopContainer}>
        {routeData.map((item, index) => {
          return (
            <TouchableOpacity
              key={index}
              onPress={() => navigation.navigate(item.route)}
              activeOpacity={0.9}
              style={styles.topLoopHeight}>
              <View style={styles.loopContent}>
                <Image
                  source={item.icon}
                  style={styles.icon}
                  resizeMode="contain"
                />
                <Text style={styles.title}>{item.title}</Text>
              </View>
            </TouchableOpacity>
          );
        })}
      </View>
    </View>
  );
};

export default CustomDrawerContent;
