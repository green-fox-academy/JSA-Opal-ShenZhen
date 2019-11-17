import React, { Component } from 'react';
import { Container, Header, Item, Input, Icon, Left, Body, Right, Button, Title, Text } from 'native-base';

const NewHeader = () => {
    return (
        <Container>
            <Header searchBar rounded>
                <Icon name="search"></Icon>
                <Item>
                    <Icon name="ios-search" />
                    <Input placeholder="Search" />
                    <Icon name="ios-people" />
                </Item>

                <Button transparent>
                    <Text>Search</Text>
                </Button>
            </Header>
        </Container>
    )
}

export default NewHeader;