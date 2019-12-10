import React, { useState } from 'react';
import { View, SafeAreaView, ScrollView } from 'react-native';
import { Fab, Icon, Text, Card, CardItem, Item, Input, Label, Button, Form } from 'native-base';
import Modal from 'react-native-modal';

import styles from './styles';

const NewWatchlistModal = () => {
  const [isModalVisible, toggleModal] = useState(false);

  return (
    <SafeAreaView style={{ width: '100%', height: '100%' }}>
      <View>
        <Fab onPress={() => toggleModal(!isModalVisible)} style={{ backgroundColor: '#e17055' }}>
          <Icon type="FontAwesome" name="plus" />
        </Fab>
      </View>
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
    </SafeAreaView>
  );
};

export default NewWatchlistModal;
