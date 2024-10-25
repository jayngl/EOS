import { StyleSheet, Text, View, Image, SafeAreaView, StatusBar} from 'react-native';

export default function Header() {
  return (
    <SafeAreaView style={styles.header}>
      <Text style={styles.headerText}>Hi Jay</Text>
      <Image source={require("../assets/notifIcon.png")} style={styles.headerIcon} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    paddingHorizontal: 20,
    height: 75,
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    zIndex: 1,
    marginBottom:20,
    paddingTop: StatusBar.currentHeight 
  },
  headerText: {
    color: '#000',
    marginRight: 'auto',
    fontSize: 28,
  },
  headerIcon: {
    width: 50,
    height: 50,
  },
});
