import React, { Component } from 'react';
import { Container, Header, Item, Input, Icon, Button, Text } from 'native-base';
​
export default class SearchBarExample extends Component {
    render() {
        return (
            <Container>
                <Header searchBar rounded>
                    <Item>
                        <Icon name="search" />
                        <Input placeholder="Search" />
                        <Icon active name="people" />
                    </Item>
                    <Button transparent>
                        <Text>Search</Text>
                    </Button>
                </Header>
            </Container>
        );
    }
}
