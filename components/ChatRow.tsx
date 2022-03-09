import { StyleSheet } from "react-native";

import EditScreenInfo from "../components/EditScreenInfo";
import { Text, View } from "../components/Themed";
import Colors from "../constants/Colors";

export interface User {
  id: String;
  name: String;
  imageURL: String;
}

export interface ChatRowProps {
  id: String;
  user: [User];
}

export interface Mesasge {
  id: String;
  content: String;
  sender: User;
  createdAt: number;
}

export default function ChatRow(props: ChatRowProps) {
  return <View style={(styles.container, styles.containerDark)}></View>;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  containerDark: {
    backgroundColor: Colors.dark.background,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: "80%",
  },
});
