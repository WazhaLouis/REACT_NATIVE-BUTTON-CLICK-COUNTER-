import React, {useState} from 'react';
import {View, Text, Button, StyleSheet,StatusBar} from 'react-native';

export default function App(){
  const [count, setCount] = useState(0);

  return (
    <View style={{ flex :1 , backgroundColor:"lightgreen",padding:50}} >
      <StatusBar backgroundColor="lightblue" barStyle="light-content"/>

       <Text>You clicked {count} times</Text>

      <Button
        onPress={() => setCount (count + 1)}
        title="Click me!"
      />

      <View style={{ flex :1,padding :20}} >

         <Button title="Reset" onPress={()=> setCount(0) } />
         
      </View>
     
    </View>
  );
};

