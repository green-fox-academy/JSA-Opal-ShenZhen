import React, { useState } from 'react';
import { View } from 'react-native';
import {
  Content,
  Header,
  Text,
  Button,
  Card,
  CardItem,
  CardFooter,
  Form,
  Picker,
  Input,
  Item,
  Icon,
  Right,
  Container
} from 'native-base';

const NewItemCard = () => {
  const testData = {
    symbol: 'MSFT'
  };
  const [selected, setSelected] = useState('key0');

  const handleSelect = value => setSelected(value);

  return (
    <Container padder>
      <Header />

      <Text>{testData.symbol}</Text>

      <Card transparent>
        {/* <CardItem> */}
        <Text>Watchlists</Text>
        <Form>
          <Item picker>
            <Picker
              mode="dropdown"
              iosIcon={<Icon name="arrow-down" />}
              style={{ width: undefined }}
              placeholder="My watchlists"
              placeholderStyle={{ color: '#bfc6ea' }}
              placeholderIconColor="#007aff"
              selectedValue={selected}
              onValueChange={handleSelect}
            >
              <Picker.Item label="My watchlist 1" value="key0" />
              <Picker.Item label="My watchlist 2" value="key1" />
              <Picker.Item label="My watchlist 3" value="key2" />
              <Picker.Item label="My watchlist 4" value="key3" />
            </Picker>
          </Item>
        </Form>
        {/* </CardItem> */}
        <CardItem footer>
          {/* <Right> */}
          <Button>
            <Text>Cancel</Text>
          </Button>
          <Button>
            <Text>OK</Text>
          </Button>
          {/* </Right> */}
        </CardItem>
      </Card>
    </Container>
  );
};

export default NewItemCard;
