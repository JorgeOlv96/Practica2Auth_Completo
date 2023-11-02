import { createNativeStackNavigator } from '@react-navigation/native-stack'
import React from 'react'
import CharacterDetail from '../../../screen/Character/CharacterDetail'
import FavoritesScreen from '../../../screen/FavoritesScreen'
import { Image } from 'react-native'

export default function StackFavoritos() {
  const Stack = createNativeStackNavigator()
  return (
    <Stack.Navigator
    initialRouteName='Favoritos'
    >
      <Stack.Screen
        name='Favoritos'
        component={FavoritesScreen}
        options={{
          title: '',
          headerTransparent: true
        }}
      />
      <Stack.Screen
        name='Detail'
        component={CharacterDetail}
        options={{
          title: '',
          headerTransparent: true,
          headerShown: false,
          // headerBackImage: () => (
          //   <Image source={require('../../../assets/logo-button.png')} />
          // ),
          // headerLeftContainerStyle: {
          //   marginTop: 90
          // }

        }}
      />
    </Stack.Navigator>
  )
}