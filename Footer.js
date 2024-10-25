import { StyleSheet, Text, View,Image, SafeAreaView, TouchableOpacity} from 'react-native';

export default function Footer() {
  return (

    <View style={styles.footer}>
       <TouchableOpacity><Image source={require("../assets/home.png")} style={styles.footerIcons}/></TouchableOpacity> 
       <TouchableOpacity><Image source={require("../assets/bot.png")} style={styles.footerIcons}/></TouchableOpacity> 
       <TouchableOpacity><Image source={require("../assets/user.png")} style={styles.footerIcons}/></TouchableOpacity> 

    </View>  

    )
}


const styles = StyleSheet.create({

    footer:{
        flex:1,
        display:"flex",
        flexDirection:"row",
        justifyContent:"space-evenly",
        alignItems:"center",
        columnGap:25,
        backgroundColor:"#fff",
        padding:0,
        margin:0,
       height:60,
       width:"100%",
       marginTop:50,
     


       position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        height: 60,
        zIndex: 1,
        
    },

    footerIcons:{
        width:30,
        height:30

    }
  });
