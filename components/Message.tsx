import { useNavigation } from "@react-navigation/native";
import {
  StyleSheet,
  View,
  Text,
  Image,
  Pressable,
  TouchableOpacity,
} from "react-native";
import Clipboard from "@react-native-community/clipboard";
import Colors from "../constants/Colors";
import { Message, User } from "./ChatRow";

export function MessageBox(props: Message) {
  const { user, content } = props;
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={() => navigation.navigate("ChatInfo", { user: user })}
      >
        <Image source={{ uri: user.imageURL }} style={styles.avatar} />
      </TouchableOpacity>
      <View style={styles.inner}>
        <Text style={styles.username}>{user.name}</Text>
        <TouchableOpacity style={styles.contentWrapper}>
          <Text selectable style={styles.content}>
            {content}
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    width: "80%",
    // backgroundColor: "cyan",
    margin: 10,
  },
  inner: { marginLeft: 10 },
  username: { fontSize: 16, color: Colors.dark.text, marginBottom: 5 },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 50,
  },
  contentWrapper: { backgroundColor: "wheat", padding: 5 },
  content: {},
});
