// Componente principal do aplicativo
import { NavigationContainer } from '@react-navigation/native';
import AppNavigator from './AppNavigator';

const App = () => {
  return (
    <NavigationContainer>
      <AppNavigator />
    </NavigationContainer>
  );
};

export default App;
