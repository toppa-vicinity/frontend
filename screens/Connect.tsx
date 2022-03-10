import { FlatList, StyleSheet, Text, View } from "react-native";
import Colors from "../constants/Colors";

export default function Connect() {
  return <View style={styles.container} />;
}

const styles = StyleSheet.create({
  container: {
    height: "100%",
    backgroundColor: Colors.dark.background,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
});
