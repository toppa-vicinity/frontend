import { useNavigation } from "@react-navigation/native";
import {
  View,
  StyleSheet,
  Image,
  Text,
  TouchableHighlight,
} from "react-native";

import Colors from "../constants/Colors";

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
  createdAt: Date;
}

export default function ChatRow(props: ChatRowProp) {
  const { user, recentMsg, id } = props;
  const _onPressButton = () => {
    navigaton.navigate("ChatScreen", { id, user });
  };
  const navigaton = useNavigation();
  return (
    <TouchableHighlight onPress={_onPressButton} underlayColor="lightgrey">
      <View style={styles.container}>
        <Image source={{ uri: user.imageURL }} style={styles.avatar} />
        <View style={styles.rightContainer}>
          <View style={styles.topContainer}>
            <Text style={styles.username}>{user.name}</Text>
            <Text
              style={styles.content}
            >{`${recentMsg.createdAt.getMonth()}/${recentMsg.createdAt.getDate()}/${recentMsg.createdAt.getFullYear()}`}</Text>
          </View>
          <Text numberOfLines={1} style={styles.content}>
            {recentMsg.content}
          </Text>
        </View>
      </View>
    </TouchableHighlight>
  );
}

const styles = StyleSheet.create({
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
  },
  topContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 50,
  },
  username: {
    color: "#E3E8EE",
    fontSize: 20,
    fontWeight: "bold",
  },
  content: {
    color: "#939CA1",
    fontSize: 16,
    fontWeight: "bold",
  },
});
