import React, {useState, useEffect} from 'react';
import {Button, Text, View} from 'react-native';

function Counter() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log('le counter est à', count);
  });
  return (
    <View>
      <Text style={((backgroundColor = 'white'), (fontSize = 40))}>
        {count}
      </Text>
      <Button title="+" onPress={() => setCount(count + 1)} />
      <Button title="-" onPress={() => setCount(count - 1)} />
    </View>
  );
}

export default Counter;
