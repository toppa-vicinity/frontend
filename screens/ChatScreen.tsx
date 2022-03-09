import { ScrollView, StyleSheet, Text, View } from "react-native";

export function ChatScreen() {
  return <ScrollView style={styles.container}></ScrollView>;
}

const styles = StyleSheet.create({
  container: {
    height: "100%",
  },
});
