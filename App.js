import AppLoading from 'expo-app-loading';
import { StyleSheet, Text, View, StatusBar, ScrollView } from 'react-native';
import { useFonts } from 'expo-font';
import { Themes } from './assets/Themes';
import NavBar from './components/NavBar';
import ProfileImage from './components/ProfileImage';
import HotTake from './components/HotTake';
import TabBar from './components/TabBar';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { palette } from './assets/Themes/palette';
import themes from './assets/Themes/themes';

export default function App() {
  let [fontsLoaded] = useFonts({
    Sydney: require('./assets/Fonts/Sydney-Serial-Regular.ttf'),
    SydneyBold: require('./assets/Fonts/Sydney-Serial-Bold.ttf'),
  });
  if (!fontsLoaded) return <AppLoading />;
  /* ^Don't mind/edit the code above, it's there to load the font for you! */
  StatusBar.setBarStyle(Themes.light.statusBar);
  /* ^Don't mind/edit this one either unless you decide to do the dark theme one, in that case, you will have to change it accordingly*/

  /* insert your code here */

  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.safeArea} edges={['top','left','right']}>
        <View style={styles.container}>
          <NavBar></NavBar>
          <View style={styles.profileContainer}>
            <ProfileImage styles={styles.profileImage}></ProfileImage>
            <HotTake></HotTake>
          </View>
          <TabBar></TabBar>
        </View>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    backgroundColor: themes.light.bg,
    flex:1,
  },
  container: {
    flex: 1,
    backgroundColor: themes.light.bg,
    alignItems: 'stretch',
    justifyContent: 'flex-start',
    overflow: 'hidden'
  },
  profileContainer: {
    flex: 1,
    alignItems: 'stretch',
    justifyContent:'flex-start'
  },
  profileImage: {
    shadowColor: themes.light.shadows.shadowColor,
    shadowRadius: themes.light.shadows.shadowRadius,
    shadowOffset: themes.light.shadows.shadowOffset,
    shadowOpacity: themes.light.shadows.shadowOpacity,
  }
});
