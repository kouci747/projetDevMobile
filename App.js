import React, {useState, useEffect} from 'react';
import {View, Text, StyleSheet, Image, ScrollView} from 'react-native';
import axios from 'axios';
// import Counter from './src/components/counter';
// import Home from './src/screens/home';
// import Practice from './src/screens/practice';
// import Trombinoscope from './src/screens/trombinoscope';

const App = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get('https://hp-api.onrender.com/api/characters/students')
      .then(res => {
        setData(res.data);
        // console.log(res.data);
      });
  });

  return (
    <View>
      <Text>Un titre</Text>
      <ScrollView style={styles.scroll}>
        {data?.map(item => (
          <View key={item.id}>
            <Text style={styles.container}>{item.name}</Text>
            <Image
              source={{
                uri: item.image
                  ? item.image
                  : 'https://www.tradeinn.com/f/13888/138888580/warner-bros-coussin-harry-3d.jpg',
              }}
              style={styles.image}
            />
          </View>
        ))}
      </ScrollView>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {color: 'red'},

  image: {
    width: 80,
    height: 80,
  },
  scroll: {
    height: 600,
  },
});

export default App;
