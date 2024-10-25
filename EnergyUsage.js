import { StyleSheet, Text, View,Image, SafeAreaView, TouchableOpacity} from 'react-native';

export default function EnergyUsage() {
  return (
    <View style={styles.graphView}>

    <View style={styles.graphCardTitle}> 
        <Text style={styles.tile}>
            Energy Usage
        </Text>

        <Image source={require("../assets/sun.png")} style={styles.sun}></Image>

    </View>

    <View style={styles.UsageAmt}>
        <Text style={styles.UsageAmtText}>22KWH</Text>
    </View>
         
      
      <View style={styles.graphCardBtns}>
      <TouchableOpacity style={styles.btn} >
        <Text>Day</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.btn} >
        <Text>Week</Text>
        </TouchableOpacity>

       <TouchableOpacity style={styles.btn}>
        <Text>Month</Text>
        </TouchableOpacity>

       <TouchableOpacity style={styles.btn}>
        <Text>Year</Text>
        </TouchableOpacity>

      </View>


      <View style={styles.graphCard}>
      <Image source={require("../assets/graph.png")} style={styles.graphCardImg}/>
      </View>

        
    </View>

  )
}


const styles = StyleSheet.create({

    

    graphView:{
        display:"flex",
        justifyContent:"center",
        alignItems:"center",
        flexDirection:"column",
        rowGap:15,
        padding:10,

        // Card styles
        backgroundColor: '#fbca3c',
        borderRadius: 8,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 4,
        elevation: 4, // Elevation for Android shadow
        marginVertical: 10,
        marginHorizontal: 16,
        overflow: 'hidden',

    },

    graphCardTitle:{
        display:"flex",
        justifyContent:"center",
        alignItems:"center",
        flexDirection:"row",
        columnGap:130,
    
    },

    tile:{
        fontSize:20
    },

    UsageAmt:{
        display:"flex",
        marginRight:"auto",
        paddingLeft:15,
        fontSize:15
    },

    UsageAmtText:{
        fontSize:17
    },

    graphCard:{
        padding:10,
        backgroundColor:"#fff",
        borderRadius:10

    },

    graphCardImg:{
        width:300,
        height:300
    },

    graphCardBtns:{
        display:"flex",
        justifyContent:"center",
        alignItems:"center",
        flexDirection:"row",
        columnGap:20
        
    },

    btn:{
        backgroundColor:"#fff",
        color:"#000",
        padding:10,
        borderRadius:20
    },

    sun:{
        width:50,
        height:50
    }

  
  });
