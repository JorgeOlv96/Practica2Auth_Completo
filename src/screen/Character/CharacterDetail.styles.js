import React from 'react';
import { View, Text, ImageBackground, StyleSheet, Image, backgroundImage } from 'react-native';

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    paddingTop: 90,
  },
  imageNameContainer: {
    alignItems: 'center',
    padding: 20,
    borderRadius: 10,
    marginBottom: 20,
  },
  image: {
    marginBottom: 10,
    width: 200,
    height: 200,
    borderRadius: 20,
  },
  nameContainer: {
    flexDirection: 'row',
    alignItems: 'center',  // Alineación vertical
  },
  name: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white',  // Cambié el color del nombre 
    textAlign: 'center',
  },
  infoContainer: {
    backgroundColor: 'rgba(255, 255, 255, 0.7)',
    padding: 20,
    borderRadius: 10,
    width: '80%',
    alignItems: 'flex-start',
    margin: -50,
  },
  infoItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  infoLabel: {
    fontWeight: 'bold',
    marginRight: 10,
    flex: 1,
  },
  infoValue: {
    flex: 2,
  },
  favoriteIcon: {
    marginTop: 10,
  },
})