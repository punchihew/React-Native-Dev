import { View, Text,StyleSheet,FlatList } from 'react-native'
import React from 'react'
import { Link } from 'expo-router';


type ItemProps = {title: string};

const Item = ({title}: ItemProps) => (
  <View style={styles.item}>
    <Text style={styles.title}>{title}</Text>
  </View>
);

const DATA = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'First Item',
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    title: 'Second Item',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'Third Item',
  },
];

export default function profile() {
  return (
      
      <View style={styles.container}>
        <Text style={styles.Text}>Hello</Text>
      <Link href="/index">View details</Link>

      <FlatList
        data={DATA}
        renderItem={({item}) => <Item title={item.title} />}
        keyExtractor={item => item.id}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:"orange",
  },
  
  item: {
    backgroundColor: '#f9c2ff',
    padding: 10,
    marginVertical: 2,
    marginHorizontal: 6,
    marginTop:20,
  },
  title: {
    fontWeight:'bold',
    fontSize: 12,
  },
  Text:{
    fontSize:20,
    alignItems:"center"
  }
});