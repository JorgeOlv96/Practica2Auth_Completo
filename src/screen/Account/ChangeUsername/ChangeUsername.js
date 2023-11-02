import { View, Text, ScrollView } from 'react-native';
import React from 'react';
import { Button, TextInput } from 'react-native-paper';
import { globalStyle } from '../../../styles';
import { userController } from '../../../api/users';
import { useAuth } from '../../../hooks/useAuth';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import Toast from 'react-native-root-toast';
import { useNavigation } from '@react-navigation/native';

export default function ChangeUsername() {
  const { user, upDateUser } = useAuth();
  const navigation = useNavigation();

  const formik = useFormik({
    initialValues: {
      username: user.username,
    },
    validationSchema: Yup.object({
      username: Yup.string().required(true),
    }),
    validateOnChange: false,
    onSubmit: async (formData) => {
      try {
        await userController.actualizaUser(user.id, formData);
        upDateUser('username', formData.username);
        navigation.goBack();
        Toast.show('Datos actualizados con éxito.', {
          position: Toast.positions.CENTER,
        });
      } catch (error) {
        Toast.show('Datos incorrectos.', {
          position: Toast.positions.CENTER,
        });
      }
    },
  });

  return (
    <ScrollView
      style={{ flex: 1, backgroundColor: 'black' }}
      contentContainerStyle={{ flexGrow: 1, justifyContent: 'center' }}
    >
      <View style={{ paddingHorizontal: 20 }}>
        <Text
          style={{
            fontSize: 24,
            color: 'white',
            textAlign: 'center',
            marginBottom: 20,
          }}
        >
          Cambiar Nombre de Usuario
        </Text>
        <TextInput
          label="Nombre de usuario"
          style={{
            ...globalStyle.form.input,
            backgroundColor: 'white',
            marginBottom: 10,
            color: 'black',
          }}
          autoCapitalize="none"
          onChangeText={(text) => formik.setFieldValue('username', text)}
          value={formik.values.username}
          error={formik.errors.username}
        />
        <Button
          mode="contained"
          style={{
            ...globalStyle.form.buttonSubmit,
            backgroundColor: 'green',
            marginTop: 10,
          }}
          onPress={formik.handleSubmit}
          loading={formik.isSubmitting}
          color="white"
        >
          Guardar
        </Button>
      </View>
    </ScrollView>
  );
}
