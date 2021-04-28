import React from 'react';
import {Text, View, Image} from 'react-native';
import styles from './styles';
import {Icons} from '../../assets';
import GradientBackground from '../../components/shared/gradientBackground';

const Profile = () => {
  return (
    <>
      <View style={styles.flex1}>
        <View style={styles.flex05}>
          <GradientBackground style={styles.profileImageContainer} />
          <View style={styles.content}>
            <Image
              source={{
                uri:
                  'https://images.pexels.com/photos/1704488/pexels-photo-1704488.jpeg',
              }}
              style={styles.profilePic}
              resizeMode="cover"
            />
          </View>
          <View
            style={[
              styles.fdRow,
              styles.mt10percent,
              styles.paddingH20,
              styles.mb3percent,
            ]}>
            <Text style={[styles.generalFont, styles.font12, styles.color606]}>
              STATUS
            </Text>
            <Text
              style={[
                styles.generalFont,
                styles.font12,
                styles.colorOrange,
                styles.paddingH20,
              ]}>
              ACTIVE
            </Text>
          </View>
          <View style={styles.border} />
          <View style={[styles.paddingH20, styles.mt3percent]}>
            <Text
              style={[
                styles.generalFont,
                styles.font14,
                styles.colorDark,
                styles.fontBold,
              ]}>
              About
            </Text>
            <Text style={[styles.font50, styles.colorash, styles.h50]}>“</Text>
            <Text>I am Tayo and i am a student</Text>

            <View
              style={[styles.fdRow, styles.mt10percent, styles.alignCenter]}>
              <Image
                source={Icons.phoneIcon}
                style={styles.wh15}
                resizeMode="contain"
              />
              <Text
                style={[styles.generalFont, styles.font12, styles.paddingH20]}>
                09038767833
              </Text>
            </View>
            <View style={[styles.fdRow, styles.mt10percent]}>
              <Image
                source={Icons.locationPin}
                style={styles.wh20}
                resizeMode="contain"
              />
              <Text
                style={[styles.generalFont, styles.font12, styles.paddingH20]}>
                Isolo, Lagos
              </Text>
            </View>
          </View>
        </View>
      </View>
    </>
  );
};

export default Profile;
