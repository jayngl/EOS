import { StyleSheet, Text, View, SafeAreaView, ScrollView } from 'react-native';
import Header from '../Component/Header';
import Footer from '../Component/Footer';
import EnergyUsage from '../Component/EnergyUsage';
import Devices from '../Component/Devices';

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      {/* HEADER */}

      <SafeAreaView>
      <Header style={styles.header} />

      </SafeAreaView>


      {/* BODY */}
      <ScrollView contentContainerStyle={styles.body}>
        <EnergyUsage />
        <Text style={styles.title}>Devices</Text>

        <View style={styles.devicesContainer}>
          <Devices deviceImg={require("../assets/fridge.png")} deviceName="Fridge" deviceEusage={`${12}Kwh`}/>
          <Devices deviceImg={require("../assets/air-conditioner.png")} deviceName="AC" deviceEusage={`${17}Kwh`}/>
          <Devices deviceImg={require("../assets/idea.png")} deviceName="Main Light" deviceEusage={`${8}Kwh`}/>
          <Devices deviceImg={require("../assets/floor-lamp.png")} deviceName="Lamp" deviceEusage={`${6}Kwh`}/>

        </View>
      </ScrollView>

      {/* FOOTER */}

      <View>
      <Footer style={styles.footer} />

      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  body: {
    // display:"flex",
    padding: 0,
    marginTop: 70,
    paddingBottom: 200, // Ensure content doesn’t get cut off by the footer
    // flexGrow:3,
  },
  devicesContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 10,
  },
  title: {
    fontSize: 25,
    marginLeft: 20,
  },
});

