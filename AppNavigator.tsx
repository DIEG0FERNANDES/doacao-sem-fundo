// AppNavigator.js
import { createStackNavigator } from '@react-navigation/stack';
import Home from './src/pages/homepage';
import ViewCard from './src/pages/ViewCard';

const Stack = createStackNavigator();

const AppNavigator = () => {
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="ViewCard" component={ViewCard} />
    </Stack.Navigator>
  );
};

export default AppNavigator;
