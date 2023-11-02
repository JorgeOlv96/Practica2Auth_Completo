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

export default function ChangeName() {
  const { user, upDateUser } = useAuth();
  const navigation = useNavigation();

  const formik = useFormik({
    initialValues: {
      firstname: user.firstname || '',
      lastname: user.lastname || '',
    },
    validationSchema: Yup.object({
      firstname: Yup.string().required(true),
      lastname: Yup.string().required(true),
    }),
    validateOnChange: false,
    onSubmit: async (formData) => {
      try {
        await userController.actualizaUser(user.id, formData);
        upDateUser('firstname', formData.firstname);
        upDateUser('lastname', formData.lastname);
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
      style={{ 
        flex: 1, 
        backgroundColor: 'black' 
      }}
      contentContainerStyle={{ 
        flexGrow: 1, 
        justifyContent: 'center' 
      }}
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
          Cambiar nombre y apellido
        </Text>
        <TextInput
          label="Nombre(s)"
          style={{
            ...globalStyle.form.input,
            backgroundColor: 'white',
            marginBottom: 10,
            color: 'black',
          }}
          autoCapitalize="none"
          onChangeText={(text) => formik.setFieldValue('firstname', text)}
          value={formik.values.firstname}
          error={formik.errors.firstname}
        />
        <TextInput
          label="Apellidos"
          style={{
            ...globalStyle.form.input,
            backgroundColor: 'white',
            marginBottom: 10,
            color: 'black',
          }}
          autoCapitalize="none"
          onChangeText={(text) => formik.setFieldValue('lastname', text)}
          value={formik.values.lastname}
          error={formik.errors.lastname}
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
