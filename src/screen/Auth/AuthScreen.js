import { View, Text, Image, KeyboardAvoidingView, Platform, ImageBackground } from 'react-native'
import React, { useState } from 'react'
import ButtonSocial from '../../components/ButtonSocial';
import Colors from '../../components/constants/Colors';
import LoginForm from '../../components/auth/login/LoginForm';
import Register from '../../components/auth/register/Register';
import { styles } from './AuthScreen_styles';

export default function AuthScreen() {
  const [showLogin, setShowLogin] = useState(false);
  const imageSource = require('../../assets/logorym.png');

  const showLoginRegister = () => {
    setShowLogin(prevState => !prevState);
  }

  return (
    <ImageBackground
      source={require('../../assets/fondo.jpg')}
      style={styles.backgroundImage}
    >

      <View style={styles.container}>
        <Image source={imageSource} style={styles.image} />
        <KeyboardAvoidingView behavior={Platform.OS === 'android' ? "padding" : "height"}>
          {showLogin ? <Register showLogin={showLoginRegister} /> : <LoginForm showRegister={showLoginRegister} />}
        </KeyboardAvoidingView>

      </View>
    </ImageBackground>
  )
}

