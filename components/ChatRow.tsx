import { useNavigation } from "@react-navigation/native";
import { useEffect } from "react";
import {
  View,
  StyleSheet,
  Image,
  Text,
  TouchableHighlight,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";

import Colors from "../constants/Colors";
import useColorScheme from "../hooks/useColorScheme";

export interface User {
  id: string;
  name: string;
  imageURL: string;
}

export interface ChatRowProp {
  id: string;
  user: User;
  recentMsg: Message;
}

export interface Message {
  id: string;
  content: string;
  user: User;
  createdAt: Date;
}

export default function ChatRow(props: ChatRowProp) {
  const { user, recentMsg, id } = props;

  const _onPressButton = () => {
    navigaton.navigate("ChatScreen", { id, user });
  };
  const navigaton = useNavigation();
  const scheme = useColorScheme();
  return (
    <TouchableHighlight onPress={_onPressButton} underlayColor="lightgrey">
      <View style={styles(scheme).container}>
        <Image source={{ uri: user.imageURL }} style={styles(scheme).avatar} />
        <View style={styles(scheme).rightContainer}>
          <View style={styles(scheme).topContainer}>
            <Text style={styles(scheme).username}>{user.name}</Text>
            <Text
              style={styles(scheme).content}
            >{`${recentMsg.createdAt.getMonth()}/${recentMsg.createdAt.getDate()}/${recentMsg.createdAt.getFullYear()}`}</Text>
          </View>
          <Text numberOfLines={1} style={styles(scheme).content}>
            {recentMsg.content}
          </Text>
        </View>
      </View>
    </TouchableHighlight>
  );
}

const styles = (scheme: "light" | "dark") =>
  StyleSheet.create({
    container: {
      flexDirection: "row",
      height: 50,
      width: "80%",
      margin: 10,
      marginTop: 12,
      marginBottom: 12,
    },
    rightContainer: {
      justifyContent: "space-between",
      marginLeft: 12,
      width: "98%",
    },
    topContainer: {
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
    },
    avatar: {
      width: 50,
      height: 50,
      borderRadius: 50,
    },
    username: {
      color: Colors[scheme].text,
      fontSize: 20,
      fontWeight: "bold",
    },
    content: {
      color: "#939CA1",
      fontSize: 16,
      fontWeight: "bold",
    },
  });
