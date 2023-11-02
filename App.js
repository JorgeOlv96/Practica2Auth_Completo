import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import RootNavigation from './src/components/navigation/RootNavigation';
import {
  useFonts,
  Montserrat_300Light,
  Montserrat_400Regular,
  Montserrat_700Bold
} from '@expo-google-fonts/montserrat';
import { MD3LightTheme as DefaultTheme, PaperProvider } from 'react-native-paper';
import { AuthProvider } from './src/context/AuthContext';


const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: '#04B404',
    secondary: '#fff',
  },
};

export default function App() {
  const [fontLoader, fontError] = useFonts({
    Montserrat_300Light,
    Montserrat_400Regular,
    Montserrat_700Bold
  });

  if(!fontLoader && !fontError) {
    return null;
  }

  return (
    <AuthProvider>
      <PaperProvider theme={theme}>
        <RootNavigation />
      </PaperProvider>
    </AuthProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
