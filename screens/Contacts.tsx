import { StyleSheet, Text, View } from "react-native";

import Colors from "../constants/Colors";
import { RootTabScreenProps } from "../types";

export default function Contacts({
  navigation,
}: RootTabScreenProps<"Contacts">) {
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
