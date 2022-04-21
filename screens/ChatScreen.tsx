import { useEffect, useRef, useState } from "react";
import {
  ScrollView,
  StyleSheet,
  Text,
  View,
  TextInput,
  FlatList,
  KeyboardAvoidingView,
  Platform,
  TouchableNativeFeedback,
  Button,
  TouchableWithoutFeedback,
  Keyboard,
  Dimensions,
} from "react-native";
import { Message } from "../components/ChatRow";
import { MessageBox } from "../components/Message";
import Colors from "../constants/Colors";
import { meUser, mockData, msgs } from "../mock/chat";

export function ChatScreen() {
  const [text, setText] = useState("");
  const chatRef = useRef<FlatList<Message>>(null);
  const inputRef = useRef<TextInput>(null);
  useEffect(() => {}, [msgs]);

  let id = 10000;
  const sendMsg = (newText: string) => {
    if (newText.length < 1) {
      return;
    }
    const newMsg = {
      id: `${Math.floor(Math.random() * 1000)}`,
      user: meUser,
      content: newText,
      createdAt: new Date(),
    };
    msgs.push(newMsg);
    mockData[0] = { ...mockData[0], recentMsg: newMsg };
    setText("");
  };

  return (
    <KeyboardAvoidingView
      behavior="position"
      style={styles.container}
      keyboardVerticalOffset={60}
    >
      <FlatList
        ref={chatRef}
        onContentSizeChange={() => chatRef.current?.scrollToEnd()}
        style={styles.list}
        onScroll={Keyboard.dismiss}
        data={msgs}
        renderItem={({ item }) => <MessageBox {...item} />}
      />
      <View style={styles.inner}>
        <TextInput
          style={styles.textBox}
          // multiline
          onChangeText={(newText) => setText(newText)}
          defaultValue={text}
          onFocus={() => {
            // chatRef.current?.scrollToEnd();
          }}
          ref={inputRef}
          returnKeyType="go"
          onSubmitEditing={(input) => {
            sendMsg(input.nativeEvent.text), inputRef.current?.clear();
          }}
        />
      </View>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: "100%",
    backgroundColor: Colors.dark.background,
  },
  inner: {
    flex: 1,
  },
  textBox: {
    // position: "absolute",
    // bottom: 20,
    width: "90%",
    height: 40,
    margin: 10,
    paddingLeft: 20,
    paddingRight: 10,
    backgroundColor: "grey",
    borderRadius: 50,
    fontSize: 18,
  },
  list: { backgroundColor: Colors.dark.background, height: "92%" },
});
