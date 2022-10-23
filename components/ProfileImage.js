import { StyleSheet, Text, View, Image, Dimensions } from 'react-native';
import { ImageBackground } from 'react-native';
import themes from '../assets/Themes/themes';


export default function ProfileImage() {
  return (
    <View style={styles.container}>
      <ImageBackground style={styles.image} source={require("./../assets/Profiles/mtl.jpg")}>
        <Text style={{ ...styles.text, fontSize: 32 }}>MTL</Text>
        <Text style={styles.text}>1 mile away</Text>
      </ImageBackground>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    borderRadius: 20,
    margin: 20,
    overflow: 'hidden',
    // aspectRatio:1/1.1,
    maxHeight: Dimensions.get("screen").height * 0.4,
  },
  image: {
    flex:1,
    resizeMode: 'cover',
    backgroundColor: 'yellow',
    justifyContent: 'space-between',
    padding: 20,
  },
  text: {
    color: "white",
    fontFamily: "Sydney",
    fontSize:18,
  }
})