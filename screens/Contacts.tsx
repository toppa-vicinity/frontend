import { StyleSheet,FlatList, Text, View } from "react-native";

import Colors from "../constants/Colors";
import ContactRow from "../components/ContactRow";
import { mockData } from "../mock/contact";
import { RootTabScreenProps } from "../types";


export default function Contacts({
  navigation}: RootTabScreenProps<"Contacts">) {
  return (
    <View>
      <View>
      <FlatList
      style={styles.container}
      data={mockData}
      renderItem={({ item }) => <ContactRow {...item} />}
      />
      </View>
      <View style={styles.totalFriends}>
        <Text >{10 + ' friends'}</Text>
      </View>
      
    </View>

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
  totalFriends: {
    width: 50,
    height:50,
    backgroundColor: "red",
    // color: "#E3E8EE",
    // fontSize: 12,
    // textAlign: "center"
  }
});
