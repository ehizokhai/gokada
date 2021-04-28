import React, {useState, useEffect} from 'react';
import type {Node} from 'react';
import {
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import styles from './styles';
import {fetchRidesApi} from '../../redux/actions/Rides';
import {useSelector, useDispatch} from 'react-redux';
import {ModalLoader} from '../../components/shared/Loader';
const Rides = () => {
  const rides = useSelector(state => state.rides);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchRidesApi(rides.rides.length));
  }, []);

  return (
    <View style={styles.flex1}>
      <ScrollView
        style={styles.flex1}
        contentContainerStyle={styles.contentContainer}>
        {rides.isFetching && <ModalLoader />}
        {rides.rides.length > 0 &&
          rides.rides.map((item, index) => {
            return (
              <View key={index} style={[styles.rowContainer, styles.alignC]}>
                <View style={[styles.rowContent]} />
                <View style={[styles.fdColumn]}>
                  <Text
                    style={[styles.typeTxt, styles.generalFont, styles.fontS]}>
                    {item.type}
                  </Text>
                  <Text
                    style={[
                      styles.descriptionTxt,
                      styles.generalFont,
                      styles.fontS,
                      styles.marginL,
                    ]}>
                    {item.name}
                  </Text>
                  <Text
                    style={[
                      styles.typeTxt,
                      styles.generalFont,
                      styles.fontSmall,
                    ]}>
                    {item.company.catchPhrase}
                  </Text>
                </View>
              </View>
            );
          })}
      </ScrollView>
    </View>
  );
};

export default React.memo(Rides); // re-render if props has changed, hence dont re-render
