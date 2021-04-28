import React from 'react';
import {ActivityIndicator, StyleSheet, Modal, View} from 'react-native';

const ModalLoader = ({visible, type}) => {
  return (
    <>
      <View style={styles.container}>
        <Modal transparent={true} visible={visible} animationType={'slide'}>
          <View style={styles.modalContainer}>
            <ActivityIndicator size={type || 'small'} color="#900000" />
          </View>
        </Modal>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
  },
});
export {ModalLoader};
