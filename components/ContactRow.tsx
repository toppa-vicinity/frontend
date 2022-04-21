import { useNavigation } from "@react-navigation/native";
import {
  View,
  StyleSheet,
  Image,
  Text,
  TouchableHighlight,
} from "react-native";

import Colors from "../constants/Colors";
import useColorScheme from "../hooks/useColorScheme";

export interface User {
  id: string;
  name: string;
  imageURL: string;
}

export interface ContactRowProp {
  user: User;
}

export default function ContactRow(props: ContactRowProp) {
  const { user } = props;
  const _onPressButton = () => {
    navigaton.navigate("ChatInfo", { user });
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
          </View>
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
      color: Colors[scheme].text,
      fontSize: 20,
      fontWeight: "bold",
    },
    bottomContainer: {
      flexDirection: "row",
      justifyContent: "space-between",
    },
  });
