import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack';
import SpaceCraftScreen from './assets/Screens/SpaceCrafts';
import DailyPictureScreen from './assets/Screens/DailyPic';
import StarMapScreen from './assets/Screens/StarMap';


const Stack = createStackNavigator();

function App() {
  return(
      <NavigationContainer>
      <Stack.Navigator initialRouteName='Home' screenOptions={{headerShown: false}} >
      <Stack.Screen name = 'Home' component={HomeScreen}/>
        <Stack.Screen name = "SpaceCrafts" component={SpaceCraftScreen}/>
        <Stack.Screen name = "DailyPic" component={DailyPictureScreen}/>
        <Stack.Screen name = "StarMap" component={StarMapScreen}/>
      </Stack.Navigator>

      </NavigationContainer>
      );
   }

   export default App;
