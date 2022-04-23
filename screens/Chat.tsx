import { useEffect, useState } from "react";
import { StyleSheet, FlatList, Text, View, Platform } from "react-native";
import { SearchBar } from "react-native-elements";

import ChatRow, { User } from "../components/ChatRow";
import ContactRow from "../components/ContactRow";
import Colors from "../constants/Colors";
import useColorScheme from "../hooks/useColorScheme";
import { mockData } from "../mock/chat";
import { users } from "../mock/contact";
import { RootTabScreenProps } from "../types";

export default function Chat({ navigation }: RootTabScreenProps<"Chat">) {
  useEffect(() => {}, [mockData]);
  const scheme = useColorScheme();

  const [search, setsearch] = useState("");
  const [searchResult, setSearchResult] = useState<User[]>([]);
  const [onSearch, setOnSearch] = useState(false);

  const updateSearch = (text: string) => {
    setsearch(text);
    let tempSearch: User[] = [];
    users.map((user) => {
      user.name.startsWith(text) && tempSearch.push(user);
    });
    setSearchResult(tempSearch);
  };

  return (
    <View>
      <SearchBar
        platform={Platform.OS as "default" | "ios" | "android"}
        placeholder="Search Here..."
        onChangeText={updateSearch}
        onFocus={() => setOnSearch(true)}
        onCancel={() => setOnSearch(false)}
        value={search}
        containerStyle={{ backgroundColor: Colors[scheme].background }}
      />
      {onSearch ? (
        <FlatList
          style={styles(scheme).container}
          data={searchResult}
          renderItem={({ item }) => <ContactRow user={item} />}
        />
      ) : (
        <FlatList
          style={styles(scheme).container}
          data={mockData}
          renderItem={({ item }) => <ChatRow {...item} />}
        />
      )}
    </View>
  );
}

const styles = (scheme: "light" | "dark") =>
  StyleSheet.create({
    container: {
      height: "100%",
      backgroundColor: Colors[scheme].background,
    },
    title: {
      fontSize: 30,
      fontWeight: "bold",
    },
  });
