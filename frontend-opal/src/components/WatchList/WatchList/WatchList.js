import React, { useEffect, useState } from 'react';
import { View, SafeAreaView, ScrollView } from 'react-native';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import {
  Accordion,
  Fab,
  Icon,
  Text,
  Card,
  CardItem,
  Item,
  Input,
  Label,
  Button,
  Form
} from 'native-base';
import Modal from 'react-native-modal';

import WatchListItem from 'components/WatchList/WatchListItem/WatchListItem';
import thunks from 'thunks/watchlists';
import actions from 'actions/watchlists';
import styles from './styles';

const WatchList = ({ watchlists, getLists, closeInstrumentsInList }) => {
  useEffect(() => {
    getLists();
  }, [getLists]);

  const dataArray = watchlists.map(list => ({
    ...list,
    title: `Watchlist ${list.index + 1}`
  }));

  const [isModalVisible, toggleModal] = useState(false);

  return (
    <SafeAreaView style={{ width: '100%', height: '100%' }}>
      <ScrollView>
        <View>
          <Accordion
            dataArray={dataArray}
            renderContent={WatchListItem}
            headerStyle={{ backgroundColor: 'white', fontWeight: 'bold' }}
            onAccordionClose={() => {
              watchlists.forEach(list => {
                closeInstrumentsInList(list.index);
              });
            }}
          />
        </View>
      </ScrollView>
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

WatchList.propTypes = {
  watchlists: PropTypes.arrayOf(PropTypes.object).isRequired,
  getLists: PropTypes.func.isRequired,
  closeInstrumentsInList: PropTypes.func.isRequired
};

const mapStateToProps = ({ watchlists = [] }) => ({ watchlists });

const mapDispatchToProps = dispatch => ({
  getLists: () => dispatch(thunks.getWatchlistData()),
  closeInstrumentsInList: index => dispatch(actions.closeInstrumentsInList(index))
});

WatchList.title = 'WATCHLIST';

export default connect(mapStateToProps, mapDispatchToProps)(WatchList);
