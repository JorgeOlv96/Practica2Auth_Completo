import { View, Text, FlatList, ImageBackground, ActivityIndicator } from 'react-native'
import React from 'react'
import CardRM from '../../components/card/CardRM';
import { styles } from './HomeScreen.styles';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function HomeScreen(props) {
  const { characters, loadMoreData, nextUrl } = props;
  // console.log('Characters', characters)

  const loadMore = () => {
    if(loadMoreData) {
      loadMoreData();
    }
  }

  return (
    <ImageBackground
    source={require('../../assets/background-img.jpg')}
    style={styles.backgroundImage}
    >
      <Text style={styles.titulo}>Personajes</Text>
      <FlatList
        data={characters}
        showsVerticalScrollIndicator={false}
        keyExtractor={(characters) => String(characters.id)}
        renderItem={({ item }) => <CardRM characters={item} />}
        onEndReached={loadMore}
        onEndReachedThreshold={0.1}
        ListFooterComponent={
          nextUrl && <ActivityIndicator style={styles.spiner} size="large" color="#79B543" />
        }
      />
    </ImageBackground>
  )
}

