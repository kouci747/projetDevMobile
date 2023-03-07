import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Button,
} from 'react-native';
import Counter from './src/components/counter';

//styles
const styles = StyleSheet.create({
  input: {
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 5,
    padding: 10,
    marginBottom: 20,
  },
});

const MyToDoList = () => {
  const [toDos, setToDos] = useState([]);
  const [text, setText] = useState('');

  //ajouter dans la todolist
  const handleAddToList = () => {
    //4 : to add the latest value to the list from step 3,
    //the setToDos takes all previous values in it with ...toDos + adds the latest 'text' value
    if (text.length >= 3) {
      setToDos([...toDos, text]);
      //5 : setText field is blanked
      setText('');
    } else {
      alert('longeur minimale non atteinte');
    }
  };
  console.log('here are the ', toDos);
  //supprimer de la todolist
  const handleDeleteFromList = index => {
    const allToDos = [...toDos]; //fetch all toDos in the list and put them in an array
    //we do that because we should not mutate the original state directly
    allToDos.splice(index, 1); //remove the todo item with the index of 1
    setToDos(allToDos); //reset the todo list of items without the deleted value
  };
  return (
    <View>
      <Text> TO DO LIST</Text>
      <TextInput
        style={styles.input}
        placeholder="entrez quelque chose à faire ici"
        value={text} //1: catch the written value
        onChangeText={value => setText(value)}></TextInput>
      {/*2 :setting the text with the latest captured value */}
      <TouchableOpacity onPress={handleAddToList}>
        {/* 3 : when the button is clicked, handleAddToList is called */}
        <Text>Add Todo</Text>
      </TouchableOpacity>

      {toDos.map((todo, index) => (
        <TouchableOpacity key={index} onPress={handleDeleteFromList}>
          <Text>{todo}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};
export default function App() {
  return (
    <>
      <View>
        <MyToDoList />
        {/*
          <Counter nom="kouci" /> {/*using props from the counter component 
          <Counter nom="sofiane" />
          <Counter nom="aghiles" />
          */}
      </View>
    </>
  );
}
