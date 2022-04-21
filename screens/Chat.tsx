import { useEffect } from "react";
import { StyleSheet, FlatList, Text, View } from "react-native";

import ChatRow from "../components/ChatRow";
import Colors from "../constants/Colors";
import useColorScheme from "../hooks/useColorScheme";
import { mockData } from "../mock/chat";
import { RootTabScreenProps } from "../types";

export default function Chat({ navigation }: RootTabScreenProps<"Chat">) {
  useEffect(() => {}, [mockData]);
  const scheme = useColorScheme();

  return (
    <FlatList
      style={styles(scheme).container}
      data={mockData}
      renderItem={({ item }) => <ChatRow {...item} />}
    />
  );
}

const styles = (scheme: "light" | "dark") =>
  StyleSheet.create({
    container: {
      height: "100%",
      backgroundColor: Colors[scheme].background,
    },
    title: {
      fontSize: 30,
      fontWeight: "bold",
    },
  });
