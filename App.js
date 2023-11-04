import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import BookPostScreen from "./Screens/BookPostScreen"
import Home from './Screens/Home';
import Search from './Screens/Search';
import AddToStorageScreen from './Screens/AddToStorage';
// import EditUser from './Screens/EditUser';

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        {/* <Stack.Screen name="BookPost" component={BookPostScreen} />*/}
        {/* <Stack.Screen name="AddToStorage" component={AddToStorageScreen} /> */}
        {/* <Stack.Screen name="EditUser" component={EditUser} /> */}
        {/* <Stack.Screen name="Home" component={Home} /> */}
        <Stack.Screen name="Search" component={Search} />

      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
