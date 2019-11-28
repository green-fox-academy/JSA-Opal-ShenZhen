import React from 'react';
import { Header, Left, Body, Right, Button, Icon, Title } from 'native-base';

export default function NewHeader() {
  return (
    <Header>
      <Left>
        <Button transparent>
          <Icon name="menu" />
        </Button>
      </Left>
      <Body>
        <Title>Header</Title>
      </Body>
      <Right>
        <Button transparent>
          <Icon name="search" />
        </Button>
      </Right>
    </Header>
  );
}
