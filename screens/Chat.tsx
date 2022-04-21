import { useEffect } from "react";
import { StyleSheet, FlatList, Text, View } from "react-native";

import ChatRow from "../components/ChatRow";
import Colors from "../constants/Colors";
import { mockData } from "../mock/chat";
import { RootTabScreenProps } from "../types";

export default function Chat({ navigation }: RootTabScreenProps<"Chat">) {
  useEffect(() => {}, [mockData]);

  return (
    <FlatList
      style={styles.container}
      data={mockData}
      renderItem={({ item }) => <ChatRow {...item} />}
    />
  );
}

const styles = StyleSheet.create({
  container: {
    height: "100%",
    backgroundColor: Colors.dark.background,
  },
  title: {
    fontSize: 30,
    fontWeight: "bold",
  },
});
