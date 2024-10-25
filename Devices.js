import { StyleSheet, Text, View,Image,TouchableOpacity } from 'react-native';

export default function Devices(props) {
  return (
    <TouchableOpacity style={styles.DeviceCard}>
        <Image source={props.deviceImg} style={styles.DeviceCardImg}></Image>
        <Text>{props.deviceName}</Text>
        <Text>{props.deviceEusage}</Text>
    </TouchableOpacity>
  )
}


const styles = StyleSheet.create({
DeviceCard: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    rowGap: 15,
    padding: 20,
    width: 150,
    height:125,

    // Card styles
    backgroundColor: '#fbca3c',
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 4,  // Elevation for Android shadow
    margin: 10,    // Horizontal and vertical margin
    overflow: 'hidden',
},

    DeviceCardImg:{
      width:50,
      height:50
    }
})
