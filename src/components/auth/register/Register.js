import { View, Text } from 'react-native'
import React from 'react'
import { Button, TextInput } from 'react-native-paper'
import { globalStyle } from '../../../styles'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import { authApi } from '../../../api/auth'

export default function Register(props) {

    const { showLogin } = props;
    const formik = useFormik({
        initialValues: {
            email: '',
            username: '',
            password: '',
            repeatPassword: ''
        },
        validationSchema: Yup.object({
            email: Yup.string().email(true).required(true),
            username: Yup.string().required(true),
            password: Yup.string().required(true).min(8, true),
            repeatPassword: Yup.string().required(true).min(8, true).oneOf([Yup.ref('password')], true)
        }),
        validateOnChange: false,
        onSubmit: async (formData) => {
            const { email, username, password } = formData;
            try {
                await authApi.register(email, username, password)
                showLogin()
            } catch (error) {
                // console.log(error)
                Toast.show('Error al registrar el usuario.', {
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
                label="Nombre de usuario"
                style={globalStyle.form.input}
                autoCapitalize='none'
                onChangeText={(text) => formik.setFieldValue('username', text)}
                value={formik.values.username}
                error={formik.errors.username}
            />
            <TextInput
                label="Contraseña"
                style={globalStyle.form.input}
                secureTextEntry
                onChangeText={(text) => formik.setFieldValue('password', text)}
                value={formik.values.password}
                error={formik.errors.password}
            />
            <TextInput
                label="Repetir contraseña"
                style={globalStyle.form.input}
                secureTextEntry
                onChangeText={(text) => formik.setFieldValue('repeatPassword', text)}
                value={formik.values.repeatPassword}
                error={formik.errors.repeatPassword}
            />
            <Button
                mode="contained"
                style={globalStyle.form.buttonSubmit}
                onPress={formik.handleSubmit}
                loading={formik.isSubmitting}
            >
                Registrarse
            </Button>
            <Button
                mode="text"
                style={globalStyle.form.buttonText}
                onPress={showLogin}
            >
                Iniciar sesión
            </Button>
        </View>
    )
}