import { View, Text, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import { styles } from './Card.style';
import { useNavigation } from '@react-navigation/native';
import { Avatar, Card, IconButton } from 'react-native-paper';

export default function CardRM(props) {
  const { characters } = props;
  const navigation = useNavigation();

  const goToPersonaje = () => {
    navigation.navigate('Detail', {
      id: characters.id,
      name: characters.name,
      status: characters.status,
      species: characters.species,
      type: characters.type,
      image: characters.image,
      gender: characters.gender,
      origin: characters.origin.name,
    })

  }
  return (
    <TouchableOpacity onPress={goToPersonaje} style={styles.container}>
      <View style={styles.cardContainer}>
      <Avatar.Image size={70} source={{ uri: characters.image }} />
        <View style={styles.contentext}> 
          <Text style={styles.cardTitle}>{characters.name}</Text>
          <Text style={styles.cardText}>Especie: {characters.species} </Text>
        </View>
        <Text style={styles.cardTextSecondary}>#0{characters.id} </Text>
      </View>
    </TouchableOpacity>
  )
}
