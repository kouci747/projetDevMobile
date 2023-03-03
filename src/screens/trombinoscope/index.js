import React, {useState, useEffect} from 'react';
import {View, Text, ScrollView} from 'react-native';
import axios from 'axios';
import CharacterRow from '../../components/characterRow/index';
//[] tableau des dépendances; s'il est vide : s'applique 1 fois + ne surveille rien
//sinon, re-rentre dans le useeffect

const Trombinoscope = () => {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    axios
      .get('https://hp-api.onrender.com/api/characters/students')
      .then(res => {
        console.log(res);
        setCharacters(res.data);
      })
      .catch(err => {
        console.log(err);
        // on gere les erreur
      });
  }, []);

  return (
    <ScrollView>
      <View>
        <Text>Trombinoscope Harry Potter</Text>
      </View>
      {characters.map(character => {
        return <CharacterRow name={character.name} image={character.image} />;
      })}
    </ScrollView>
  );
};

export default Trombinoscope;
