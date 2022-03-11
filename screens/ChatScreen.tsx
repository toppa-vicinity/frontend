import { useRef, useState } from "react";
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
import { msgs } from "../mock/chat";

export function ChatScreen() {
  const [text, setText] = useState("");
  const chatRef = useRef<FlatList<Message>>(null);
  return (
    <KeyboardAvoidingView
      behavior="position"
      style={styles.container}
      keyboardVerticalOffset={60}
    >
      <FlatList
        ref={chatRef}
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
          returnKeyType="go"
          onSubmitEditing={(input) => alert(input.nativeEvent.text)}
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
