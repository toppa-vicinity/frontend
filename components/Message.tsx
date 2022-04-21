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
import { useState } from "react";
import type { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParamList } from "../types";
import useColorScheme from "../hooks/useColorScheme";

export function MessageBox(props: Message) {
  const { user, content } = props;
  const me = user.id === "me";
  const navigation = useNavigation();
  const scheme = useColorScheme();

  return !me ? (
    <View style={styles(me, scheme).container}>
      <TouchableOpacity
        onPress={() => navigation.navigate("ChatInfo", { user: user })}
      >
        <Image
          source={{ uri: user.imageURL }}
          style={styles(me, scheme).avatar}
        />
      </TouchableOpacity>
      {/* <Text style={styles.username}>{user.name}</Text> */}
      <TouchableOpacity style={styles(me, scheme).contentWrapper}>
        <Text selectable style={styles(me, scheme).content}>
          {content}
        </Text>
      </TouchableOpacity>
    </View>
  ) : (
    <View style={styles(me, scheme).container}>
      {/* <Text style={styles.username}>{user.name}</Text> */}
      <TouchableOpacity style={styles(me, scheme).contentWrapper}>
        <Text selectable style={styles(me, scheme).content}>
          {content}
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => navigation.navigate("ChatInfo", { user: user })}
      >
        <Image
          source={{ uri: user.imageURL }}
          style={styles(me, scheme).avatar}
        />
      </TouchableOpacity>
    </View>
  );
}

const styles = (me: Boolean, scheme: "light" | "dark") =>
  StyleSheet.create({
    container: {
      flexDirection: "row",
      justifyContent: me ? "flex-end" : "flex-start",
      width: me ? "95%" : "100%",
      margin: 10,
    },
    username: { fontSize: 16, color: Colors[scheme].text, marginBottom: 5 },
    avatar: {
      width: 50,
      height: 50,
      borderRadius: 50,
    },
    contentWrapper: {
      backgroundColor: me ? "cyan" : "wheat",
      padding: 8,
      borderRadius: 5,
      marginTop: 10,
      maxWidth: "75%",
      marginLeft: me ? 0 : 10,
      marginRight: me ? 10 : 0,
    },
    content: { fontSize: 14 },
  });
