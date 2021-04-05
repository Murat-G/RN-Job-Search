import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import { JobList, Home, JobSave} from './pages';
const Stack = createStackNavigator();

function App () {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown:false}}>
        <Stack.Screen name="HomePage" component={Home} />
        <Stack.Screen name="JobListPage" component={JobList} />
        <Stack.Screen name="JobSavePAge" component={JobSave} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;