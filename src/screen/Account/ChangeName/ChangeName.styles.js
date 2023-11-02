import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
  },
  contentContainer: {
    flexGrow: 1,
    justifyContent: 'center',
  },
  formContainer: {
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 34,
    color: 'white',
    textAlign: 'center',
    marginBottom: 20,
  },
  input: {
    ...globalStyle.form.input,
    backgroundColor: 'white',
    marginBottom: 10,
    color: 'black',
  },
  buttonSubmit: {
    ...globalStyle.form.buttonSubmit,
    backgroundColor: '#79B547',
    marginTop: 10,
  },
});
