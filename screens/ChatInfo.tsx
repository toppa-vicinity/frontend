import { RouteProp } from '@react-navigation/native';
import React from 'react'; 
import{ SafeAreaView, Button, StyleSheet, View, Text, Image} from 'react-native'; 
import { TouchableRipple, Title, Caption} from 'react-native-paper';
import Colors from '../constants/Colors';
import { RootStackParamList } from '../types';

export default function ChatInfo({route}:{route: RouteProp<RootStackParamList, "ChatScreen">}){
  return (
    <SafeAreaView style = {styles.container}>
     <View style = {styles.infoScreen}>
       <View style = {{flexDirection: 'row', marginTop: 15}}>
         <Image source={{uri:  route.params?.user.imageURL}} style={styles.avatar}/>
        </View><View style = {{marginLeft: 20}}>
          <Title style = {styles.title}>UserName: {route.params?.user.name}</Title>
          <Caption style = {styles.caption}>ID: {route.params?.user.id}</Caption>
        </View>
       </View>

     <View style = {styles.menuButton}>
       <TouchableRipple onPress = {() => {}}>
          <View style = {styles.menuItem}>
            <Text style = {styles.menuText}>Mute</Text>
          </View>
       </TouchableRipple>

       <TouchableRipple onPress = {() => {}}>
          <View style = {styles.menuItem}>
            <Text style = {styles.menuText}>Chat History</Text>
          </View>
       </TouchableRipple>

       <TouchableRipple onPress = {() => {}}>
          <View style = {styles.menuItem}>
            <Text style = {styles.menuText}>Block</Text>
          </View>
       </TouchableRipple>

       <TouchableRipple onPress = {() => {}}>
          <View style = {styles.menuItem}>
            <Text style = {styles.menuText}>Delete</Text>
          </View>
       </TouchableRipple>

      </View>
     </SafeAreaView>
  );
}







const styles = StyleSheet.create({
  container: {
    height: "100%",
    backgroundColor: Colors.dark.background,
  },infoScreen: {
    paddingHorizontal: 30, 
    marginBottom: 25,
  }, title: {
    color: "#E3E8EE",
    fontSize: 20,
    fontWeight: "600",
  }, avatar: {
    width: 50,
    height: 50,
    borderRadius: 50,
  },caption: {
    color: "#E3E8EE",
    fontSize: 14, 
    lineHeight: 14, 
    fontWeight: "500", 
  }, menuButton: {
    marginTop: 10,
  }, menuItem : {
    flexDirection: 'row', 
    paddingVertical: 15, 
    paddingHorizontal: 30, 
  }, menuText: { 
    color: "#E3E8EE",
    marginLeft: 20, 
    fontWeight: '600', 
    fontSize: 16, 
    lineHeight: 26 
  }
});
