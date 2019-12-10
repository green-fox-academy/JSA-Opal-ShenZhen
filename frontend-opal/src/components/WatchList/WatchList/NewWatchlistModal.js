import React from 'react';
import { View } from 'react-native';
import { Text, Card, CardItem, Item, Input, Label, Button, Form } from 'native-base';
import PropTypes from 'prop-types';
import Modal from 'react-native-modal';
import styles from './styles';

const NewWatchlistModal = ({ isModalVisible, toggleModal }) => {
  return (
    <View>
      <Modal
        isVisible={isModalVisible}
        onBackdropPress={() => toggleModal(false)}
        backdropTransitionOutTiming={0}
      >
        <View>
          <Card>
            <CardItem>
              <Text>Add a new watchlist</Text>
            </CardItem>
            <CardItem>
              <Form style={{ width: '100%' }}>
                <Item underline stackedLabel>
                  <Label>Name of the watchlist</Label>
                  <Input />
                </Item>
              </Form>
            </CardItem>
            <CardItem style={styles.buttonContainer}>
              <Button style={styles.buttonOK} onPress={() => toggleModal(!isModalVisible)}>
                <Text style={styles.buttonText}>OK</Text>
              </Button>
            </CardItem>
          </Card>
        </View>
      </Modal>
    </View>
  );
};

export default NewWatchlistModal;

NewWatchlistModal.propTypes = {
  isModalVisible: PropTypes.bool.isRequired,
  toggleModal: PropTypes.func.isRequired
};
