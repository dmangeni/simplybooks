import React, { Component } from 'react';
import { Container, Header, Title, Left, Right, Body, Icon } from 'native-base';

export default class HeaderWithOnlyTitle extends Component {

  render() {
    return (
      <Container>
        <Header>
          <Left/>
            <Body>
              <Subtitle>{}</Subtitle>
            </Body>
          <Right />
        </Header>
      </Container>
    );
  }
}
