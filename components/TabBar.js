import { StyleSheet, Text, View, Image } from 'react-native';
import { palette } from '../assets/Themes/palette';
import themes from '../assets/Themes/themes';


export default function TabBar() {
  return (
    <View style={styles.container}>
      <View style={styles.iconContainer}>
        <Image resizeMode='contain' style={{height:30,aspectRatio:1} } source={require('./../assets/Icons/discover_light.png') } />
        <Text style={styles.text}>Discover</Text>
      </View>
      <View style={styles.iconContainer}>
        <Image resizeMode='contain' style={{height:30,aspectRatio:1} } source={require('./../assets/Icons/heart_light.png') } />
        <Text style={styles.text}>Matches</Text>
      </View>
      <View style={styles.iconContainer}>
        <Image resizeMode='contain' style={{height:30,aspectRatio:1} } source={require('./../assets/Icons/messages_light.png') } />
        <Text style={styles.text}>DMs</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    padding: 10,
    paddingLeft: 50,
    paddingRight:50,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'stretch',
    backgroundColor: themes.light.navigation
  },
  iconContainer: {
    alignItems:'center',
  },
  text: {
    fontFamily: 'Sydney',
    color: 'white',
    margin:5
  }
})