import { StyleSheet } from "react-native";
import Fonts from "../../components/constants/Fonts";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    marginHorizontal: 20,
  },
  title: {
    fontFamily: Fonts.family.blod,
    fontSize: Fonts.size.targe,
  },
  image: {
    width: 250,
    height: 350,
    alignSelf: "center",
    marginBottom: 5,
  },
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
  }
});