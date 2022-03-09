import { StyleSheet, FlatList, Text, View } from "react-native";

import ChatRow from "../components/ChatRow";
import Colors from "../constants/Colors";
import { mockData } from "../mock/chat";
import { RootTabScreenProps } from "../types";

export default function Chat({ navigation }: RootTabScreenProps<"Chat">) {
  return (
    <FlatList
      style={(styles.container, styles.containerDark)}
      data={mockData}
      renderItem={({ item }) => <ChatRow {...item}></ChatRow>}
    />
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
