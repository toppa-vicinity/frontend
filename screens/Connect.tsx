import { FlatList, StyleSheet, Text, View } from "react-native";
import Colors from "../constants/Colors";

export default function Connect() {
  return <FlatList style={(styles.container, styles.containerDark)} />;
}

const styles = StyleSheet.create({
  container: {
    height: "100%",
  },
  containerDark: {
    backgroundColor: Colors.dark.background,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
});
