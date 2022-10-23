import { StyleSheet, Text, View, Image, Platform } from 'react-native';
import { palette } from '../assets/Themes/palette';
import themes from '../assets/Themes/themes';


export default function NavBar() {
  return (
    <View style={styles.container}>
      <View style={{}}>
        <Image style={styles.icons} source={require("./../assets/Icons/menu_light.png")} />
      </View>
      <Text style={styles.text}>ensom</Text>
      <View style={{}}>
        <Image style={styles.icons} source={require("./../assets/Icons/sun.png")}/>
      </View>
    </View>
  )
}


const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: Platform.OS === 'ios' ? 41 : 54,
    paddingLeft: 20,
    paddingRight:20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor:themes.light.bg
  },
  icons: {
    height: '100%',
    aspectRatio:1
  },
  text: {
    fontFamily: 'SydneyBold',
    fontSize: 32,
    textAlignVertical: "center",
    includeFontPadding:false
  }
})