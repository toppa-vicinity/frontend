import { useState } from "react";
import { ScrollView, StyleSheet, Text, View, TextInput } from "react-native";
import Colors from "../constants/Colors";

export function ChatScreen() {
  const [text, setText] = useState("");
  return (
    <View style={(styles.container, styles.containerDark)}>
      <ScrollView>
        <Text>Hi</Text>
      </ScrollView>
      <TextInput
        style={{ height: 40 }}
        placeholder="Type here to translate!"
        onChangeText={(newText) => setText(newText)}
        defaultValue={text}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: "100%",
  },
  containerDark: {
    backgroundColor: Colors.dark.background,
  },
  title: {
    fontSize: 30,
    fontWeight: "bold",
  },
});
