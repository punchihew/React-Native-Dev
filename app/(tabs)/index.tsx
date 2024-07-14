import { Text, View,StyleSheet,TextInput,Image,Button,Alert } from "react-native";
import React, { useState } from "react";


export default function Index() {

  const [state,setState] = useState('');

  return (
    <View>
      <Text style={styles.nametext}>Welcome To Store</Text>
      <TextInput
        style={styles.input}
        placeholder="Type Here"
        keyboardType="default"
        onChange={(e)=>{
          setState(e.nativeEvent.text)
        }}
      />
       <Image
        style={styles.tinyLogo}
        source={require('../../assets/shoenew.jpeg')}
      />
      <Button
        title="Get One"
        onPress={() => Alert.alert('Add To Card Success')}
      />

      <Text style={styles.nametext}>{state}</Text>

    </View>
    
  )
}

const styles = StyleSheet.create({
  nametext:{
    fontSize:23,
    color:'red',
    textAlign:"center"
  },
  input:{

    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,

  },
  tinyLogo: {
    width: 200,
    height: 200,
    marginLeft : 10
  }
})
