import React from 'react';
import {Modal, View, Image, Text, Button, StyleSheet} from 'react-native';
import Icon from 'react-native-ionicons';
const placeDetail = props => {
  let modalContent = null;

  if (props.selectedPlace) {
    modalContent = (
      <View>
        <Image source={props.selectedPlace.image} style={styles.placeImage} />
        <Text style={styles.placeName}>{props.selectedPlace.name}</Text>
      </View>
    );
  }
  return (
    <Modal
      onRequestClose={props.onModalClosed}
      visible={props.selectedPlace !== null}
      animationType="slide">
      <View style={styles.modalContainer}>
        {modalContent}
{/* icon For Android */}
        <Icon
          style={styles.deleteClosedStyle}
          android="md-trash"
          color="red"
          onPress={props.onItemDeleted}></Icon>
          {/* Icon For Ios */}
            {/* <Icon
          style={styles.deleteClosedStyle}
          ios="md-trash"
          color="red"
          onPress={props.onItemDeleted}></Icon> */}



{/* Icon For android */}
        <Icon
          style={styles.deleteClosedStyle}
          onPress={props.onModalClosed}
          android="md-close-circle"></Icon>
          {/* Icon For Ios */}
          {/* <Icon
          style={styles.deleteClosedStyle}
          onPress={props.onModalClosed}
          ios="md-close-circle"></Icon> */}

      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalContainer: {
    margin: 22,
  },
  placeImage: {
    width: '100%',
    height: 200,
  },
  placeName: {
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: 28,
  },
  deleteClosedStyle: {
    textAlign: 'center',
  },
});

export default placeDetail;
