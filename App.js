import { StatusBar } from 'expo-status-bar';
import { StyleSheet} from 'react-native';
import 'react-native-gesture-handler';
import Contexto from './context/Contexto';
import { NavigationContainer } from '@react-navigation/native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import StackNavigation from './navigation/StackNavigation';
import 'react-native-gesture-handler';

export default function App() {
  return (
    <Contexto>
      <SafeAreaProvider>
        <NavigationContainer>
          <StatusBar style="auto" />
          <StackNavigation/>
        </NavigationContainer>
      </SafeAreaProvider>
    </Contexto>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
