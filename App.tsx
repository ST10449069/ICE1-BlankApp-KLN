import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Hello, Koketso!</Text>
      <StatusBar style="auto" />
      <Text>
      The most difficult part for me was when I needed to run the app and it didn't want to run.
      </Text>
      <Text>
      I communicated with my lecture on how to fix the issue due to getting errors
      </Text>
      <Text> 
      and we solved the problem and my app started running smoothly.
      </Text>
    </View>
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
