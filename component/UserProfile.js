import React, {useState,useEffect } from 'react';
import { Container, Header, Title, Content, Footer, FooterTab, Button,
   Left, Right, Body, Text,Icon,Card, CardItem, Thumbnail, } from 'native-base';

import { StyleSheet} from "react-native";

export default  function UserProfile ({ navigation }) { 
 
    return (
      <Container>
        <Content style={{padding:'10px'}}>
        <Card style={{flex: 0}}>
            <CardItem>
              <Left>
                {/* <Thumbnail source={{uri: 'Image URL'}} /> */}
                <Body>
                  <Text>NativeBase</Text>
                  <Text note>April 15, 2016</Text>
                </Body>
              </Left>
            </CardItem>
            <CardItem>
              <Body>
                {/* <Image source={{uri: 'Image URL'}} style={{height: 200, width: 200, flex: 1}}/> */}
                <Text>
                 Lorem
                </Text>
              </Body>
            </CardItem>
            <CardItem>
              <Left>
                <Button transparent textStyle={{color: '#87838B'}}>
                  <Icon name="logo-github" />
                  <Text>1,926 stars</Text>
                </Button>
              </Left>
            </CardItem>
          </Card>
        </Content>
        
        <Footer>
          <FooterTab style={styles.red}>
            <Button vertical>
              <Icon name="person" />
              <Text>Profile</Text>
            </Button>
            <Button vertical>
              <Icon name="grid" />
              <Text>Work Order</Text>
            </Button>
            <Button vertical>
              <Icon active name="navigate" />
              <Text>Timesheet</Text>
            </Button>

          </FooterTab>
        </Footer>
       
      </Container> 
    );
    
  
}

const styles = StyleSheet.create({
  Container:{
    flex:1,
    alignItems:'center'
  },
  red:{
    backgroundColor:'#FA6152'
  }
})