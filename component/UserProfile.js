import React, {useState,useEffect } from 'react';
import { Container, Header, Title, Content, Footer, FooterTab, Button,
   Left, Right, Body, Text,Icon,Form, Item, Input, Label,View } from 'native-base';

import { StyleSheet} from "react-native";

export default  function UserProfile ({ navigation }) { 
 
    return (
      <Container>
        <Content style={{padding:'10px'}}>
          <Text>Hello</Text>
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