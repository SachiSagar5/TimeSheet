import React, {useState,useEffect } from 'react';
import { Container, Content,  Button,
   Text,Form, Item, Input, Label } from 'native-base';

import { StyleSheet,Image} from "react-native";
import img from '../assets/undraw_fingerprint_swrc.png'
export default  function Login ({ navigation }) { 
 
    const [useLogin,setLogindetails] = useState({username:'',password:null})
    const handleUsername = (val) => {
      setLogindetails({
        username: val,
      })
    }
      const handlepassword = (val) => {
        setLogindetails({
          password:val
        })
    }
    useEffect(()=>{
      
    })

   const handleLogin=()=>{
     fetch('https://reqres.in/api/login', {
        method: 'POST', // or 'PUT'
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          "email": useLogin.username,
          "password": useLogin.password
      }),
      }).then((response) =>  response.json()).then((res) => {
          alert(JSON.stringify(res));
          navigation.push('Profile')
      })
    }
    return (
      <Container>
        
        <Content style={{padding:'10px'}} >
        <Form> 
            <Item stackedLabel>
              <Label>Employee ID : {useLogin.username}</Label>
              <Input  name='username' onChangeText={handleUsername}/>
            </Item>
            <Item stackedLabel last>
    <Label>Password {useLogin.password}</Label>
              <Input name='password' onChangeText={handlepassword} secureTextEntry={true}/>
            </Item>
            
                <Button  block style={styles.red}   onPress={handleLogin}>
                <Text>Login</Text>
              </Button>
             
          </Form>
          <Image source={ {uri:img}}  style={styles.MainContainer}>
          </Image>
        </Content>
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
  },
  MainContainer: {
    // flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width:200,
    height: 200,
  }
 
})