import { View, Text, StyleSheet, ScrollView, Alert, ImageBackground  } from 'react-native'
import React from 'react'
import { Avatar, Button } from 'react-native-paper';
import { useAuth } from '../../hooks/useAuth';

import Menu from '../../components/Menu/Menu';
import { userController } from '../../api/users';
import { getFavoriteApi } from '../../api/favorito';

export default function AccountScreen() {
  const { logout, user, upDateUser } = useAuth();
  console.log('Datos del usuario:', user);

  const logoutAlert  = () => {
    Alert.alert(
      "Cerrar sesión",
      "¿Estas seguro que deseas cerrar sesión?",
      [
        {
          text: "Cancelar",
          style: "cancel"
        },
        {
          text: "Cerrar sesión",
          onPress: async () => {
            const pjFavoritos = await getFavoriteApi();
            const data = {
              favoritos: pjFavoritos
            }
            await userController.actualizaUser(user.id, data)
            upDateUser('favoritos', pjFavoritos)
            logout()
          }
        }
      ],
      { cancelable: false }
    )
  }

  return (
  <ImageBackground
      source={require('../../assets/fondoclaro.png')}
      style={styles.backgroundImage}
    >
      <ScrollView>
        <View style={styles.mainContainer}>
          <Text style={styles.title}>Bienvenido</Text>
          <Text style={styles.name}>{
            user.firstname && user.lastname
              ? `${user.firstname} ${user.lastname}`
              : user.email
          }</Text>

          <Menu />

          <Button
            mode='contained'
            onPress={logoutAlert}
            style={styles.button}
          >
            Cerrar sesión
          </Button>
        </View>
      </ScrollView>
      {/* <View style={styles.footer}></View> */}
    </ImageBackground>
  )
}

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
  },
  container: {
    flex: 1,
    backgroundColor: "#000"
  },
  title: {
    color: "#79B547",
    fontSize: 40,
    fontWeight: 'bold',
    textAlign: 'center'
  },
  mainContainer: {
    flex: 1,
    paddingTop: 40,
    marginHorizontal: 20
  },
  name: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
    color: "#ffffff",
    textAlign: 'center'
  },
  button: {
    marginBottom: 20,
    marginTop: 20,
  },
})