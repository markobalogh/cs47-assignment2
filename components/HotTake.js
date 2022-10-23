import { StyleSheet, Text, View, Image } from 'react-native';
import { palette } from '../assets/Themes/palette';
import themes from '../assets/Themes/themes';


export default function HotTake() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>My hottest take</Text>
      <View style={styles.waveformContainer}>
        <Image resizeMode="contain" style={{ ...styles.images, width:50 }} source={require('./../assets/Icons/player_light.png')}/>
        <Image resizeMode='contain' style={{ ...styles.images, flex:1}} source={require('./../assets/Icons/audio_waveform_light.png')}/>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'stretch',
    backgroundColor: themes.light.bgSecondary,
    borderRadius:20,
    margin: 20,
    marginTop:0,
  },
  images: {
    height:50
  },
  text: {
    fontFamily: 'Sydney',
    fontSize: 20,
    marginBottom:20
  },
  waveformContainer: {
    flexDirection: 'row',
    justifyContent: "flex-start",
    alignItems:"stretch",
    overflow:'hidden'
  }
})