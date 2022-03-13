import { StyleSheet,FlatList, Text, View } from "react-native";

import Colors from "../constants/Colors";
import ContactRow from "../components/ContactRow";
import { mockData } from "../mock/contact";
import { RootTabScreenProps } from "../types";


export default function Contacts({
  navigation}: RootTabScreenProps<"Contacts">) {
  return (
    <FlatList
      style={styles.container}
      data={mockData}
      renderItem={({ item }) => <ContactRow {...item} />}
    />
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
});
