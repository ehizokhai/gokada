import * as React from 'react';
import {Image, Dimensions, StyleSheet, TouchableOpacity} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import Screens from '../screens';
import Colors from '../utils/colors';
import {Images, Icons} from '../assets';
import {createDrawerNavigator} from '@react-navigation/drawer';
import CustomDrawerContent from './sidebar';

const Stack = createStackNavigator();
const {width} = Dimensions.get('window');
const imageWidth = (30 / 100) * width;

const StackNav = () => {
  return (
    <Stack.Navigator
      initialRouteName="Home"
      screenOptions={{
        gestureEnabled: false,
        headerBackTitleVisible: false,
        headerTitleAlign: 'center',
        headerHideShadow: true,
        headerTitleStyle: {
          fontSize: 18,
          lineHeight: 25,
        },
      }}>
      <Stack.Screen
        name="Home"
        component={Screens.Home}
        headerShown={true}
        options={({navigation}) => ({
          headerTintColor: Colors.appOrange,
          headerHideShadow: true,
          headerStyle: {
            shadowColor: 'transparent',
            elevation: 0,
            backgroundColor: Colors.transparentOrange,
          },
          headerTitle: (
            props, // App Logo
          ) => (
            <Image
              style={{width: imageWidth}}
              source={Images.logo}
              resizeMode="contain"
            />
          ),
          headerLeft: () => (
            <TouchableOpacity onPress={() => navigation.toggleDrawer()}>
              <Image
                source={Icons.homeMenuWhite}
                style={styles.drawer}
                resizeMode="contain"
              />
            </TouchableOpacity>
          ),
        })}
      />
      <Stack.Screen
        name="Rides"
        component={Screens.Rides}
        headerShown={true}
        options={({navigation, route}) => ({
          title: 'My Rides',
          headerTintColor: Colors.white,
          headerHideShadow: true,
          headerStyle: {
            shadowColor: 'transparent',
            elevation: 0,
            backgroundColor: Colors.transparentOrange,
          },
        })}
      />
      <Stack.Screen
        name="Profile"
        component={Screens.Profile}
        headerShown={true}
        options={() => ({
          title: 'Profile',
          headerTintColor: Colors.white,
          headerHideShadow: true,
          headerStyle: {
            shadowColor: 'transparent',
            elevation: 0,
            backgroundColor: Colors.transparentOrange,
          },
        })}
      />
    </Stack.Navigator>
  );
};

const DrawerNav = () => {
  const Drawer = createDrawerNavigator();
  return (
    <Drawer.Navigator
      drawerContent={props => <CustomDrawerContent {...props} />}>
      <Drawer.Screen name="Home" component={StackNav} />
    </Drawer.Navigator>
  );
};

const styles = StyleSheet.create({
  drawer: {
    width: 20,
    marginLeft: 18,
    height: 30,
  },
});
export default DrawerNav;
