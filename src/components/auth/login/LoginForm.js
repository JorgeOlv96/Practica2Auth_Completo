import { View, Text } from 'react-native'
import React from 'react'
import { Button, TextInput } from 'react-native-paper';
import { useFormik } from 'formik';
import * as Yup from 'yup'
import { globalStyle } from '../../../styles'
import { authApi } from '../../../api/auth';
import Toast from 'react-native-root-toast';
import { useAuth } from '../../../hooks/useAuth';

export default function LoginForm(props) {

  const { showRegister } = props;
  const { login } = useAuth();

    const formik = useFormik({
        initialValues: {
            email: '',
            password: ''
        },
        validationSchema: Yup.object({
            email: Yup.string().email(true).required(true),
            password: Yup.string().required(true).min(8, true)
        }),
        validateOnChange: false,
        onSubmit: async (formData) => {
            try {
                const { email, password } = formData;
                const res = await authApi.login(email, password);
                login(res.jwt)
            } catch (error) {
                // console.log(error)
                Toast.show('Usuario y/o contraseña incorrectos.', {
                    position: Toast.positions.CENTER
                })
            }
        }
    });

  return (
    <View>
            <TextInput
                label="Correo Electrónico"
                style={globalStyle.form.input}
                autoCapitalize='none'
                onChangeText={(text) => formik.setFieldValue('email', text)}
                value={formik.values.email}
                error={formik.errors.email}
            />
            <TextInput
                label="Contraseña"
                style={globalStyle.form.input}
                secureTextEntry
                onChangeText={(text) => formik.setFieldValue('password', text)}
                value={formik.values.password}
                error={formik.errors.password}
            />
            <Button
                mode="contained"
                style={globalStyle.form.buttonSubmit}
                onPress={formik.handleSubmit}
                loading={formik.isSubmitting}
            >
                Iniciar sesión
            </Button>
            <Button
                mode="text"
                style={globalStyle.form.buttonText}
                onPress={showRegister}
            >
                Registrarse
            </Button>
        </View>
  )
}